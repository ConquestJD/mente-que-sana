import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { LocaleService } from '../../../core/i18n';

interface PaymentInfoCopy {
  eyebrow: string;
  title: string;
  titleEm: string;
  lead: string;
  methodsEyebrow: string;
  methodsDesc: string;
  methods: string[];
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
  protected readonly i18n = inject(LocaleService);

  protected readonly copy = computed(() => {
    this.i18n.locale();
    return this.i18n.tObject<PaymentInfoCopy>('pricing.paymentInfo')!;
  });
}
