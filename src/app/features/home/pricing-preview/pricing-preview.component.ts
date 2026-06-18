import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { SectionHeaderComponent } from '../../../shared/components/section-header/section-header.component';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { TiltDirective } from '../../../shared/directives/tilt.directive';
import { MagneticDirective } from '../../../shared/directives/magnetic.directive';

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
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './pricing-preview.component.html',
  styleUrl: './pricing-preview.component.scss',
})
export class PricingPreviewComponent {
  protected readonly tiers: PricingTier[] = [
    {
      key: 'sembradores',
      name: 'Sembradores',
      description: 'Cohorte fundadora — irrepetible.',
      price: 'S/ 890',
      spots: '2 / 3 cupos',
      marker: 'I',
      savings: '−36% vs regular',
      badge: 'IRREPETIBLE',
      scarcity: true,
    },
    {
      key: 'lanzamiento',
      name: 'Lanzamiento',
      description: 'Inscripción anticipada con beneficios.',
      price: 'S/ 1,090',
      spots: '3 / 4 cupos',
      marker: 'II',
      savings: '−22% vs regular',
      featured: true,
      badge: 'RECOMENDADA',
    },
    {
      key: 'regular',
      name: 'Regular',
      description: 'Tarifa de cohorte abierta.',
      price: 'S/ 1,390',
      spots: '2 / 3 cupos',
      marker: 'III',
    },
  ];
}
