import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { ManifestoComponent } from './manifesto/manifesto.component';
import { TestimonialsGridComponent } from './testimonials-grid/testimonials-grid.component';
import { FounderMessageComponent } from './founder-message/founder-message.component';
import { CtaBannerComponent } from '../experience/cta-banner/cta-banner.component';
import { IMG } from '../../shared/images';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [
    PageHeroComponent,
    ManifestoComponent,
    TestimonialsGridComponent,
    FounderMessageComponent,
    CtaBannerComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-page-hero
      eyebrow="Sembradores"
      title="La cohorte fundadora."
      subtitle="Diez personas eligen, juntas, sembrar lo que les sostenga el resto del año."
      backgroundVariant="dark"
      [image]="heroImg"
    />
    <app-manifesto />
    <app-testimonials-grid />
    <app-founder-message />
    <app-cta-banner
      eyebrow="Tu lugar en el círculo"
      title="La cohorte fundadora se forma una sola vez."
      subtitle="Diez cupos. Tres tarifas. Un retiro que cambia cómo habitas tu mente."
      primaryLabel="Reservar mi lugar"
      primaryLink="/contacto"
      secondaryLabel="Ver calendario"
      secondaryLink="/calendario"
    />
  `,
})
export class CommunityComponent {
  protected readonly heroImg = IMG.urubambaEntrada;
}
