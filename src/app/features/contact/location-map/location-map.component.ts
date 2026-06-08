import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

interface Coordinate {
  label: string;
  value: string;
  icon: 'pin' | 'clock' | 'route' | 'plane' | 'altitude';
}

/**
 * Real Google Maps embed centered on Valle Sagrado / Cusco.
 *
 * Uses the lightweight `maps.google.com/maps?...output=embed` endpoint which
 * does NOT require a Google Maps API key. The URL is sanitized via
 * DomSanitizer.bypassSecurityTrustResourceUrl since we control its source.
 */
@Component({
  selector: 'app-location-map',
  standalone: true,
  imports: [ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './location-map.component.html',
  styleUrl: './location-map.component.scss',
})
export class LocationMapComponent {
  private readonly sanitizer = inject(DomSanitizer);

  /** Exact location: Yachaytambo, Cusco. */
  private readonly placeName = 'Yachaytambo Cusco';
  private readonly lat = -13.5200517;
  private readonly lng = -71.934648;

  /** External link (opens the place in the full Google Maps app/site). */
  protected readonly externalUrl =
    `https://www.google.com/maps/search/?api=1&query=${this.lat},${this.lng}`;

  /** Embed URL (no API key required) — pins the exact place. */
  protected readonly mapUrl: SafeResourceUrl =
    this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.google.com/maps?q=${encodeURIComponent(this.placeName)}&ll=${this.lat},${this.lng}&z=16&hl=es&output=embed`,
    );

  protected readonly coords: Coordinate[] = [
    { label: 'Distancia desde Cusco',  value: '45 minutos en auto',          icon: 'route' },
    { label: 'Altitud del retiro',     value: '2,870 m sobre el nivel del mar', icon: 'altitude' },
    { label: 'Punto de recogida',      value: 'Plaza de Armas de Cusco · 13:30', icon: 'pin' },
    { label: 'Transporte',             value: 'Incluido — minivan privada',   icon: 'clock' },
    { label: 'Aeropuerto más cercano', value: 'Velasco Astete (CUZ) · 50 min', icon: 'plane' },
  ];
}
