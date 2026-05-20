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

/**
 * Landing hero — full-bleed dramatic Andean sky gradient + grain texture.
 * Subtle mouse parallax on the background and the floating quote frame.
 */
@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [ButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  @ViewChild('parallax', { static: true })
  private parallax?: ElementRef<HTMLElement>;

  private readonly platformId = inject(PLATFORM_ID);

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const target = this.parallax?.nativeElement;
    if (!target) return;
    const { innerWidth, innerHeight } = window;
    const x = (event.clientX / innerWidth - 0.5) * 14;
    const y = (event.clientY / innerHeight - 0.5) * 10;
    target.style.setProperty('--parallax-x', `${x}px`);
    target.style.setProperty('--parallax-y', `${y}px`);
  }
}
