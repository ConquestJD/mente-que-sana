import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { SectionHeaderComponent } from '../../../shared/components/section-header/section-header.component';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { TiltDirective } from '../../../shared/directives/tilt.directive';
import { MagneticDirective } from '../../../shared/directives/magnetic.directive';
import { LocaleService, TranslatePipe } from '../../../core/i18n';

interface PricingTier {
  key: string;
  name: string;
  description: string;
  price: string;
  spots: string;
  marker?: string;
  savings?: string;
  featured?: boolean;
  badge?: string;
  scarcity?: boolean;
}

interface StripItem {
  num: string;
  label: string;
}

@Component({
  selector: 'app-pricing-preview',
  standalone: true,
  imports: [
    NgClass,
    ButtonComponent,
    SectionHeaderComponent,
    ScrollRevealDirective,
    TiltDirective,
    MagneticDirective,
    TranslatePipe,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './pricing-preview.component.html',
  styleUrl: './pricing-preview.component.scss',
})
export class PricingPreviewComponent {
  protected readonly i18n = inject(LocaleService);

  protected readonly header = computed(() => {
    this.i18n.locale();
    return this.i18n.tObject<{ eyebrow: string; title: string; lead: string }>(
      'home.pricingPreview.header',
    );
  });

  protected readonly strip = computed((): StripItem[] => {
    this.i18n.locale();
    return this.i18n.tObject<StripItem[]>('home.pricingPreview.strip') ?? [];
  });

  protected readonly tiers = computed((): PricingTier[] => {
    this.i18n.locale();
    return this.i18n.tObject<PricingTier[]>('home.pricingPreview.tiers') ?? [];
  });
}
