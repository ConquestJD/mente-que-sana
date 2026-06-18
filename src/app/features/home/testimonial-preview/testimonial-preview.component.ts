import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { LocaleService, TranslatePipe } from '../../../core/i18n';
import { IMG } from '../../../shared/images';

interface MiniQuote {
  text: string;
  who: string;
  role: string;
  avatar: string;
}

const AVATAR_IMAGES = [IMG.portraitMan1, IMG.portraitMan2, IMG.portraitWoman2] as const;

@Component({
  selector: 'app-testimonial-preview',
  standalone: true,
  imports: [RouterLink, ScrollRevealDirective, TranslatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './testimonial-preview.component.html',
  styleUrl: './testimonial-preview.component.scss',
})
export class TestimonialPreviewComponent {
  protected readonly i18n = inject(LocaleService);

  protected readonly header = computed(() => {
    this.i18n.locale();
    return this.i18n.tObject<{
      eyebrow: string;
      title: string;
      titleEm: string;
    }>('home.testimonialPreview.header');
  });

  protected readonly miniQuotes = computed((): MiniQuote[] => {
    this.i18n.locale();
    const items =
      this.i18n.tObject<Omit<MiniQuote, 'avatar'>[]>('home.testimonialPreview.items') ?? [];
    return items.map((item, i) => ({
      ...item,
      avatar: AVATAR_IMAGES[i] ?? AVATAR_IMAGES[0],
    }));
  });
}
