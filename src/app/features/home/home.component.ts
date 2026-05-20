import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { WhyPreviewComponent } from './why-preview/why-preview.component';
import { PlacePreviewComponent } from './place-preview/place-preview.component';
import { PricingPreviewComponent } from './pricing-preview/pricing-preview.component';
import { TestimonialPreviewComponent } from './testimonial-preview/testimonial-preview.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroSectionComponent,
    WhyPreviewComponent,
    PlacePreviewComponent,
    PricingPreviewComponent,
    TestimonialPreviewComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-hero-section />
    <app-why-preview />
    <app-place-preview />
    <app-pricing-preview />
    <app-testimonial-preview />
  `,
})
export class HomeComponent {}
