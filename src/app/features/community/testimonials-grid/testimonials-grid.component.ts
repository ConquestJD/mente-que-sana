import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { LocaleService, TranslatePipe } from '../../../core/i18n';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { IMG } from '../../../shared/images';

interface TestimonialItem {
  name: string;
  role: string;
  city: string;
  quote: string;
}

interface Testimonial extends TestimonialItem {
  avatar: string;
}

const AVATARS = [IMG.portraitWoman1, IMG.portraitWoman2, IMG.portraitMan2, IMG.portraitMan1];

@Component({
  selector: 'app-testimonials-grid',
  standalone: true,
  imports: [ScrollRevealDirective, TranslatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './testimonials-grid.component.html',
  styleUrl: './testimonials-grid.component.scss',
})
export class TestimonialsGridComponent {
  private readonly i18n = inject(LocaleService);

  protected readonly testimonials = computed((): Testimonial[] => {
    this.i18n.locale();
    const items = this.i18n.tObject<TestimonialItem[]>('community.testimonialsGrid.items') ?? [];
    return items.map((item, i) => ({
      ...item,
      avatar: AVATARS[i] ?? AVATARS[0],
    }));
  });
}
