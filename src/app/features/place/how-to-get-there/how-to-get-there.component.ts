import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { Sede } from '../../../shared/sedes';

@Component({
  selector: 'app-how-to-get-there',
  standalone: true,
  imports: [ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './how-to-get-there.component.html',
  styleUrl: './how-to-get-there.component.scss',
})
export class HowToGetThereComponent {
  @Input({ required: true }) sede!: Sede;
}
