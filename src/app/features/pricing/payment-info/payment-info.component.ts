import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-payment-info',
  standalone: true,
  imports: [ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './payment-info.component.html',
  styleUrl: './payment-info.component.scss',
})
export class PaymentInfoComponent {
  protected readonly methods = [
    'Yape',
    'Plin',
    'Transferencia bancaria',
    'USD efectivo',
  ];
}
