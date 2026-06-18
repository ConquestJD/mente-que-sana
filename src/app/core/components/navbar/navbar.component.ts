import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  PLATFORM_ID,
  computed,
  inject,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';
import { filter } from 'rxjs/operators';

import { LocaleService, TranslatePipe } from '../../i18n';

interface NavLink {
  label: string;
  path: string;
}

/**
 * Sticky navigation. Transparent on top, switches to a frosted dark
 * surface once the user scrolls past the threshold. Mobile menu uses a
 * slide-down animation.
 */
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TranslatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('mobileMenu', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-16px)' }),
        animate('260ms cubic-bezier(0.16,1,0.3,1)',
          style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('180ms cubic-bezier(0.7,0,0.84,0)',
          style({ opacity: 0, transform: 'translateY(-16px)' })),
      ]),
    ]),
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  protected readonly scrolled = signal(false);
  protected readonly mobileOpen = signal(false);
  protected readonly inverse = signal(false);

  /** Rutas con hero de imagen y overlay oscuro al inicio. */
  private readonly darkHeroRoutes = new Set([
    '/',
    '/comunidad',
    '/calendario',
    '/experiencia',
    '/sedes',
    '/tarifas',
    '/contacto',
  ]);

  protected readonly links = computed(() => {
    this.i18n.locale();
    return [
      { label: this.i18n.t('nav.experience'), path: '/experiencia' },
      { label: this.i18n.t('nav.sedes'), path: '/sedes' },
      { label: this.i18n.t('nav.calendar'), path: '/calendario' },
      { label: this.i18n.t('nav.community'), path: '/comunidad' },
      { label: this.i18n.t('nav.pricing'), path: '/tarifas' },
    ];
  });

  protected readonly i18n = inject(LocaleService);
  private readonly router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);

  constructor() {
    this.syncInverseState();

    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        this.mobileOpen.set(false);
        this.syncInverseState();
        this.onScroll();
      });
  }

  private syncInverseState(): void {
    const path = this.router.url.split('?')[0].split('#')[0];
    this.inverse.set(
      this.darkHeroRoutes.has(path) ||
      path === '/sedes' ||
      path.startsWith('/sedes/'),
    );
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.scrolled.set(window.scrollY > 24);
  }

  protected toggleMobile(): void {
    this.mobileOpen.update((v) => !v);
  }

  protected toggleLocale(): void {
    this.i18n.toggle();
  }

  protected langSwitchLabel(): string {
    return this.i18n.locale() === 'es'
      ? this.i18n.t('lang.switchToEn')
      : this.i18n.t('lang.switchToEs');
  }
}
