import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-whatsapp-cta',
  standalone: true,
  imports: [ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="wa section section--cream" aria-labelledby="wa-title">
      <div class="container container-narrow">
        <div class="wa__panel" appScrollReveal>
          <div class="wa__copy">
            <span class="title-md">Más rápido por WhatsApp</span>
            <h2 id="wa-title" class="wa__title">¿Tienes una pregunta?
              <em>Escríbenos.</em>
            </h2>
            <p class="body-md wa__sub">Te respondemos en menos de 2 horas, todos los días entre 8am y 9pm (Lima/Cusco).</p>
          </div>

          <a
            class="wa__btn"
            [href]="waLink"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Conversar por WhatsApp"
          >
            <span class="wa__btn-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M20.5 3.5A12 12 0 0 0 3 21l-2 4 4-1A12 12 0 1 0 20.5 3.5Zm-8.4 18.4a10 10 0 0 1-5-1.4l-.4-.2-2.4.6.6-2.3-.2-.4a10 10 0 1 1 7.4 3.7Zm5.4-7.4c-.3-.2-1.7-.9-2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1a8.2 8.2 0 0 1-4-3.5c-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.6s-.7-1.6-.9-2.2-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.1 1-1.1 2.5 1.1 2.9 1.3 3.1a9.6 9.6 0 0 0 4.4 4 5.3 5.3 0 0 0 3.2.6 4 4 0 0 0 2.6-1.8c.3-.6.3-1.2.2-1.3s-.3-.2-.6-.4Z"/>
              </svg>
            </span>
            <span class="wa__btn-content">
              <span class="wa__btn-label">Conversar por WhatsApp</span>
              <span class="wa__btn-number">{{ phoneDisplay }}</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  `,
  styleUrl: './whatsapp-cta.component.scss',
})
export class WhatsappCtaComponent {
  /** Phone number for the WhatsApp link (international format, no +). */
  @Input() phone = '51989123456';
  /** Display version of the phone. */
  @Input() phoneDisplay = '+51 989 123 456';
  /** Pre-filled WhatsApp message. */
  @Input() message =
    'Hola, me interesa el retiro Mente que Sana. ¿Podrías contarme más sobre las próximas fechas?';

  protected get waLink(): string {
    return `https://wa.me/${this.phone}?text=${encodeURIComponent(this.message)}`;
  }
}
