/**
 * Calendario de retiros Mente que Sana — Jul 2026 a Nov 2027.
 * Fuente única para home, /calendario, sedes, contacto y tarifas.
 */

export type RetreatSedeSlug = 'urubamba' | 'tacna';

export interface RetreatDate {
  /** Identificador estable para query params (?fecha=). */
  id: string;
  sedeSlug: RetreatSedeSlug | null;
  startDate: string;
  endDate: string;
  label: string;
  monthKey: string;
  status: 'scheduled' | 'tbd';
  /** Solo mañana el primer día (p. ej. llegada + inicio pm). */
  startHalfDay?: boolean;
}

export interface CalendarDayCell {
  day: number | null;
  iso: string | null;
  retreat: RetreatDate | null;
}

export interface CalendarMonthView {
  key: string;
  label: string;
  year: number;
  month: number;
  weeks: CalendarDayCell[][];
  tbdRetreat: RetreatDate | null;
}

const MONTH_NAMES = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
];

const MONTH_NAMES_EN = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const MONTH_ABBR_ES = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
const MONTH_ABBR_EN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function getMonthNames(locale: 'es' | 'en' = 'es'): string[] {
  return locale === 'en' ? MONTH_NAMES_EN : MONTH_NAMES;
}

export function formatRetreatLabel(retreat: RetreatDate, locale: 'es' | 'en' = 'es'): string {
  if (retreat.status === 'tbd') {
    return locale === 'en' ? 'Available' : 'Disponible';
  }

  const start = parseIso(retreat.startDate);
  const end = parseIso(retreat.endDate);
  const abbr = locale === 'en' ? MONTH_ABBR_EN : MONTH_ABBR_ES;
  const sm = start.getMonth();
  const em = end.getMonth();
  const sd = start.getDate();
  const ed = end.getDate();
  const sy = start.getFullYear();
  const ey = end.getFullYear();

  if (retreat.startDate === retreat.endDate) {
    return locale === 'en' ? `${abbr[sm]} ${sd}, ${sy}` : `${sd} ${abbr[sm]} ${sy}`;
  }

  if (sm === em && sy === ey) {
    const range =
      locale === 'en'
        ? `${abbr[sm]} ${sd}–${ed}, ${sy}`
        : `${sd}–${ed} ${abbr[sm]} ${sy}`;
    if (retreat.startHalfDay) {
      return locale === 'en'
        ? `${abbr[sm]} ${sd} (am) – ${ed}, ${sy}`
        : `${sd} (am) – ${ed} ${abbr[sm]} ${sy}`;
    }
    return range;
  }

  return locale === 'en'
    ? `${abbr[sm]} ${sd}–${abbr[em]} ${ed}, ${ey}`
    : `${sd} ${abbr[sm]}–${ed} ${abbr[em]} ${ey}`;
}

