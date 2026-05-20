import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

interface PaymentStep {
  step: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-payment-info',
  standalone: true,
  imports: [ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="payment section section--dark" aria-labelledby="payment-title">
      <div class="container">
        <header class="payment__head" appScrollReveal>
          <span class="title-md">Plan de pagos</span>
          <h2 id="payment-title" class="display-md">Tres pasos claros, sin sorpresas.</h2>
        </header>

        <ol class="payment__steps">
          @for (step of steps; track step.step; let i = $index) {
            <li class="payment__step" appScrollReveal [delay]="i * 120">
              <span class="payment__index ui-data">{{ step.step }}</span>
              <h3 class="payment__step-title">{{ step.title }}</h3>
              <p class="payment__step-desc body-md">{{ step.description }}</p>
            </li>
          }
        </ol>

        <div class="payment__methods" appScrollReveal [delay]="400">
          <span class="title-sm">Métodos aceptados</span>
          <div class="payment__methods-list">
            <span>Yape</span>
            <span>Plin</span>
            <span>Transferencia bancaria</span>
            <span>Tarjeta crédito / débito</span>
            <span>USD efectivo</span>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './payment-info.component.scss',
})
export class PaymentInfoComponent {
  protected readonly steps: PaymentStep[] = [
    {
      step: 'Paso 01',
      title: 'Reserva con 50%',
      description: 'Aseguras tu cupo con un pago inicial del 50% del total de la tarifa elegida.',
    },
    {
      step: 'Paso 02',
      title: 'Saldo 15 días antes',
      description: 'Completas el pago 15 días antes del retiro. Te enviamos recordatorio y comprobante.',
    },
    {
      step: 'Paso 03',
      title: 'Plan de pagos extendido',
      description: 'Si necesitas dividir en más cuotas, conversamos por WhatsApp y diseñamos un plan a medida.',
    },
  ];
}
