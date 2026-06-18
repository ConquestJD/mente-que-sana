import {
  ChangeDetectionStrategy,
  Component,
  PLATFORM_ID,
  computed,
  inject,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { SectionHeaderComponent } from '../../../shared/components/section-header/section-header.component';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { LocaleService, TranslatePipe } from '../../../core/i18n';
import { IMG } from '../../../shared/images';

interface PlaceItem {
  index: string;
  name: string;
  caption: string;
  description: string;
  image: string;
  detail: string;
}

const SPACE_IMAGES = [
  IMG.miradorCusco,
  IMG.yogaSalaInside,
  IMG.campoVerde,
  IMG.diningTable,
  IMG.meditation,
] as const;

@Component({
  selector: 'app-place-preview',
  standalone: true,
  imports: [ButtonComponent, SectionHeaderComponent, ScrollRevealDirective, TranslatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './place-preview.component.html',
  styleUrl: './place-preview.component.scss',
})
export class PlacePreviewComponent {
  protected readonly i18n = inject(LocaleService);

  protected readonly header = computed(() => {
    this.i18n.locale();
    return this.i18n.tObject<{ eyebrow: string; title: string; lead: string }>(
      'home.placePreview.header',
    );
  });

  protected readonly items = computed((): PlaceItem[] => {
    this.i18n.locale();
    const spaces =
      this.i18n.tObject<Omit<PlaceItem, 'image'>[]>('home.placePreview.spaces') ?? [];
    return spaces.map((space, i) => ({
      ...space,
      image: SPACE_IMAGES[i] ?? SPACE_IMAGES[0],
    }));
  });

  protected readonly activeIndex = signal(0);
  protected readonly activeItem = computed(() => this.items()[this.activeIndex()]);

  private readonly platformId = inject(PLATFORM_ID);
  private autoplayId?: ReturnType<typeof setInterval>;

  constructor() {
    if (!isPlatformBrowser(this.platformId)) return;
    this.startAutoplay();
  }

  protected select(i: number): void {
    this.activeIndex.set(i);
    this.restartAutoplay();
  }

  protected next(): void {
    this.activeIndex.update((i) => (i + 1) % this.items().length);
    this.restartAutoplay();
  }

  protected prev(): void {
    this.activeIndex.update((i) => (i === 0 ? this.items().length - 1 : i - 1));
    this.restartAutoplay();
  }

  private startAutoplay(): void {
    this.autoplayId = setInterval(() => {
      this.activeIndex.update((i) => (i + 1) % this.items().length);
    }, 6500);
  }

  private restartAutoplay(): void {
    if (this.autoplayId) clearInterval(this.autoplayId);
    this.startAutoplay();
  }
}
