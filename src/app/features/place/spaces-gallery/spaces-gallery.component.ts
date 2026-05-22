import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  NgZone,
  OnDestroy,
  PLATFORM_ID,
  QueryList,
  ViewChild,
  ViewChildren,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { IMG } from '../../../shared/images';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

interface Space {
  /** Display name shown as the giant editorial heading. */
  name: string;
  /** Short lead under the name. */
  lead: string;
  /** Longer body paragraph. */
  body: string;
  /** Three highlight bullets shown below the body. */
  highlights: string[];
  /** Two key facts shown as side meta. */
  meta: { label: string; value: string }[];
  /** Eyebrow category (e.g. "El mirador", "La práctica"). */
  category: string;
  /** Background image URL. */
  image: string;
}

/**
 * Cinematic full-viewport scroll gallery for the place spaces.
 *
 * Each space is its own ~100vh scene with a full-bleed background image,
 * editorial typography overlay, and a persistent left rail that tracks
 * the current chapter via IntersectionObserver.
 */
@Component({
  selector: 'app-spaces-gallery',
  standalone: true,
  imports: [ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './spaces-gallery.component.html',
  styleUrl: './spaces-gallery.component.scss',
})
export class SpacesGalleryComponent implements AfterViewInit, OnDestroy {
  @ViewChildren('scene', { read: ElementRef })
  private sceneEls!: QueryList<ElementRef<HTMLElement>>;

  @ViewChild('scenesWrap', { read: ElementRef })
  private scenesWrap?: ElementRef<HTMLElement>;

  /** Index of the currently most-visible scene. */
  protected readonly activeIndex = signal(0);
  /** 0–1 progress through the entire scenes block (for the rail track). */
  protected readonly progress = signal(0);
  /** Whether the rail should be visible (only while scenes block is in view). */
  protected readonly railVisible = signal(false);

  protected readonly spaces: Space[] = [
    {
      category: 'El mirador',
      name: 'Vista a Cusco',
      lead: 'Donde la luz dorada sube desde la ciudad imperial.',
      body:
        'Una terraza de piedra orientada al noreste. El primer punto del retiro: desde aquí se entiende por qué este terreno existe — la cordillera se abre 180° sobre la ciudad y el silencio se vuelve textura.',
      highlights: [
        'Panorámica de 180° sobre Cusco',
        'Bancos de piedra para sentar la mirada',
        'Punto privilegiado al amanecer y al ocaso',
      ],
      meta: [
        { label: 'Orientación', value: 'Noreste' },
        { label: 'Mejor hora',  value: '05:50 — 07:10' },
      ],
      image: IMG.cuscoVista,
    },
    {
      category: 'La práctica',
      name: 'Sala de yoga',
      lead: 'Piso de madera, ventanal al valle, una sola intención.',
      body:
        'Un volumen cerrado pero abierto a la luz. El piso flotante de eucalipto absorbe los pasos. La ventana de cinco metros enmarca el valle como un cuadro en movimiento mientras la práctica avanza.',
      highlights: [
        'Capacidad para 10 esterillas con espacio amplio',
        'Calefacción a leña para mañanas frías',
        'Equipo de sonido tenue con cuencos andinos',
      ],
      meta: [
        { label: 'Superficie', value: '85 m²' },
        { label: 'Aforo',      value: '10 personas' },
      ],
      image: IMG.yogaSalaInside,
    },
    {
      category: 'El fuego',
      name: 'Sauna de piedra',
      lead: 'Una práctica andina que abre la respiración a 2.870 m.',
      body:
        'Construida con piedra del propio terreno y madera de queuña. El vapor lleva muña, eucalipto y hierbas que crecen al borde del valle. Dos sesiones diseñadas por el facilitador para soltar lo que el cuerpo aún no había nombrado.',
      highlights: [
        'Muros de piedra trabajados a mano',
        'Vapor con muña y eucalipto fresco',
        'Duchas con agua de manantial inmediata al final',
      ],
      meta: [
        { label: 'Temperatura', value: '70 — 80°C' },
        { label: 'Sesiones',    value: '2 por retiro' },
      ],
      image: IMG.saunaStone,
    },
    {
      category: 'El cuerpo del lugar',
      name: 'Campo verde',
      lead: 'Una pradera abierta donde el cuerpo recuerda a la tierra.',
      body:
        'Hectárea y media de hierba andina baja, sin construcciones ni cables. El campo se usa para caminata consciente, ejercicios de respiración al aire libre y para la noche del cielo estrellado del día uno.',
      highlights: [
        '3.2 hectáreas de terreno privado',
        'Sin contaminación visual ni acústica',
        'Inclinación suave, accesible para todos',
      ],
      meta: [
        { label: 'Campo abierto', value: '1.4 ha' },
        { label: 'Inclinación',   value: 'Suave' },
      ],
      image: IMG.campoVerde,
    },
    {
      category: 'El centro',
      name: 'Círculo de meditación',
      lead: 'Doce piedras puestas en círculo. Una sola dirección.',
      body:
        'Un anillo de piedra rodeado de árboles nativos. El espacio donde la cohorte se sienta en silencio. Tiene una cubierta retráctil para la posibilidad de lluvia y un fogón central que solo se enciende para los círculos de la noche.',
      highlights: [
        'Doce asientos de piedra en círculo',
        'Fogón central de piedra volcánica',
        'Cubierta textil retráctil para lluvia',
      ],
      meta: [
        { label: 'Capacidad', value: '12 personas' },
        { label: 'Uso',       value: 'Círculo grupal' },
      ],
      image: IMG.meditation,
    },
    {
      category: 'La mesa',
      name: 'Comedor andino',
      lead: 'Una mesa larga donde se comparte lo que somos.',
      body:
        'Bajo techo de teja, cuatro metros de mesa única, vajilla artesanal de Pucará y cocina con producto local. Cinco comidas pensadas con un nutricionista para sostener el cuerpo durante la altura y la intensidad del trabajo interior.',
      highlights: [
        'Mesa única de 4 metros',
        '80% de los productos a kilómetro cero',
        'Calefacción a leña para las noches frías',
      ],
      meta: [
        { label: 'Comidas', value: '5 por retiro' },
        { label: 'Origen',  value: 'Valle Sagrado' },
      ],
      image: IMG.diningTable,
    },
  ];

  private observer?: IntersectionObserver;
  private wrapObserver?: IntersectionObserver;
  private onScroll?: () => void;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private zone: NgZone,
  ) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          const el = visible[0].target as HTMLElement;
          const idx = Number(el.dataset['idx']);
          if (!Number.isNaN(idx)) this.activeIndex.set(idx);
        }
      },
      { threshold: [0.25, 0.5, 0.75] },
    );

    this.sceneEls.forEach((ref) => this.observer!.observe(ref.nativeElement));

    // Show the rail only while the scenes block intersects the viewport.
    // We use a generous rootMargin so the rail fades in slightly before the
    // first scene fully arrives and fades out as the last scene leaves.
    const wrap = this.scenesWrap?.nativeElement;
    if (wrap) {
      this.wrapObserver = new IntersectionObserver(
        (entries) => {
          const e = entries[0];
          this.railVisible.set(e.isIntersecting);
        },
        { threshold: 0, rootMargin: '-15% 0px -15% 0px' },
      );
      this.wrapObserver.observe(wrap);
    }

    // Track scroll progress for the rail
    this.zone.runOutsideAngular(() => {
      let rafId = 0;
      this.onScroll = () => {
        cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
          const wrap = this.scenesWrap?.nativeElement;
          if (!wrap) return;
          const rect = wrap.getBoundingClientRect();
          const viewport = window.innerHeight;
          const total = rect.height - viewport;
          if (total <= 0) return;
          const scrolled = Math.min(Math.max(-rect.top, 0), total);
          const p = scrolled / total;
          this.zone.run(() => this.progress.set(p));
        });
      };
      window.addEventListener('scroll', this.onScroll, { passive: true });
      this.onScroll();
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.wrapObserver?.disconnect();
    if (this.onScroll) window.removeEventListener('scroll', this.onScroll);
  }
}
