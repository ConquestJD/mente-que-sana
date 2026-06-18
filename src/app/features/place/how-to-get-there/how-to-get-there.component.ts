import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TranslatePipe } from '../../../core/i18n';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { Sede } from '../../../shared/sedes';

@Component({
  selector: 'app-how-to-get-there',
  standalone: true,
  imports: [ScrollRevealDirective, TranslatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './how-to-get-there.component.html',
  styleUrl: './how-to-get-there.component.scss',
})
export class HowToGetThereComponent {
  @Input({ required: true }) sede!: Sede;
}
