import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { SectionHeaderComponent } from '../../../shared/components/section-header/section-header.component';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { IMG } from '../../../shared/images';

interface PlaceTile {
  name: string;
  caption: string;
  image: string;
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
    { name: 'Vista panorámica a Cusco', caption: 'Mirador principal · 2,870 m',  image: IMG.cuscoVista,     span: 'wide' },
    { name: 'Sala de yoga',             caption: 'Madera y luz natural',         image: IMG.yogaSalaInside },
    { name: 'Sauna de piedra',          caption: 'Vapor de eucalipto',           image: IMG.saunaStone },
    { name: 'Campo verde',              caption: 'Pradera abierta al valle',     image: IMG.campoVerde,    span: 'tall' },
  ];
}
