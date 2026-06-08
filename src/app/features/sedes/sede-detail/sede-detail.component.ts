import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PageHeroComponent } from '../../../shared/components/page-hero/page-hero.component';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { CtaBannerComponent } from '../../experience/cta-banner/cta-banner.component';
import { getSede, Sede } from '../../../shared/sedes';

/**
 * Página de detalle de una sede (data-driven desde el slug de la ruta).
 * Reutilizable para todas las sedes no-insignia.
 */
@Component({
  selector: 'app-sede-detail',
  standalone: true,
  imports: [RouterLink, PageHeroComponent, ScrollRevealDirective, CtaBannerComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './sede-detail.component.html',
  styleUrl: './sede-detail.component.scss',
})
export class SedeDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly sanitizer = inject(DomSanitizer);

  protected readonly sede = signal<Sede | undefined>(undefined);
  protected readonly mapUrl = signal<SafeResourceUrl | undefined>(undefined);
  protected readonly externalMapUrl = signal<string>('');

  constructor() {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      const found = getSede(slug);
      if (!found) {
        this.router.navigate(['/sedes']);
        return;
      }
      this.sede.set(found);
      this.externalMapUrl.set(
        `https://www.google.com/maps/search/?api=1&query=${found.coords.lat},${found.coords.lng}`,
      );
      this.mapUrl.set(
        this.sanitizer.bypassSecurityTrustResourceUrl(
          `https://www.google.com/maps?q=${encodeURIComponent(found.mapQuery)}&ll=${found.coords.lat},${found.coords.lng}&z=14&hl=es&output=embed`,
        ),
      );
    });
  }
}