export const RETREAT_DATES: RetreatDate[] = [
  {
    id: '2026-06-28',
    sedeSlug: 'urubamba',
    startDate: '2026-06-28',
    endDate: '2026-06-29',
    startHalfDay: true,
    label: '28–29 jun 2026',
    monthKey: '2026-06',
    status: 'scheduled',
  },
  {
    id: '2026-07-24',
    sedeSlug: 'urubamba',
    startDate: '2026-07-24',
    endDate: '2026-07-25',
    label: '24–25 jul 2026',
    monthKey: '2026-07',
    status: 'scheduled',
  },
  {
    id: '2026-08-22',
    sedeSlug: 'tacna',
    startDate: '2026-08-22',
    endDate: '2026-08-23',
    label: '22–23 ago 2026',
    monthKey: '2026-08',
    status: 'scheduled',
  },
  {
    id: '2026-09-09',
    sedeSlug: 'urubamba',
    startDate: '2026-09-09',
    endDate: '2026-09-10',
    label: '9–10 sep 2026',
    monthKey: '2026-09',
    status: 'scheduled',
  },
  {
    id: '2026-10-17',
    sedeSlug: 'tacna',
    startDate: '2026-10-17',
    endDate: '2026-10-18',
    label: '17–18 oct 2026',
    monthKey: '2026-10',
    status: 'scheduled',
  },
  {
    id: '2026-11-13',
    sedeSlug: 'urubamba',
    startDate: '2026-11-13',
    endDate: '2026-11-14',
    label: '13–14 nov 2026',
    monthKey: '2026-11',
    status: 'scheduled',
  },
  {
    id: '2026-12-05',
    sedeSlug: 'tacna',
    startDate: '2026-12-05',
    endDate: '2026-12-06',
    label: '5–6 dic 2026',
    monthKey: '2026-12',
    status: 'scheduled',
  },
  {
    id: '2027-01-tbd',
    sedeSlug: null,
    startDate: '2027-01-01',
    endDate: '2027-01-31',
    label: 'Disponible',
    monthKey: '2027-01',
    status: 'tbd',
  },
  {
    id: '2027-02-20',
    sedeSlug: 'tacna',
    startDate: '2027-02-20',
    endDate: '2027-02-21',
    label: '20–21 feb 2027',
    monthKey: '2027-02',
    status: 'scheduled',
  },
  {
    id: '2027-04-16',
    sedeSlug: 'urubamba',
    startDate: '2027-04-16',
    endDate: '2027-04-17',
    label: '16–17 abr 2027',
    monthKey: '2027-04',
    status: 'scheduled',
  },
  {
    id: '2027-05-08',
    sedeSlug: 'tacna',
    startDate: '2027-05-08',
    endDate: '2027-05-09',
    label: '8–9 may 2027',
    monthKey: '2027-05',
    status: 'scheduled',
  },
  {
    id: '2027-06-11',
    sedeSlug: 'urubamba',
    startDate: '2027-06-11',
    endDate: '2027-06-12',
    label: '11–12 jun 2027',
    monthKey: '2027-06',
    status: 'scheduled',
  },
  {
    id: '2027-07-24',
    sedeSlug: 'tacna',
    startDate: '2027-07-24',
    endDate: '2027-07-25',
    label: '24–25 jul 2027',
    monthKey: '2027-07',
    status: 'scheduled',
  },
  {
    id: '2027-07-30',
    sedeSlug: 'urubamba',
    startDate: '2027-07-30',
    endDate: '2027-07-31',
    label: '30–31 jul 2027',
    monthKey: '2027-07',
    status: 'scheduled',
  },
  {
    id: '2027-09-18',
    sedeSlug: 'tacna',
    startDate: '2027-09-18',
    endDate: '2027-09-19',
    label: '18–19 sep 2027',
    monthKey: '2027-09',
    status: 'scheduled',
  },
  {
    id: '2027-10-08',
    sedeSlug: 'urubamba',
    startDate: '2027-10-08',
    endDate: '2027-10-09',
    label: '8–9 oct 2027',
    monthKey: '2027-10',
    status: 'scheduled',
  },
  {
    id: '2027-11-13',
    sedeSlug: 'tacna',
    startDate: '2027-11-13',
    endDate: '2027-11-14',
    label: '13–14 nov 2027',
    monthKey: '2027-11',
    status: 'scheduled',
  },
];

const CALENDAR_START = { year: 2026, month: 5 };
const CALENDAR_END = { year: 2027, month: 10 };

const SEDE_CITY: Record<RetreatSedeSlug, string> = {
  urubamba: 'Urubamba',
  tacna: 'Tacna',
};

function parseIso(iso: string): Date {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d);
}

