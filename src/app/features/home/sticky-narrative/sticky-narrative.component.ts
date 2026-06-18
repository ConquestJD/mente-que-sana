import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  PLATFORM_ID,
  QueryList,
  ViewChildren,
  computed,
  inject,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

import { LocaleService } from '../../../core/i18n';
import { IMG } from '../../../shared/images';

interface Stage {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  badge: string;
}

const STAGE_IMAGES = [IMG.handsTea, IMG.meditationGirl, IMG.textile] as const;

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
  protected readonly i18n = inject(LocaleService);

  protected readonly content = computed(() => {
    this.i18n.locale();
    return this.i18n.tObject<{
      eyebrow: string;
      title: string;
      titleEm: string;
      lead: string;
      quote: string;
      quoteAttrName: string;
      quoteAttrRole: string;
      cta: string;
      stages: Omit<Stage, 'image'>[];
    }>('home.stickyNarrative');
  });

  protected readonly stages = computed((): Stage[] => {
    const raw = this.content()?.stages ?? [];
    return raw.map((stage, i) => ({
      ...stage,
      image: STAGE_IMAGES[i] ?? STAGE_IMAGES[0],
    }));
  });

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
