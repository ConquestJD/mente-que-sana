import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { LocationStatsComponent } from './location-stats/location-stats.component';
import { SpacesGalleryComponent } from './spaces-gallery/spaces-gallery.component';
import { AtmosphereComponent } from './atmosphere/atmosphere.component';
import { HowToGetThereComponent } from './how-to-get-there/how-to-get-there.component';
import { CtaBannerComponent } from '../experience/cta-banner/cta-banner.component';

@Component({
  selector: 'app-place',
  standalone: true,
  imports: [
    PageHeroComponent,
    LocationStatsComponent,
    SpacesGalleryComponent,
    AtmosphereComponent,
    HowToGetThereComponent,
    CtaBannerComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-page-hero
      eyebrow="El Lugar"
      title="Terreno familiar sobre el Valle Sagrado."
      subtitle="Una mirada panorámica a Cusco, paredes de piedra antigua y un campo verde donde el tiempo se mueve más despacio."
      backgroundVariant="medium"
    />
    <app-location-stats />
    <app-spaces-gallery />
    <app-atmosphere />
    <app-how-to-get-there />
    <app-cta-banner
      eyebrow="Reserva tu espacio"
      title="Diez personas. Una vez. Aquí."
      primaryLabel="Ver tarifas"
      primaryLink="/tarifas"
    />
  `,
})
export class PlaceComponent {}
