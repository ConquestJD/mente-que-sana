import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

interface Hour { day: string; hours: string; }

@Component({
  selector: 'app-whatsapp-card',
  standalone: true,
  imports: [ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="wac section section--cream" aria-labelledby="wac-title">
      <div class="container">
        <div class="wac__grid">
          <div class="wac__panel" appScrollReveal direction="left">
            <span class="title-md">Atención humana</span>
            <h2 id="wac-title" class="wac__title">
              El número que <em>siempre responde.</em>
            </h2>
            <a class="wac__number" [href]="waLink" target="_blank" rel="noopener noreferrer">
              {{ display }}
            </a>
            <p class="body-md wac__sub">
              Respondemos en menos de dos horas en horario activo.
              Si nos escribes fuera del horario, te contestamos a primera hora del día siguiente.
            </p>

            <ul class="wac__hours">
              @for (h of hours; track h.day) {
                <li>
                  <span class="title-sm">{{ h.day }}</span>
                  <span class="ui-data">{{ h.hours }}</span>
                </li>
              }
            </ul>
          </div>

          <aside class="wac__suggested" appScrollReveal direction="right" [delay]="120">
            <span class="title-sm">Mensaje sugerido</span>
            <blockquote class="wac__quote">
              “Hola, soy {{ '{tu nombre}' }}. Estoy interesado en el retiro
              Mente que Sana, quería saber si quedan cupos y conocer las próximas fechas.”
            </blockquote>
            <a class="wac__quick" [href]="quickLink" target="_blank" rel="noopener noreferrer">
              Enviar este mensaje →
            </a>
          </aside>
        </div>
      </div>
    </section>
  `,
  styleUrl: './whatsapp-card.component.scss',
})
export class WhatsappCardComponent {
  protected readonly phone = '51989123456';
  protected readonly display = '+51 989 123 456';
  protected readonly message =
    'Hola, estoy interesado en el retiro Mente que Sana. ¿Quedan cupos en alguna tarifa?';

  protected readonly hours: Hour[] = [
    { day: 'Lunes a viernes', hours: '08:00 – 21:00' },
    { day: 'Sábados',         hours: '09:00 – 18:00' },
    { day: 'Domingos',        hours: '10:00 – 14:00' },
  ];

  protected get waLink(): string {
    return `https://wa.me/${this.phone}`;
  }
  protected get quickLink(): string {
    return `https://wa.me/${this.phone}?text=${encodeURIComponent(this.message)}`;
  }
}
