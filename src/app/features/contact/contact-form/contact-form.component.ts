import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
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

import { ButtonComponent } from '../../../shared/components/button/button.component';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { getVisibleSede, VISIBLE_SEDES } from '../../../shared/sedes';
import {
  formatRetreatOption,
  getContactRetreatOptions,
  getNextRetreatForSede,
  getRetreatById,
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
export class ContactFormComponent {
  private readonly fb = inject(FormBuilder);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly route = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly tiers = [
    'Sembradores · S/ 890',
    'Lanzamiento · S/ 1,090',
    'Regular · S/ 1,390',
    'Aún no estoy seguro',
  ];

  private readonly undecidedSede = 'Aún no estoy seguro';
  protected readonly undecidedFecha = 'Aún no estoy seguro';
  protected readonly sedes = [
    ...VISIBLE_SEDES.map((s) => s.city),
    this.undecidedSede,
  ];
  protected readonly retreatOptions = getContactRetreatOptions();
  protected readonly fechaLabels = new Map(
    this.retreatOptions.map((r) => [r.id, formatRetreatOption(r)]),
  );

  protected readonly form = this.fb.nonNullable.group<ContactFormShape>({
    name: this.fb.nonNullable.control('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(80),
    ]),
    email: this.fb.nonNullable.control('', [Validators.required, Validators.email]),
    profession: this.fb.nonNullable.control('', [Validators.required, Validators.minLength(2)]),
    sede: this.fb.nonNullable.control(this.undecidedSede, [Validators.required]),
    fecha: this.fb.nonNullable.control(this.undecidedFecha, [Validators.required]),
    tier: this.fb.nonNullable.control('Aún no estoy seguro', [Validators.required]),
    message: this.fb.nonNullable.control('', [Validators.maxLength(500)]),
  });

  constructor() {
    this.applyQueryParams(this.route.snapshot.queryParamMap);

    this.route.queryParamMap
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((params) => this.applyQueryParams(params));

    this.form.controls.fecha.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((fechaId) => this.syncSedeFromFecha(fechaId));
  }

  private syncSedeFromFecha(fechaId: string): void {
    if (fechaId === this.undecidedFecha) return;
    const retreat = getRetreatById(fechaId);
    if (!retreat?.sedeSlug) return;
    const sede = getVisibleSede(retreat.sedeSlug);
    if (sede) {
      this.form.controls.sede.setValue(sede.city, { emitEvent: false });
    }
  }

  private applyQueryParams(params: { get(name: string): string | null }): void {
    const slug = params.get('sede');
    const sede = getVisibleSede(slug);
    if (sede) {
      this.form.controls.sede.setValue(sede.city);
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

    const fecha = params.get('fecha');
    if (fecha && getRetreatById(fecha)) {
      this.form.controls.fecha.setValue(fecha);
      this.syncSedeFromFecha(fecha);
    } else if (slug) {
      const nextForSede = getNextRetreatForSede(slug as RetreatSedeSlug);
      if (nextForSede) {
        this.form.controls.fecha.setValue(nextForSede.id);
      }
    }
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
    const fechaLabel =
      v.fecha === this.undecidedFecha
        ? v.fecha
        : (this.fechaLabels.get(v.fecha) ?? v.fecha);
    const lines = [
      `*Nueva consulta — Mente que Sana*`,
      ``,
      `Nombre: ${v.name}`,
      `Email: ${v.email}`,
      `Profesión: ${v.profession}`,
      `Sede de interés: ${v.sede}`,
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
      sede: this.undecidedSede,
      fecha: this.undecidedFecha,
      tier: 'Aún no estoy seguro',
      message: '',
    });
    this.submitted.set(false);
    this.sent.set(false);
  }
}
