import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { IMG } from '../../../shared/images';

interface Space {
  name: string;
  description: string;
  image: string;
  span: 'sm' | 'md' | 'lg' | 'xl';
}

@Component({
  selector: 'app-spaces-gallery',
  standalone: true,
  imports: [ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './spaces-gallery.component.html',
  styleUrl: './spaces-gallery.component.scss',
})
export class SpacesGalleryComponent {
  protected readonly spaces: Space[] = [
    { name: 'Vista a Cusco',      description: 'Mirador principal con bancos de piedra hacia la ciudad.',  image: IMG.cuscoVista,     span: 'xl' },
    { name: 'Sala de yoga',       description: 'Espacio cubierto con piso de madera y vista al valle.',    image: IMG.yogaSalaInside, span: 'md' },
    { name: 'Sauna de piedra',    description: 'Sauna tradicional de fuego con vapor de eucalipto.',       image: IMG.saunaStone,     span: 'sm' },
    { name: 'Campo verde',        description: 'Pradera abierta para prácticas al aire libre.',            image: IMG.campoVerde,     span: 'lg' },
    { name: 'Zona de meditación', description: 'Círculo de piedra rodeado de árboles nativos.',            image: IMG.meditation,     span: 'sm' },
    { name: 'Comedor andino',     description: 'Mesa larga bajo techo de teja, calefacción a leña.',       image: IMG.diningTable,    span: 'md' },
  ];
}
