import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

interface PaymentStep {
  step: string;
  title: string;
  description: string;
  detail: string;
}

@Component({
  selector: 'app-payment-info',
  standalone: true,
  imports: [ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './payment-info.component.html',
  styleUrl: './payment-info.component.scss',
})
export class PaymentInfoComponent {
  protected readonly steps: PaymentStep[] = [
    {
      step: '01',
      title: 'Reserva con 50%',
      description: 'Aseguras tu cupo con un pago inicial del 50% del total de la tarifa elegida.',
      detail: 'Bloqueamos tu lugar en la cohorte y te enviamos el contrato.',
    },
    {
      step: '02',
      title: 'Saldo 15 días antes',
      description: 'Completas el pago 15 días antes del retiro. Te enviamos recordatorio y comprobante.',
      detail: 'Confirmación final con todos los detalles logísticos.',
    },
    {
      step: '03',
      title: 'Plan de pagos extendido',
      description: 'Si necesitas dividir en más cuotas, conversamos por WhatsApp y diseñamos un plan a medida.',
      detail: 'Sin recargos. Solo flexibilidad para que llegues.',
    },
  ];

  protected readonly methods = [
    'Yape',
    'Plin',
    'Transferencia bancaria',
    'Tarjeta crédito / débito',
    'USD efectivo',
  ];
}
