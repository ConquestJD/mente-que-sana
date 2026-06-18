import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HeroSectionComponent } from './hero-section/hero-section.component';
import { StickyNarrativeComponent } from './sticky-narrative/sticky-narrative.component';
import { QuoteFeatureComponent } from './quote-feature/quote-feature.component';
import { PlacePreviewComponent } from './place-preview/place-preview.component';
import { SedesPreviewComponent } from './sedes-preview/sedes-preview.component';
import { DatesPreviewComponent } from './dates-preview/dates-preview.component';
import { StatsMarqueeComponent } from './stats-marquee/stats-marquee.component';
import { TimelinePreviewComponent } from './timeline-preview/timeline-preview.component';
import { TestimonialPreviewComponent } from './testimonial-preview/testimonial-preview.component';
import { PricingPreviewComponent } from './pricing-preview/pricing-preview.component';
import { ClosingCtaComponent } from './closing-cta/closing-cta.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroSectionComponent,
    StickyNarrativeComponent,
    QuoteFeatureComponent,
    PlacePreviewComponent,
    SedesPreviewComponent,
    DatesPreviewComponent,
    StatsMarqueeComponent,
    TimelinePreviewComponent,
    TestimonialPreviewComponent,
    PricingPreviewComponent,
    ClosingCtaComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-hero-section />
    <app-sticky-narrative />
    <app-place-preview />
    <app-sedes-preview />
    <app-dates-preview />
    <app-quote-feature />
    <app-stats-marquee />
    <app-timeline-preview />
    <app-testimonial-preview />
    <app-pricing-preview />
    <app-closing-cta />
  `,
})
export class HomeComponent {}
