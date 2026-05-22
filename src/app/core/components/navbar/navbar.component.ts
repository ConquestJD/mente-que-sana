import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  PLATFORM_ID,
  inject,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';
import { filter } from 'rxjs/operators';

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
  imports: [RouterLink, RouterLinkActive],
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

  protected readonly links: NavLink[] = [
    { label: 'Experiencia', path: '/experiencia' },
    { label: 'Lugar',       path: '/lugar' },
    { label: 'Comunidad',   path: '/comunidad' },
    { label: 'Tarifas',     path: '/tarifas' },
  ];

  private readonly router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);

  constructor() {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => this.mobileOpen.set(false));
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.scrolled.set(window.scrollY > 24);
  }

  protected toggleMobile(): void {
    this.mobileOpen.update((v) => !v);
  }
}
