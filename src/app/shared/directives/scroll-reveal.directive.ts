import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Reveals an element on scroll into the viewport.
 *
 * Adds the `reveal` class on init (initial state: invisible + translated),
 * then toggles `visible` when the IntersectionObserver fires.
 *
 * @example
 *  <div appScrollReveal [delay]="120" direction="left">…</div>
 */
@Directive({
  selector: '[appScrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements AfterViewInit, OnDestroy {
  /** Delay (ms) before the visible class is applied — for staggered groups. */
  @Input() delay = 0;
  /** Direction of the entry translation. */
  @Input() direction: 'up' | 'left' | 'right' = 'up';
  /** Reveal only once. Default true (perf-friendly). */
  @Input() once = true;
  /** Visibility threshold for IntersectionObserver (0..1). */
  @Input() threshold = 0.15;

  private observer?: IntersectionObserver;
  private timeoutId?: number;

  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    const host: HTMLElement = this.el.nativeElement;
    host.classList.add('reveal');
    if (this.direction === 'left') host.classList.add('reveal--left');
    if (this.direction === 'right') host.classList.add('reveal--right');

    if (!isPlatformBrowser(this.platformId)) {
      host.classList.add('visible');
      return;
    }
    if (typeof IntersectionObserver === 'undefined') {
      host.classList.add('visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.timeoutId = window.setTimeout(() => {
              host.classList.add('visible');
            }, this.delay);
            if (this.once) this.observer?.unobserve(host);
          } else if (!this.once) {
            host.classList.remove('visible');
          }
        }
      },
      { threshold: this.threshold, rootMargin: '0px 0px -80px 0px' },
    );

    this.observer.observe(host);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.timeoutId) window.clearTimeout(this.timeoutId);
  }
}
