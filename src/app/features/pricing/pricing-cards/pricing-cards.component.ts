import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PricingCardComponent, PricingTier } from './pricing-card.component';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-pricing-cards',
  standalone: true,
  imports: [PricingCardComponent, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="pricing section section--cream" aria-labelledby="pricing-title">
      <div class="container">
        <header class="pricing__head" appScrollReveal>
          <span class="title-md pricing__eyebrow">Tres tarifas</span>
          <h2 id="pricing-title" class="pricing__title">
            Elige el círculo que <em>te corresponde.</em>
          </h2>
          <p class="body-lg pricing__lead">
            La cohorte fundadora se ofrece una sola vez. Las tarifas reflejan
            el momento en que decides confiar y reservar.
          </p>
        </header>

        <div class="pricing__grid">
          @for (tier of tiers; track tier.key; let i = $index) {
            <div
              appScrollReveal
              [delay]="i * 120"
              class="pricing__cell"
              [class.is-featured]="tier.featured"
            >
              <app-pricing-card [tier]="tier" />
            </div>
          }
        </div>

        <p class="pricing__note body-sm" appScrollReveal [delay]="500">
          Todas las tarifas incluyen alojamiento, comida, prácticas y traslado desde Cusco.
          Plan de pagos disponible en las tres opciones.
        </p>
      </div>
    </section>
  `,
  styleUrl: './pricing-cards.component.scss',
})
export class PricingCardsComponent {
  protected readonly tiers: PricingTier[] = [
    {
      key: 'sembradores',
      name: 'Sembradores',
      tagline: 'Cohorte fundadora.',
      description: 'Tarifa irrepetible para quienes confían primero y construyen el círculo desde la raíz.',
      price: 'S/ 1,290',
      oldPrice: 'S/ 1,990',
      unit: 'por persona',
      badge: 'IRREPETIBLE',
      scarcity: true,
      marker: 'I',
      features: [
        'Tarifa exclusiva de la cohorte fundadora',
        'Acceso de por vida a futuros círculos como Sembrador',
        'Llamada 1-a-1 con el facilitador antes del retiro',
        'Kit completo de seguimiento 30 días',
        'Comida, alojamiento y traslados desde Cusco',
      ],
    },
    {
      key: 'lanzamiento',
      name: 'Lanzamiento',
      tagline: 'Inscripción anticipada.',
      description: 'Para quienes deciden temprano y se aseguran un cupo con descuento por lanzamiento.',
      price: 'S/ 1,690',
      oldPrice: 'S/ 1,990',
      unit: 'por persona',
      badge: 'RECOMENDADA',
      featured: true,
      marker: 'II',
      features: [
        'Descuento por inscripción temprana',
        'Plan de pagos en 2 cuotas sin recargo',
        'Llamada de bienvenida personalizada',
        'Kit completo de seguimiento 30 días',
        'Comida, alojamiento y traslados desde Cusco',
      ],
    },
    {
      key: 'regular',
      name: 'Regular',
      tagline: 'Tarifa estándar.',
      description: 'Para quienes llegan a su tiempo. Misma experiencia, sin descuentos por anticipación.',
      price: 'S/ 1,990',
      unit: 'por persona',
      marker: 'III',
      features: [
        'Tarifa de cohorte abierta',
        'Plan de pagos disponible',
        'Kit de seguimiento 30 días',
        'Comida, alojamiento y traslados desde Cusco',
      ],
    },
  ];
}
