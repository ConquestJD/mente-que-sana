import {
  DestroyRef,
  Directive,
  ElementRef,
  HostListener,
  Input,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Hace que el elemento "siga" la posición del ratón con sutil atracción magnética.
 * Útil para CTAs prominentes.
 *
 * @example <a appMagnetic [strength]="0.35">…</a>
 */
@Directive({
  selector: '[appMagnetic]',
  standalone: true,
})
export class MagneticDirective {
  /** 0.2 - 0.5 recomendado. Mayor valor → más atracción. */
  @Input() strength = 0.3;

  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);

  constructor() {
    if (!isPlatformBrowser(this.platformId)) return;
    const el = this.host.nativeElement;
    el.style.transition = el.style.transition || 'transform 200ms cubic-bezier(0.16,1,0.3,1)';
    el.style.willChange = 'transform';

    inject(DestroyRef).onDestroy(() => {
      el.style.transform = '';
    });
  }

  @HostListener('mousemove', ['$event'])
  onMove(e: MouseEvent): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const el = this.host.nativeElement;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) * this.strength;
    const y = (e.clientY - (rect.top + rect.height / 2)) * this.strength;
    el.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
  }

  @HostListener('mouseleave')
  onLeave(): void {
    this.host.nativeElement.style.transform = 'translate(0, 0)';
  }
}
