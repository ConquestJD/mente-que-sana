import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { IntroScienceComponent } from './intro-science/intro-science.component';
import { ExperienceIntentComponent } from './experience-intent/experience-intent.component';
import { ProgramTimelineComponent } from './program-timeline/program-timeline.component';
import { IncludesGridComponent } from './includes-grid/includes-grid.component';
import { CtaBannerComponent } from './cta-banner/cta-banner.component';
import { TranslatePipe } from '../../core/i18n';
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
    TranslatePipe,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-page-hero
      [eyebrow]="'pages.experience.eyebrow' | translate"
      [title]="'pages.experience.title' | translate"
      [subtitle]="'pages.experience.subtitle' | translate"
      backgroundVariant="light"
      [image]="heroImg"
    />
    <app-intro-science />
    <app-experience-intent />
    <app-program-timeline />
    <app-includes-grid />
    <app-cta-banner
      [eyebrow]="'pages.experience.ctaEyebrow' | translate"
      [title]="'pages.experience.ctaTitle' | translate"
      [subtitle]="'pages.experience.ctaSubtitle' | translate"
      [primaryLabel]="'common.reserve' | translate"
      primaryLink="/contacto"
      [secondaryLabel]="'common.viewPricingFull' | translate"
      secondaryLink="/tarifas"
    />
  `,
})
export class ExperienceComponent {
  protected readonly heroImg = IMG.yogaSunrise;
}
