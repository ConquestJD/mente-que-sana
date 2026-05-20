import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { ManifestoComponent } from './manifesto/manifesto.component';
import { TestimonialsGridComponent } from './testimonials-grid/testimonials-grid.component';
import { SpotsCounterComponent } from './spots-counter/spots-counter.component';
import { FounderMessageComponent } from './founder-message/founder-message.component';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [
    PageHeroComponent,
    ManifestoComponent,
    TestimonialsGridComponent,
    SpotsCounterComponent,
    FounderMessageComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-page-hero
      eyebrow="Sembradores"
      title="La cohorte fundadora."
      subtitle="Diez personas eligen, juntas, sembrar lo que les sostenga el resto del año."
      backgroundVariant="dark"
    />
    <app-manifesto />
    <app-testimonials-grid />
    <app-spots-counter />
    <app-founder-message />
  `,
})
export class CommunityComponent {}
