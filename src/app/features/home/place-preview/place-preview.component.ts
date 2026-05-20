import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { SectionHeaderComponent } from '../../../shared/components/section-header/section-header.component';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

interface PlaceTile {
  name: string;
  variant: 'mountain' | 'verde' | 'sauna' | 'sky';
  span?: 'tall' | 'wide';
}

@Component({
  selector: 'app-place-preview',
  standalone: true,
  imports: [ButtonComponent, SectionHeaderComponent, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './place-preview.component.html',
  styleUrl: './place-preview.component.scss',
})
export class PlacePreviewComponent {
  protected readonly tiles: PlaceTile[] = [
    { name: 'Vista panorámica a Cusco',  variant: 'sky',      span: 'wide' },
    { name: 'Sala de yoga',              variant: 'mountain' },
    { name: 'Sauna de piedra',           variant: 'sauna' },
    { name: 'Campo verde',               variant: 'verde',    span: 'tall' },
  ];
}
