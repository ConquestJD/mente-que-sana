import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { CtaBannerComponent } from '../experience/cta-banner/cta-banner.component';
import { TranslatePipe, LocaleService } from '../../core/i18n';
import {
  buildCalendarMonths,
  CalendarDayCell,
  formatRetreatOption,
  formatRetreatLabel as formatRetreatDateLabel,
  getMonthNames,
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
    TranslatePipe,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent {
  private readonly route = inject(ActivatedRoute);
  protected readonly i18n = inject(LocaleService);

  protected readonly heroImg = IMG.urubambaMirador;
  protected readonly weekdayLabels = computed(() => {
    this.i18n.locale();
    return this.i18n.tArray('calendar.weekdays');
  });
  protected readonly nextRetreat = getNextRetreat();
  protected readonly years = computed(() => {
    this.i18n.locale();
    return groupCalendarMonthsByYear(buildCalendarMonths(this.i18n.locale()));
  });
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
    return retreat.sedeSlug === 'urubamba'
      ? { 'is-urubamba': true }
      : { 'is-tacna': true };
  }

  protected halfStartClass(cell: CalendarDayCell): Record<string, boolean> {
    const retreat = cell.retreat;
    if (!retreat || !cell.iso || cell.iso !== retreat.startDate) return {};
    return retreat.startHalfDay ? { 'is-half-start': true } : {};
  }

  protected retreatLabel(retreat: RetreatDate): string {
    return formatRetreatOption(retreat, this.i18n.locale());
  }

  protected retreatDateLabel(retreat: RetreatDate): string {
    return formatRetreatDateLabel(retreat, this.i18n.locale());
  }

  protected spotlightSedeClass(retreat: RetreatDate): Record<string, boolean> {
    return {
      'is-urubamba': retreat.sedeSlug === 'urubamba',
      'is-tacna': retreat.sedeSlug === 'tacna',
    };
  }

  protected spotlightDayRange(retreat: RetreatDate): string {
    this.i18n.locale();
    const sd = Number(retreat.startDate.split('-')[2]);
    const ed = Number(retreat.endDate.split('-')[2]);
    if (retreat.startHalfDay && retreat.startDate !== retreat.endDate) {
      return this.i18n.locale() === 'en' ? `${sd} (am) – ${ed}` : `${sd} (am) – ${ed}`;
    }
    return retreat.startDate === retreat.endDate ? String(sd) : `${sd}–${ed}`;
  }

  protected spotlightMonthYear(retreat: RetreatDate): string {
    this.i18n.locale();
    const [, m, ] = retreat.startDate.split('-').map(Number);
    const y = Number(retreat.startDate.split('-')[0]);
    return `${getMonthNames(this.i18n.locale())[m - 1]} ${y}`;
  }

  protected spotlightHalfDayNote(retreat: RetreatDate): string | null {
    if (!retreat.startHalfDay) return null;
    const start = retreat.startDate.split('-')[2];
    const end = retreat.endDate.split('-')[2];
    return this.i18n.tInterpolate('calendar.spotlightHalfDay', { start, end });
  }

  protected cellClasses(cell: CalendarDayCell): Record<string, boolean> {
    if (!cell.retreat) return {};
    return {
      ...this.cellClass(cell.retreat),
      ...this.rangeClass(cell),
      ...this.halfStartClass(cell),
    };
  }

  protected contactParams(retreat: RetreatDate): Record<string, string> {
    const params: Record<string, string> = { fecha: retreat.id };
    if (retreat.sedeSlug) params['sede'] = retreat.sedeSlug;
    return params;
  }

  protected monthShort(label: string): string {
    return label.split(' ')[0].slice(0, 3).toUpperCase();
  }

  protected sedeName(retreat: RetreatDate): string {
    if (retreat.sedeSlug === 'urubamba') return 'Urubamba';
    if (retreat.sedeSlug === 'tacna') return 'Tacna';
    return this.i18n.t('calendar.sedeTbd');
  }

  protected rangeClass(cell: CalendarDayCell): Record<string, boolean> {
    const pos = this.retreatRangePosition(cell.iso, cell.retreat);
    if (!pos) return {};
    return {
      'is-range-start': pos === 'start',
      'is-range-mid': pos === 'mid',
      'is-range-end': pos === 'end',
      'is-range-single': pos === 'single',
    };
  }

  private retreatRangePosition(
    iso: string | null,
    retreat: RetreatDate | null,
  ): 'start' | 'mid' | 'end' | 'single' | null {
    if (!iso || !retreat || retreat.status !== 'scheduled') return null;
    if (retreat.startDate === retreat.endDate) return 'single';
    if (iso === retreat.startDate) return 'start';
    if (iso === retreat.endDate) return 'end';
    if (iso > retreat.startDate && iso < retreat.endDate) return 'mid';
    return null;
  }
}
