import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { ManifestoComponent } from './manifesto/manifesto.component';
import { TestimonialsGridComponent } from './testimonials-grid/testimonials-grid.component';
import { FounderMessageComponent } from './founder-message/founder-message.component';
import { CtaBannerComponent } from '../experience/cta-banner/cta-banner.component';
import { TranslatePipe } from '../../core/i18n';
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
    TranslatePipe,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-page-hero
      [eyebrow]="'pages.community.eyebrow' | translate"
      [title]="'pages.community.title' | translate"
      [subtitle]="'pages.community.subtitle' | translate"
      backgroundVariant="dark"
      [image]="heroImg"
    />
    <app-manifesto />
    <app-testimonials-grid />
    <app-founder-message />
    <app-cta-banner
      [eyebrow]="'pages.community.ctaEyebrow' | translate"
      [title]="'pages.community.ctaTitle' | translate"
      [subtitle]="'pages.community.ctaSubtitle' | translate"
      [primaryLabel]="'common.reserve' | translate"
      primaryLink="/contacto"
      [secondaryLabel]="'common.viewCalendar' | translate"
      secondaryLink="/calendario"
    />
  `,
})
export class CommunityComponent {
  protected readonly heroImg = IMG.urubambaEntrada;
}
