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
import { IMG } from '../../../shared/images';

interface PlaceItem {
  index: string;
  name: string;
  caption: string;
  description: string;
  image: string;
  detail: string;
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
  protected readonly items: PlaceItem[] = [
    {
      index: '01',
      name: 'Mirador panorámico',
      caption: 'Vista total a Cusco',
      description: 'Terraza de piedra a 2,870 m. Cusco se ve completo, en silencio.',
      image: IMG.cuscoVista,
      detail: 'Amanecer y atardecer · bancas de piedra · sin ruido',
    },
    {
      index: '02',
      name: 'Sala de yoga',
      caption: 'Madera y luz natural',
      description: 'Espacio cubierto con piso de madera y ventanal hacia el valle.',
      image: IMG.yogaSalaInside,
      detail: 'Capacidad 12 · calefacción · esterillas incluidas',
    },
    {
      index: '03',
      name: 'Sauna de piedra',
      caption: 'Vapor de eucalipto',
      description: 'Sauna tradicional de fuego con piedras volcánicas y eucalipto.',
      image: IMG.saunaStone,
      detail: 'Sesión grupal · contraste con manantial frío',
    },
    {
      index: '04',
      name: 'Campo verde',
      caption: 'Pradera abierta',
      description: 'Tres hectáreas para prácticas al aire libre y caminatas conscientes.',
      image: IMG.campoVerde,
      detail: 'Apto para ceremonias · sin contaminación lumínica',
    },
    {
      index: '05',
      name: 'Comedor andino',
      caption: 'Mesa compartida',
      description: 'Mesa larga bajo techo de teja, calefacción a leña, cocina antiinflamatoria.',
      image: IMG.diningTable,
      detail: '3 comidas + 2 infusiones · vegetariano + omnívoro local',
    },
    {
      index: '06',
      name: 'Zona de meditación',
      caption: 'Círculo de piedra',
      description: 'Espacio íntimo rodeado de árboles nativos para los círculos del retiro.',
      image: IMG.meditation,
      detail: 'Hoguera central · espacio cubierto y descubierto',
    },
  ];

  protected readonly activeIndex = signal(0);
  protected readonly activeItem = computed(() => this.items[this.activeIndex()]);

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
    this.activeIndex.update((i) => (i + 1) % this.items.length);
    this.restartAutoplay();
  }

  protected prev(): void {
    this.activeIndex.update((i) => (i === 0 ? this.items.length - 1 : i - 1));
    this.restartAutoplay();
  }

  private startAutoplay(): void {
    this.autoplayId = setInterval(() => {
      this.activeIndex.update((i) => (i + 1) % this.items.length);
    }, 6500);
  }

  private restartAutoplay(): void {
    if (this.autoplayId) clearInterval(this.autoplayId);
    this.startAutoplay();
  }
}
