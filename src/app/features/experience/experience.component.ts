import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { IntroScienceComponent } from './intro-science/intro-science.component';
import { ExperienceIntentComponent } from './experience-intent/experience-intent.component';
import { ProgramTimelineComponent } from './program-timeline/program-timeline.component';
import { IncludesGridComponent } from './includes-grid/includes-grid.component';
import { CtaBannerComponent } from './cta-banner/cta-banner.component';
import { IMG } from '../../shared/images';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    PageHeroComponent,
    IntroScienceComponent,
    ExperienceIntentComponent,
    ProgramTimelineComponent,
    IncludesGridComponent,
    CtaBannerComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-page-hero
      eyebrow="El Programa"
      title="Dos días para vivir una mente nueva."
      subtitle="Diseñado con base en psiconeuroinmunología, neurociencia y prácticas ancestrales andinas."
      backgroundVariant="light"
      [image]="heroImg"
    />
    <app-intro-science />
    <app-experience-intent />
    <app-program-timeline />
    <app-includes-grid />
    <app-cta-banner
      eyebrow="Tu siguiente paso"
      title="¿Listo para transformar tu mente?"
      subtitle="Sólo 10 cupos. La cohorte fundadora se forma una vez."
      primaryLabel="Reservar mi lugar"
      primaryLink="/contacto"
      secondaryLabel="Ver tarifas e inversión"
      secondaryLink="/tarifas"
    />
  `,
})
export class ExperienceComponent {
  protected readonly heroImg = IMG.yogaSunrise;
}
