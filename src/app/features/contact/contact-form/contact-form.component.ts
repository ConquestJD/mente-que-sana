import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  inject,
  OnInit,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { isPlatformBrowser } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { skip } from 'rxjs';

import { ButtonComponent } from '../../../shared/components/button/button.component';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { getVisibleSede } from '../../../shared/sedes';
import {
  formatRetreatOption,
  getContactRetreatOptionsForSede,
  getNextRetreatForSede,
  getRetreatById,
  RetreatDate,
  RetreatSedeSlug,
} from '../../../shared/retreat-dates';

interface ContactFormShape {
  name: FormControl<string>;
  email: FormControl<string>;
  profession: FormControl<string>;
  sede: FormControl<string>;
  fecha: FormControl<string>;
  tier: FormControl<string>;
  message: FormControl<string>;
}

/** Valor del select de sede cuando el usuario aún no eligió. */
const SEDE_UNDECIDED = 'undecided';

/**
 * Reactive contact form. On submit composes a pre-filled WhatsApp message
 * with the form fields and opens the WhatsApp web/app handler.
 * No backend involved.
 */
@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly route = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);
  private readonly cdr = inject(ChangeDetectorRef);

  protected readonly tiers = [
    'Sembradores · S/ 890',
    'Lanzamiento · S/ 1,090',
    'Regular · S/ 1,390',
    'Aún no estoy seguro',
  ];

  protected readonly undecidedFecha = 'Aún no estoy seguro';
  protected readonly sedeUndecided = SEDE_UNDECIDED;

  /** Igual que /tarifas: signals + select nativo (sin formControlName). */
  protected readonly selectedSede = signal(SEDE_UNDECIDED);
  protected readonly selectedFecha = signal(this.undecidedFecha);
  protected fechaChoices: { id: string; label: string }[] = buildFechaChoices(null);

  protected readonly form = this.fb.nonNullable.group<ContactFormShape>({
    name: this.fb.nonNullable.control('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(80),
    ]),
    email: this.fb.nonNullable.control('', [Validators.required, Validators.email]),
    profession: this.fb.nonNullable.control('', [Validators.required, Validators.minLength(2)]),
    sede: this.fb.nonNullable.control(SEDE_UNDECIDED, [Validators.required]),
    fecha: this.fb.nonNullable.control(this.undecidedFecha, [Validators.required]),
    tier: this.fb.nonNullable.control('Aún no estoy seguro', [Validators.required]),
    message: this.fb.nonNullable.control('', [Validators.maxLength(500)]),
  });

  ngOnInit(): void {
    this.applyQueryParams(this.route.snapshot.queryParamMap);

    this.route.queryParamMap
      .pipe(skip(1), takeUntilDestroyed(this.destroyRef))
      .subscribe((params) => this.applyQueryParams(params));
  }

  protected onSedeSelect(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.selectedSede.set(value);
    this.form.controls.sede.setValue(value);
    this.updateFechaOptions(value, { adjustFecha: true });
  }

  protected onFechaSelect(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.selectedFecha.set(value);
    this.form.controls.fecha.setValue(value);
    this.syncSedeFromFecha(value);
  }

  protected formatFechaLabel(retreat: RetreatDate): string {
    return labelForRetreat(retreat, this.resolveSedeSlug(this.selectedSede()));
  }

  protected sedeLabelFromValue(sedeValue: string): string {
    const labels: Record<string, string> = {
      urubamba: 'Urubamba',
      tacna: 'Tacna',
      [SEDE_UNDECIDED]: 'Aún no estoy seguro',
    };
    return labels[sedeValue] ?? sedeValue;
  }

  private resolveSedeSlug(sedeValue: string): RetreatSedeSlug | null {
    if (sedeValue === SEDE_UNDECIDED) return null;
    return sedeValue as RetreatSedeSlug;
  }

  private updateFechaOptions(
    sedeValue: string,
    options?: { adjustFecha?: boolean },
  ): void {
    const slug = this.resolveSedeSlug(sedeValue);
    this.fechaChoices = buildFechaChoices(slug);

    if (options?.adjustFecha) {
      this.adjustFechaForSede(slug, getContactRetreatOptionsForSede(slug));
    }

    this.cdr.markForCheck();
  }

  private adjustFechaForSede(slug: RetreatSedeSlug | null, retreats: RetreatDate[]): void {
    const currentFecha = this.selectedFecha();
    const fechaStillValid =
      currentFecha === this.undecidedFecha ||
      retreats.some((r) => r.id === currentFecha);

    if (!fechaStillValid) {
      const next = slug ? getNextRetreatForSede(slug) : undefined;
      const nextId = next?.id ?? this.undecidedFecha;
      this.selectedFecha.set(nextId);
      this.form.controls.fecha.setValue(nextId, { emitEvent: false });
    }

    this.cdr.markForCheck();
  }

  private syncSedeFromFecha(fechaId: string): void {
    if (fechaId === this.undecidedFecha) return;
    const retreat = getRetreatById(fechaId);
    if (!retreat?.sedeSlug) return;
    const sede = getVisibleSede(retreat.sedeSlug);
    if (!sede) return;

    if (this.selectedSede() !== sede.slug) {
      this.selectedSede.set(sede.slug);
      this.form.controls.sede.setValue(sede.slug, { emitEvent: false });
      this.updateFechaOptions(sede.slug, { adjustFecha: false });
    }
  }

  private applyQueryParams(params: { get(name: string): string | null }): void {
    const slug = params.get('sede') as RetreatSedeSlug | null;
    const sede = getVisibleSede(slug);
    if (sede) {
      this.selectedSede.set(sede.slug);
      this.form.controls.sede.setValue(sede.slug, { emitEvent: false });
    } else {
      this.selectedSede.set(SEDE_UNDECIDED);
      this.form.controls.sede.setValue(SEDE_UNDECIDED, { emitEvent: false });
    }

    const tarifa = params.get('tarifa');
    const tierByKey: Record<string, string> = {
      sembradores: 'Sembradores · S/ 890',
      lanzamiento: 'Lanzamiento · S/ 1,090',
      regular: 'Regular · S/ 1,390',
    };
    if (tarifa && tierByKey[tarifa]) {
      this.form.controls.tier.setValue(tierByKey[tarifa]);
    }

    this.updateFechaOptions(this.selectedSede(), { adjustFecha: false });

    const fecha = params.get('fecha');
    if (fecha && this.fechaChoices.some((c) => c.id === fecha)) {
      this.selectedFecha.set(fecha);
      this.form.controls.fecha.setValue(fecha, { emitEvent: false });
      this.syncSedeFromFecha(fecha);
    } else if (slug) {
      const nextForSede = getNextRetreatForSede(slug);
      if (nextForSede) {
        this.selectedFecha.set(nextForSede.id);
        this.form.controls.fecha.setValue(nextForSede.id, { emitEvent: false });
      }
    }

    this.cdr.markForCheck();
  }

  protected readonly submitted = signal(false);
  protected readonly sent = signal(false);

  private readonly phone = '51998901054';

  protected submit(): void {
    this.submitted.set(true);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const v = this.form.getRawValue();
    const retreat = getRetreatById(v.fecha);
    const fechaLabel =
      v.fecha === this.undecidedFecha
        ? v.fecha
        : retreat
          ? this.formatFechaLabel(retreat)
          : v.fecha;
    const lines = [
      `*Nueva consulta — Mente que Sana*`,
      ``,
      `Nombre: ${v.name}`,
      `Email: ${v.email}`,
      `Profesión: ${v.profession}`,
      `Sede de interés: ${this.sedeLabelFromValue(v.sede)}`,
      `Fecha de interés: ${fechaLabel}`,
      `Tarifa de interés: ${v.tier}`,
      ``,
      v.message ? `Mensaje:\n${v.message}` : `Mensaje: (sin mensaje)`,
    ];
    const text = encodeURIComponent(lines.join('\n'));
    const url = `https://wa.me/${this.phone}?text=${text}`;

    if (isPlatformBrowser(this.platformId)) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
    this.sent.set(true);
  }

  protected hasError(field: keyof ContactFormShape, error: string): boolean {
    const c = this.form.controls[field];
    return c.touched && c.hasError(error);
  }

  protected isInvalid(field: keyof ContactFormShape): boolean {
    const c = this.form.controls[field];
    return c.touched && c.invalid;
  }

  protected reset(): void {
    this.form.reset({
      name: '',
      email: '',
      profession: '',
      sede: SEDE_UNDECIDED,
      fecha: this.undecidedFecha,
      tier: 'Aún no estoy seguro',
      message: '',
    });
    this.selectedSede.set(SEDE_UNDECIDED);
    this.selectedFecha.set(this.undecidedFecha);
    this.updateFechaOptions(SEDE_UNDECIDED, { adjustFecha: false });
    this.submitted.set(false);
    this.sent.set(false);
  }
}

function labelForRetreat(retreat: RetreatDate, slug: RetreatSedeSlug | null): string {
  if (!slug) return formatRetreatOption(retreat);
  if (retreat.status === 'tbd') return 'Ene 2027 · Fecha por definir';
  return retreat.label;
}

function buildFechaChoices(slug: RetreatSedeSlug | null): { id: string; label: string }[] {
  return getContactRetreatOptionsForSede(slug).map((retreat) => ({
    id: retreat.id,
    label: labelForRetreat(retreat, slug),
  }));
}
