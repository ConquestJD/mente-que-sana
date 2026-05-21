import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Aplica una rotación 3D a partir de la posición del ratón sobre el elemento.
 * Crea un efecto "tilt" suave característico de tarjetas premium.
 *
 * @example <article appTilt [max]="8">…</article>
 */
@Directive({
  selector: '[appTilt]',
  standalone: true,
})
export class TiltDirective {
  /** Ángulo máximo en grados. */
  @Input() max = 6;
  /** Si `true`, eleva el elemento ligeramente al estar activo. */
  @Input() lift = true;

  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);

  constructor() {
    if (!isPlatformBrowser(this.platformId)) return;
    const el = this.host.nativeElement;
    el.style.transformStyle = 'preserve-3d';
    el.style.transition =
      'transform 300ms cubic-bezier(0.16,1,0.3,1), box-shadow 300ms ease';
    el.style.willChange = 'transform';
  }

  @HostListener('mousemove', ['$event'])
  onMove(e: MouseEvent): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const el = this.host.nativeElement;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const rx = (-y * this.max).toFixed(2);
    const ry = (x * this.max).toFixed(2);
    const lift = this.lift ? 'translateZ(0) translateY(-6px)' : '';
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) ${lift}`;
  }

  @HostListener('mouseleave')
  onLeave(): void {
    this.host.nativeElement.style.transform =
      'perspective(900px) rotateX(0) rotateY(0) translateY(0)';
  }
}