function toIso(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function eachDayInRetreat(retreat: RetreatDate): string[] {
  const days: string[] = [];
  const start = parseIso(retreat.startDate);
  const end = parseIso(retreat.endDate);
  const cursor = new Date(start);
  while (cursor <= end) {
    days.push(toIso(cursor));
    cursor.setDate(cursor.getDate() + 1);
  }
  return days;
}

function buildDayRetreatMap(): Map<string, RetreatDate> {
  const map = new Map<string, RetreatDate>();
  for (const retreat of RETREAT_DATES) {
    if (retreat.status !== 'scheduled') continue;
    for (const iso of eachDayInRetreat(retreat)) {
      map.set(iso, retreat);
    }
  }
  return map;
}

const DAY_RETREAT_MAP = buildDayRetreatMap();

export function getRetreatById(id: string): RetreatDate | undefined {
  return RETREAT_DATES.find((r) => r.id === id);
}

export function getSedeCity(slug: RetreatSedeSlug): string {
  return SEDE_CITY[slug];
}

export function getScheduledRetreats(): RetreatDate[] {
  return RETREAT_DATES.filter((r) => r.status === 'scheduled');
}

export function getContactRetreatOptions(): RetreatDate[] {
  return RETREAT_DATES.filter((r) => r.status === 'scheduled' || r.status === 'tbd');
}

export function formatRetreatOption(retreat: RetreatDate, locale: 'es' | 'en' = 'es'): string {
  if (retreat.status === 'tbd') {
    return locale === 'en' ? 'Jan 2027 · Date TBD' : 'Ene 2027 · Fecha por definir';
  }
  const city = retreat.sedeSlug ? SEDE_CITY[retreat.sedeSlug] : '';
  return `${city} · ${formatRetreatLabel(retreat, locale)}`;
}

export function getNextRetreat(from = new Date()): RetreatDate | undefined {
  const today = toIso(from);
  return getScheduledRetreats()
    .filter((r) => r.startDate >= today)
    .sort((a, b) => a.startDate.localeCompare(b.startDate))[0];
}

export function getUpcomingRetreats(limit: number, from = new Date()): RetreatDate[] {
  const today = toIso(from);
  return getScheduledRetreats()
    .filter((r) => r.startDate >= today)
    .sort((a, b) => a.startDate.localeCompare(b.startDate))
    .slice(0, limit);
}

export function getRetreatsBySede(slug: RetreatSedeSlug): RetreatDate[] {
  return RETREAT_DATES.filter((r) => r.sedeSlug === slug && r.status === 'scheduled')
    .sort((a, b) => a.startDate.localeCompare(b.startDate));
}

/** Opciones del formulario de contacto según sede (null = todas, incl. TBD). */
export function getContactRetreatOptionsForSede(slug: RetreatSedeSlug | null): RetreatDate[] {
  if (!slug) return getContactRetreatOptions();
  return getRetreatsBySede(slug);
}

export function cityToRetreatSedeSlug(city: string): RetreatSedeSlug | null {
  const entry = (Object.entries(SEDE_CITY) as [RetreatSedeSlug, string][]).find(
    ([, name]) => name === city,
  );
  return entry?.[0] ?? null;
}

export function getNextRetreatForSede(slug: RetreatSedeSlug, from = new Date()): RetreatDate | undefined {
  const today = toIso(from);
  return getRetreatsBySede(slug).find((r) => r.startDate >= today);
}

export function formatNextRetreatBadge(from = new Date(), locale: 'es' | 'en' = 'es'): string {
  const next = getNextRetreat(from);
  if (!next?.sedeSlug) {
    return locale === 'en' ? 'Next date to be confirmed' : 'Próxima fecha por confirmar';
  }
  const prefix = locale === 'en' ? 'Next retreat' : 'Próximo retiro';
  return `${prefix} · ${SEDE_CITY[next.sedeSlug]} · ${formatRetreatLabel(next, locale)}`;
}

export function formatFooterNextDate(from = new Date(), locale: 'es' | 'en' = 'es'): string {
  const next = getNextRetreat(from);
  if (!next?.sedeSlug) {
    return locale === 'en' ? 'Next date to be confirmed' : 'Próxima fecha por confirmar';
  }
  return `${SEDE_CITY[next.sedeSlug]} · ${formatRetreatLabel(next, locale)}`;
}

export function buildCalendarMonths(locale: 'es' | 'en' = 'es'): CalendarMonthView[] {
  const monthNames = getMonthNames(locale);
  const months: CalendarMonthView[] = [];
  let year = CALENDAR_START.year;
  let month = CALENDAR_START.month;

  while (year < CALENDAR_END.year || (year === CALENDAR_END.year && month <= CALENDAR_END.month)) {
    const key = `${year}-${String(month + 1).padStart(2, '0')}`;
    const tbdRetreat = RETREAT_DATES.find((r) => r.monthKey === key && r.status === 'tbd') ?? null;
    months.push({
      key,
      label: `${monthNames[month]} ${year}`,
      year,
      month,
      weeks: buildMonthWeeks(year, month),
      tbdRetreat,
    });
    month += 1;
    if (month > 11) {
      month = 0;
      year += 1;
    }
  }

  return months;
}

function buildMonthWeeks(year: number, month: number): CalendarDayCell[][] {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startOffset = (firstDay.getDay() + 6) % 7;
  const weeks: CalendarDayCell[][] = [];
  let week: CalendarDayCell[] = [];

  for (let i = 0; i < startOffset; i++) {
    week.push({ day: null, iso: null, retreat: null });
  }

  for (let day = 1; day <= lastDay.getDate(); day++) {
    const iso = toIso(new Date(year, month, day));
    week.push({
      day,
      iso,
      retreat: DAY_RETREAT_MAP.get(iso) ?? null,
    });
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }

  if (week.length) {
    while (week.length < 7) {
      week.push({ day: null, iso: null, retreat: null });
    }
    weeks.push(week);
  }

  return weeks;
}

export function groupCalendarMonthsByYear(
  months: CalendarMonthView[],
): { year: number; months: CalendarMonthView[] }[] {
  const map = new Map<number, CalendarMonthView[]>();
  for (const m of months) {
    const list = map.get(m.year) ?? [];
    list.push(m);
    map.set(m.year, list);
  }
  return [...map.entries()]
    .sort(([a], [b]) => a - b)
    .map(([year, monthList]) => ({ year, months: monthList }));
}
