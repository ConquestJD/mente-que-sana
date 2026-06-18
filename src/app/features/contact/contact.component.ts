import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { WhatsappCardComponent } from './whatsapp-card/whatsapp-card.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { TranslatePipe } from '../../core/i18n';
import { IMG } from '../../shared/images';

const FORM_ANCHOR = 'formulario';
const NAVBAR_OFFSET = 96;

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    PageHeroComponent,
    WhatsappCardComponent,
    ContactFormComponent,
    TranslatePipe,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-page-hero
      [eyebrow]="'pages.contact.eyebrow' | translate"
      [title]="'pages.contact.title' | translate"
      [subtitle]="'pages.contact.subtitle' | translate"
      backgroundVariant="cream"
      [image]="heroImg"
    />
    <app-whatsapp-card />
    <app-contact-form />
  `,
})
export class ContactComponent {
  protected readonly heroImg = IMG.cupTea;

  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);
  private scrollTimer?: number;

  constructor() {
    if (!isPlatformBrowser(this.platformId)) return;

    afterNextRender(() => {
      this.router.events
        .pipe(
          filter((event): event is NavigationEnd => event instanceof NavigationEnd),
          takeUntilDestroyed(this.destroyRef),
        )
        .subscribe(() => this.scheduleScrollToForm());

      this.scheduleScrollToForm();
    });
  }

  private shouldScrollToForm(): boolean {
    const params = this.route.snapshot.queryParamMap;
    return !!(params.get('tarifa') || params.get('sede'));
  }

  private scheduleScrollToForm(): void {
    if (!this.shouldScrollToForm()) return;

    if (this.scrollTimer) window.clearTimeout(this.scrollTimer);

    // Route enter animation (~450ms) + layout settle; then keep correcting briefly.
    const delays = [500, 700, 950, 1200];
    for (const delay of delays) {
      this.scrollTimer = window.setTimeout(() => this.scrollToForm(), delay);
    }
  }

  private scrollToForm(): void {
    const anchor =
      document.getElementById(FORM_ANCHOR) ??
      document.getElementById('cform-title');
    if (!anchor) return;

    const top =
      anchor.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
    window.scrollTo({ top: Math.max(0, top), behavior: 'auto' });
  }
}
