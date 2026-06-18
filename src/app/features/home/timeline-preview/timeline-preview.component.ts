import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { LocaleService, TranslatePipe } from '../../../core/i18n';
import { IMG } from '../../../shared/images';

interface TimelineStop {
  index: string;
  title: string;
  description: string;
  image: string;
}

const STOP_IMAGES = [
  IMG.handsTea,
  IMG.yogaSalaInside,
  IMG.fuego,
  IMG.yogaSunrise,
  IMG.diningTable,
  IMG.paperJournal,
] as const;

/**
 * Resumen del programa día-a-día con imágenes alternando lado y línea
 * conectora animada.
 */
@Component({
  selector: 'app-timeline-preview',
  standalone: true,
  imports: [RouterLink, ScrollRevealDirective, TranslatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './timeline-preview.component.html',
  styleUrl: './timeline-preview.component.scss',
})
export class TimelinePreviewComponent {
  protected readonly i18n = inject(LocaleService);

  protected readonly header = computed(() => {
    this.i18n.locale();
    return this.i18n.tObject<{
      eyebrow: string;
      title: string;
      titleEm: string;
      lead: string;
    }>('home.timelinePreview.header');
  });

  protected readonly stops = computed((): TimelineStop[] => {
    this.i18n.locale();
    const raw =
      this.i18n.tObject<Omit<TimelineStop, 'image'>[]>('home.timelinePreview.stops') ?? [];
    return raw.map((stop, i) => ({
      ...stop,
      image: STOP_IMAGES[i] ?? STOP_IMAGES[0],
    }));
  });
}
