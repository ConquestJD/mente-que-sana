import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { PricingCardsComponent } from './pricing-cards/pricing-cards.component';
import { IncludesDetailComponent } from './includes-detail/includes-detail.component';
import { PaymentInfoComponent } from './payment-info/payment-info.component';
import { FaqAccordionComponent, FaqItem } from './faq-accordion/faq-accordion.component';
import { WhatsappCtaComponent } from './whatsapp-cta/whatsapp-cta.component';
import { TranslatePipe } from '../../core/i18n';
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
      [items]="faqs"
    />
    <app-whatsapp-cta />
  `,
})
export class PricingComponent {
  protected readonly heroImg = IMG.forestPath;

  protected readonly faqs: FaqItem[] = [
    {
      q: '¿Qué pasa si no puedo asistir después de reservar?',
      a: 'Si avisas con más de 21 días de anticipación, el 80% es transferible a la próxima cohorte. Si avisas con menos, se transfiere el 50%. No realizamos devoluciones en efectivo.',
    },
    {
      q: '¿El retiro es para principiantes en yoga o meditación?',
      a: 'Sí. Las prácticas están diseñadas para cualquier nivel. No necesitas experiencia previa, solo apertura para vivirlo en el cuerpo.',
    },
    {
      q: '¿Cómo manejan el tema de altitud para personas que vienen de costa?',
      a: 'Recomendamos llegar a Cusco 24-48 horas antes. Tenemos protocolo de hidratación, oxígeno disponible y cero actividades exigentes el primer día.',
    },
    {
      q: '¿Puedo venir con alguien y compartir habitación?',
      a: 'Sí. Las habitaciones son dobles. Si vienes en pareja o con alguien, indícanos al reservar para asignarlos juntos.',
    },
    {
      q: '¿Qué tipo de alimentación se sirve?',
      a: 'Cocina antiinflamatoria con base vegetariana. Adaptamos a celíaco, veganos y alergias específicas. Avísanos al reservar.',
    },
  ];
}
