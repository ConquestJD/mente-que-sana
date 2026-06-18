import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { PricingCardsComponent } from './pricing-cards/pricing-cards.component';
import { IncludesDetailComponent } from './includes-detail/includes-detail.component';
import { PaymentInfoComponent } from './payment-info/payment-info.component';
import { FaqAccordionComponent, FaqItem } from './faq-accordion/faq-accordion.component';
import { WhatsappCtaComponent } from './whatsapp-cta/whatsapp-cta.component';
import { LocaleService, TranslatePipe } from '../../core/i18n';
import { IMG } from '../../shared/images';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [
    PageHeroComponent,
    PricingCardsComponent,
    IncludesDetailComponent,
    PaymentInfoComponent,
    FaqAccordionComponent,
    WhatsappCtaComponent,
    TranslatePipe,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-page-hero
      [eyebrow]="'pages.pricing.eyebrow' | translate"
      [title]="'pages.pricing.title' | translate"
      [subtitle]="'pages.pricing.subtitle' | translate"
      backgroundVariant="mist"
      [image]="heroImg"
    />
    <app-pricing-cards />
    <app-includes-detail />
    <app-payment-info />
    <app-faq-accordion
      [eyebrow]="'pages.pricing.faqEyebrow' | translate"
      [title]="'pages.pricing.faqTitle' | translate"
      [items]="faqs()"
    />
    <app-whatsapp-cta />
  `,
})
export class PricingComponent {
  protected readonly i18n = inject(LocaleService);
  protected readonly heroImg = IMG.forestPath;

  protected readonly faqs = computed(() => {
    this.i18n.locale();
    return this.i18n.tObject<FaqItem[]>('pricing.faqs') ?? [];
  });
}
