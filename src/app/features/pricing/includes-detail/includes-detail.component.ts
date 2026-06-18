import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { LocaleService } from '../../../core/i18n';

type DetailIcon = 'bed' | 'leaf' | 'flame' | 'compass';

interface IncludesDetailCopy {
  eyebrow: string;
  title: string;
  titleEm: string;
  titleEnd: string;
  lead: string;
  groups: Array<{ title: string; description: string; items: string[] }>;
}

const GROUP_ICONS: DetailIcon[] = ['bed', 'leaf', 'flame', 'compass'];

@Component({
  selector: 'app-includes-detail',
  standalone: true,
  imports: [ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './includes-detail.component.html',
  styleUrl: './includes-detail.component.scss',
})
export class IncludesDetailComponent {
  protected readonly i18n = inject(LocaleService);

  protected readonly copy = computed(() => {
    this.i18n.locale();
    return this.i18n.tObject<IncludesDetailCopy>('pricing.includesDetail')!;
  });

  protected readonly groups = computed(() =>
    this.copy().groups.map((group, i) => ({ ...group, icon: GROUP_ICONS[i] })),
  );
}
