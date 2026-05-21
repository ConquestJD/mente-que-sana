import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  PLATFORM_ID,
  QueryList,
  ViewChildren,
  inject,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

import { IMG } from '../../../shared/images';

interface Stage {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  badge: string;
}

/**
 * Storytelling con scroll fijado (sticky). El panel derecho con la imagen
 * permanece fijo mientras los stages del lado izquierdo se intercambian
 * según el scroll. Hace cross-fade y micro-movimiento de cámara.
 */
@Component({
  selector: 'app-sticky-narrative',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './sticky-narrative.component.html',
  styleUrl: './sticky-narrative.component.scss',
})
export class StickyNarrativeComponent implements AfterViewInit {
  protected readonly stages: Stage[] = [
    {
      eyebrow: '01 — Psiconeuroinmunología',
      title: 'Tu mente habla con tu sistema inmune.',
      body: 'El estrés crónico altera tu microbiota, eleva la inflamación y silencia tu vitalidad. La PNI nos enseña a revertirlo desde adentro.',
      image: IMG.handsTea,
      badge: 'CIENCIA',
    },
    {
      eyebrow: '02 — Neurociencia',
      title: 'Tu cerebro cambia a cualquier edad.',
      body: 'La neuroplasticidad es la prueba: cada hábito nuevo reescribe circuitos. Lo que practicas con consciencia, se vuelve quien eres.',
      image: IMG.meditationGirl,
      badge: 'PRÁCTICA',
    },
    {
      eyebrow: '03 — Sabiduría Andina',
      title: 'Mil años cuidando el espíritu.',
      body: 'La cosmovisión quechua entiende la salud como reciprocidad: con el cuerpo, con la tierra, con la comunidad. Ayni.',
      image: IMG.textile,
      badge: 'TRADICIÓN',
    },
  ];

  protected readonly activeIndex = signal(0);

  @ViewChildren('stageEl', { read: ElementRef })
  private stageEls!: QueryList<ElementRef<HTMLElement>>;

  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    if (typeof IntersectionObserver === 'undefined') return;

    const io = new IntersectionObserver(
      (entries) => {
        let bestIndex = this.activeIndex();
        let bestRatio = 0;
        entries.forEach((e) => {
          const idx = Number((e.target as HTMLElement).dataset['stage']);
          if (e.intersectionRatio > bestRatio) {
            bestRatio = e.intersectionRatio;
            bestIndex = idx;
          }
        });
        if (bestRatio > 0) this.activeIndex.set(bestIndex);
      },
      { threshold: [0.3, 0.5, 0.7], rootMargin: '-30% 0px -30% 0px' },
    );

    this.stageEls.forEach((ref) => io.observe(ref.nativeElement));
    this.destroyRef.onDestroy(() => io.disconnect());
  }
}
