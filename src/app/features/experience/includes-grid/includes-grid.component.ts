import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { TiltDirective } from '../../../shared/directives/tilt.directive';
import { LocaleService } from '../../../core/i18n';
import { IMG } from '../../../shared/images';

type IncludeIcon = 'bed' | 'fork' | 'lotus' | 'fire' | 'book' | 'group' | 'plant' | 'phone';

interface IncludesGridCopy {
  eyebrow: string;
  title: string;
  titleEm: string;
  lead: string;
  stripNum: string;
  stripText: string;
  items: Array<{ title: string; description: string }>;
}

const INCLUDE_ICONS: IncludeIcon[] = ['bed', 'fork', 'lotus', 'fire', 'book', 'group', 'plant', 'phone'];
const INCLUDE_IMAGES = [
  IMG.andeStone,
  IMG.andineFood,
  IMG.yogaSalaInside,
  IMG.fuego,
  IMG.paperJournal,
  IMG.circleHands,
  IMG.herbs,
  IMG.cupTea,
];

@Component({
  selector: 'app-includes-grid',
  standalone: true,
  imports: [DecimalPipe, ScrollRevealDirective, TiltDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './includes-grid.component.html',
  styleUrl: './includes-grid.component.scss',
})
export class IncludesGridComponent {
  protected readonly i18n = inject(LocaleService);

  protected readonly copy = computed(() => {
    this.i18n.locale();
    return this.i18n.tObject<IncludesGridCopy>('experience.includesGrid')!;
  });

  protected readonly items = computed(() =>
    this.copy().items.map((item, i) => ({
      ...item,
      icon: INCLUDE_ICONS[i],
      image: INCLUDE_IMAGES[i],
    })),
  );
}
