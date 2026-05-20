import {
  ChangeDetectionStrategy,
  Component,
  PLATFORM_ID,
  inject,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { ButtonComponent } from '../../../shared/components/button/button.component';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

interface ContactFormShape {
  name: FormControl<string>;
  email: FormControl<string>;
  profession: FormControl<string>;
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

  protected readonly tiers = [
    'Sembradores · S/ 1,290',
    'Lanzamiento · S/ 1,690',
    'Regular · S/ 1,990',
    'Aún no estoy seguro',
  ];

  protected readonly form = this.fb.nonNullable.group<ContactFormShape>({
    name: this.fb.nonNullable.control('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(80),
    ]),
    email: this.fb.nonNullable.control('', [Validators.required, Validators.email]),
    profession: this.fb.nonNullable.control('', [Validators.required, Validators.minLength(2)]),
    tier: this.fb.nonNullable.control('Aún no estoy seguro', [Validators.required]),
    message: this.fb.nonNullable.control('', [Validators.maxLength(500)]),
  });

  protected readonly submitted = signal(false);
  protected readonly sent = signal(false);

  private readonly phone = '51989123456';

  protected submit(): void {
    this.submitted.set(true);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const v = this.form.getRawValue();
    const lines = [
      `*Nueva consulta — Mente que Sana*`,
      ``,
      `Nombre: ${v.name}`,
      `Email: ${v.email}`,
      `Profesión: ${v.profession}`,
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
      tier: 'Aún no estoy seguro',
      message: '',
    });
    this.submitted.set(false);
    this.sent.set(false);
  }
}
