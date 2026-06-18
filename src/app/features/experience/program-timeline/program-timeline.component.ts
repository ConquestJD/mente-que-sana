import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { ParallaxDirective } from '../../../shared/directives/parallax.directive';
import { LocaleService } from '../../../core/i18n';
import { IMG } from '../../../shared/images';

interface TimelineActivity {
  time: string;
  title: string;
  description: string;
  tag?: string;
}

interface TimelineDayCopy {
  label: string;
  title: string;
  intent: string;
  highlight: string;
  activities: TimelineActivity[];
}

interface ProgramTimelineCopy {
  eyebrow: string;
  title: string;
  titleEm: string;
  lead: string;
  strip: Array<{ num: string; label: string }>;
  days: TimelineDayCopy[];
}

const DAY_VARIANTS = ['day-1', 'day-2', 'after'] as const;
const DAY_IMAGES = [IMG.handsTea, IMG.yogaSunrise, IMG.paperJournal];

@Component({
  selector: 'app-program-timeline',
  standalone: true,
  imports: [ScrollRevealDirective, ParallaxDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './program-timeline.component.html',
  styleUrl: './program-timeline.component.scss',
})
export class ProgramTimelineComponent {
  protected readonly i18n = inject(LocaleService);

  protected readonly copy = computed(() => {
    this.i18n.locale();
    return this.i18n.tObject<ProgramTimelineCopy>('experience.programTimeline')!;
  });

  protected readonly days = computed(() =>
    this.copy().days.map((day, i) => ({
      ...day,
      variant: DAY_VARIANTS[i],
      image: DAY_IMAGES[i],
    })),
  );
}
