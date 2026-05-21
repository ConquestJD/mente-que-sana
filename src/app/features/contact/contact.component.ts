import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { WhatsappCardComponent } from './whatsapp-card/whatsapp-card.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FaqFullComponent } from './faq-full/faq-full.component';
import { LocationMapComponent } from './location-map/location-map.component';
import { IMG } from '../../shared/images';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    PageHeroComponent,
    WhatsappCardComponent,
    ContactFormComponent,
    FaqFullComponent,
    LocationMapComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-page-hero
      eyebrow="Contacto"
      title="Hablemos."
      subtitle="Te respondemos siempre. Y siempre lo hace una persona — no un bot."
      backgroundVariant="cream"
      [image]="heroImg"
    />
    <app-whatsapp-card />
    <app-contact-form />
    <app-faq-full />
    <app-location-map />
  `,
})
export class ContactComponent {
  protected readonly heroImg = IMG.cupTea;
}
