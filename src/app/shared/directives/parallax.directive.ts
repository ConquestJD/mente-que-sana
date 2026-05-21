import {
  AfterViewInit,
  DestroyRef,
  Directive,
  ElementRef,
  Input,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Mueve el elemento en `Y` con velocidad relativa al scroll.
 *
 * @example
 *  <div appParallax [speed]="0.3">…</div>
 *
 *  speed > 0 → mueve más lento que el scroll (efecto "atrás")
 *  speed < 0 → mueve en dirección opuesta (efecto "adelante")
 *  speed = 0 → desactiva
 */
@Directive({
  selector: '[appParallax]',
  standalone: true,
})
export class ParallaxDirective implements AfterViewInit {
  /** Velocidad relativa al scroll. Recomendado: 0.1 - 0.5 */
  @Input() speed = 0.25;
  /** Si `true`, también aplica un scale sutil. */
  @Input() scale = false;

  private rafId?: number;
  private active = false;

  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    if (typeof IntersectionObserver === 'undefined') return;

    const el = this.host.nativeElement;
    el.style.willChange = 'transform';

    const io = new IntersectionObserver(
      ([entry]) => { this.active = entry.isIntersecting; },
      { rootMargin: '120px 0px 120px 0px' },
    );
    io.observe(el);

    const loop = () => {
      if (this.active) this.update();
      this.rafId = requestAnimationFrame(loop);
    };
    this.rafId = requestAnimationFrame(loop);

    this.destroyRef.onDestroy(() => {
      io.disconnect();
      if (this.rafId) cancelAnimationFrame(this.rafId);
    });
  }

  private update(): void {
    const el = this.host.nativeElement;
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || 0;
    const center = rect.top + rect.height / 2 - vh / 2;
    const offset = -center * this.speed;
    const scaleTx = this.scale ? `scale(${1 + Math.abs(offset) / 5000})` : '';
    el.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0) ${scaleTx}`;
  }
}
