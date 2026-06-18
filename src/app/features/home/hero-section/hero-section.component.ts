import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  PLATFORM_ID,
  ViewChild,
  inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { ButtonComponent } from '../../../shared/components/button/button.component';
import { MagneticDirective } from '../../../shared/directives/magnetic.directive';
import { IMG } from '../../../shared/images';
import { formatNextRetreatBadge } from '../../../shared/retreat-dates';

/**
 * Hero principal — full-bleed con imagen panorámica de los Andes.
 *
 * Animaciones:
 *  - Ken Burns lento (zoom infinito sobre la imagen)
 *  - Parallax sobre la imagen al hacer scroll
 *  - Parallax con el ratón sobre las capas frontales
 *  - Reveal palabra por palabra del headline (animación CSS escalonada)
 *  - Indicador de scroll con línea pulsando
 */
@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [ButtonComponent, MagneticDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  protected readonly bgImage = IMG.heroSunrise;
  protected readonly nextRetreatBadge = formatNextRetreatBadge();

  @ViewChild('parallax', { static: true })
  private parallax?: ElementRef<HTMLElement>;
  @ViewChild('imageWrap', { static: true })
  private imageWrap?: ElementRef<HTMLElement>;

  private readonly platformId = inject(PLATFORM_ID);

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const target = this.parallax?.nativeElement;
    if (!target) return;
    const { innerWidth, innerHeight } = window;
    const x = (event.clientX / innerWidth - 0.5) * 16;
    const y = (event.clientY / innerHeight - 0.5) * 12;
    target.style.setProperty('--mx', `${x}px`);
    target.style.setProperty('--my', `${y}px`);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const img = this.imageWrap?.nativeElement;
    if (!img) return;
    const y = Math.min(window.scrollY * 0.35, 300);
    img.style.transform = `translate3d(0, ${y}px, 0) scale(${1 + window.scrollY / 6000})`;
  }
}
