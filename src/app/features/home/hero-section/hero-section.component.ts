import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  PLATFORM_ID,
  ViewChild,
  computed,
  inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { ButtonComponent } from '../../../shared/components/button/button.component';
import { MagneticDirective } from '../../../shared/directives/magnetic.directive';
import { LocaleService, TranslatePipe } from '../../../core/i18n';
import { IMG } from '../../../shared/images';
import { formatNextRetreatBadge } from '../../../shared/retreat-dates';

/**
 * Hero principal — full-bleed con imagen panorámica de los Andes.
 */
@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [ButtonComponent, MagneticDirective, TranslatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  protected readonly i18n = inject(LocaleService);
  protected readonly bgImage = IMG.heroSunrise;

  protected readonly nextRetreatBadge = computed(() =>
    formatNextRetreatBadge(new Date(), this.i18n.locale()),
  );

  protected readonly heroWords = computed(() => {
    this.i18n.locale();
    return this.i18n.tArray('home.hero.words');
  });

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
