import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { PricingCardComponent, PricingTier } from './pricing-card.component';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import {
  formatRetreatOption,
  getNextRetreat,
  getScheduledRetreats,
} from '../../../shared/retreat-dates';

@Component({
  selector: 'app-pricing-cards',
  standalone: true,
  imports: [PricingCardComponent, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="pricing" aria-labelledby="pricing-title">
      <div class="pricing__bg" aria-hidden="true"></div>

      <div class="container pricing__inner">
        <header class="pricing__head" appScrollReveal>
          <span class="title-md pricing__eyebrow">Tres tarifas · Diez cupos</span>
          <h2 id="pricing-title" class="pricing__title">
            Elige el círculo<br> que <em>te corresponde.</em>
          </h2>
          <p class="body-lg pricing__lead">
            Tres en Sembradores, tres en Lanzamiento y cuatro en Regular.
            La cohorte fundadora se ofrece una sola vez.
          </p>
        </header>

        <div class="pricing__date" appScrollReveal [delay]="120">
          <label class="pricing__date-label" for="pricing-fecha">Fecha del retiro</label>
          <select
            id="pricing-fecha"
            class="pricing__date-select"
            [value]="selectedFecha()"
            (change)="onFechaChange($event)"
          >
            @for (retreat of retreatDates; track retreat.id) {
              <option [value]="retreat.id">{{ formatRetreat(retreat) }}</option>
            }
          </select>
        </div>

        <div class="pricing__grid">
          @for (tier of tiers; track tier.key; let i = $index) {
            <div
              class="pricing__cell"
              appScrollReveal
              [delay]="180 + i * 120"
              [class.is-featured]="tier.featured"
              [class.is-rare]="tier.scarcity"
            >
              <app-pricing-card [tier]="tier" [fechaId]="selectedFecha()" />
            </div>
          }
        </div>

        <p class="pricing__note body-sm" appScrollReveal [delay]="500">
          Todas las tarifas incluyen alojamiento, comida, prácticas y traslado desde Cusco.
          La reserva se confirma con el 50% del pago.
        </p>
      </div>
    </section>
  `,
  styleUrl: './pricing-cards.component.scss',
})
export class PricingCardsComponent {
  protected readonly retreatDates = getScheduledRetreats();
  protected readonly selectedFecha = signal(getNextRetreat()?.id ?? this.retreatDates[0]?.id ?? '');

  protected formatRetreat = formatRetreatOption;

  protected onFechaChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.selectedFecha.set(value);
  }

  protected readonly tiers: PricingTier[] = [
    {
      key: 'sembradores',
      name: 'Sembradores',
      tagline: 'Cohorte fundadora.',
      description: 'Tarifa irrepetible para quienes confían primero y construyen el círculo desde la raíz.',
      price: 'S/ 890',
      oldPrice: 'S/ 1,390',
      unit: 'por persona',
      badge: 'IRREPETIBLE',
      scarcity: true,
      marker: 'I',
      spotsAvailable: 3,
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
      price: 'S/ 1,090',
      oldPrice: 'S/ 1,390',
      unit: 'por persona',
      badge: 'RECOMENDADA',
      featured: true,
      marker: 'II',
      spotsAvailable: 3,
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
      price: 'S/ 1,390',
      unit: 'por persona',
      marker: 'III',
      spotsAvailable: 4,
      features: [
        'Tarifa de cohorte abierta',
        'Plan de pagos disponible',
        'Kit de seguimiento 30 días',
        'Comida, alojamiento y traslados desde Cusco',
      ],
    },
  ];
}
