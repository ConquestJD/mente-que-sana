import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { CtaBannerComponent } from '../experience/cta-banner/cta-banner.component';
import {
  buildCalendarMonths,
  formatRetreatOption,
  getNextRetreat,
  groupCalendarMonthsByYear,
  RetreatDate,
  RetreatSedeSlug,
} from '../../shared/retreat-dates';
import { IMG } from '../../shared/images';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    RouterLink,
    NgClass,
    PageHeroComponent,
    ScrollRevealDirective,
    CtaBannerComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent {
  private readonly route = inject(ActivatedRoute);

  protected readonly heroImg = IMG.urubambaMirador;
  protected readonly weekdayLabels = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];
  protected readonly nextRetreat = getNextRetreat();
  protected readonly years = groupCalendarMonthsByYear(buildCalendarMonths());
  protected readonly filter = signal<'all' | RetreatSedeSlug>('all');

  constructor() {
    this.route.queryParamMap.pipe(takeUntilDestroyed()).subscribe((params) => {
      const sede = params.get('sede');
      if (sede === 'urubamba' || sede === 'tacna') {
        this.filter.set(sede);
      }
    });
  }

  protected setFilter(value: 'all' | RetreatSedeSlug): void {
    this.filter.set(value);
  }

  protected showRetreat(retreat: RetreatDate | null): boolean {
    if (!retreat) return true;
    const f = this.filter();
    if (f === 'all') return true;
    return retreat.sedeSlug === f;
  }

  protected cellClass(retreat: RetreatDate | null): Record<string, boolean> {
    if (!retreat) return {};
    if (retreat.status === 'tbd') return { 'is-tbd': true };
    return retreat.sedeSlug === 'urubamba' ? { 'is-urubamba': true } : { 'is-tacna': true };
  }

  protected retreatLabel(retreat: RetreatDate): string {
    return formatRetreatOption(retreat);
  }

  protected contactParams(retreat: RetreatDate): Record<string, string> {
    const params: Record<string, string> = { fecha: retreat.id };
    if (retreat.sedeSlug) params['sede'] = retreat.sedeSlug;
    return params;
  }
}
