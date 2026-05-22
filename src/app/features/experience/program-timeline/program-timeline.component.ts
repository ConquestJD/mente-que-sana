import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { ParallaxDirective } from '../../../shared/directives/parallax.directive';
import { IMG } from '../../../shared/images';

interface TimelineActivity {
  time: string;
  title: string;
  description: string;
  tag?: string;
}

interface TimelineDay {
  label: string;
  title: string;
  intent: string;
  variant: 'day-1' | 'day-2' | 'after';
  image: string;
  highlight: string;
  activities: TimelineActivity[];
}

@Component({
  selector: 'app-program-timeline',
  standalone: true,
  imports: [ScrollRevealDirective, ParallaxDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './program-timeline.component.html',
  styleUrl: './program-timeline.component.scss',
})
export class ProgramTimelineComponent {
  protected readonly days: TimelineDay[] = [
    {
      label: 'Día 1',
      title: 'Reconocer',
      intent: 'Aterrizar en el cuerpo. Mirar lo que cargas sin pelearlo.',
      variant: 'day-1',
      image: IMG.handsTea,
      highlight: '5 actividades · de 15:00 a 22:00',
      activities: [
        { time: '15:00', title: 'Llegada y ceremonia del agua', description: 'Recepción con infusión andina, presentación del círculo y limpia simbólica con agua de manantial.', tag: 'Apertura' },
        { time: '16:30', title: 'Marco PNI: cuerpo-mente-comunidad', description: 'Sesión teórico-vivencial. Mapeamos cómo tu historia se aloja en tu fisiología.', tag: 'Ciencia' },
        { time: '18:00', title: 'Yoga restaurativo + respiración consciente', description: 'Práctica suave para reconectar con la respiración profunda en la sala de piedra.', tag: 'Cuerpo' },
        { time: '19:30', title: 'Cena andina compartida', description: 'Comida ceremonial con ingredientes locales y tiempo lento de conversación.', tag: 'Comunidad' },
        { time: '21:00', title: 'Fuego sagrado y palabra honesta', description: 'Círculo nocturno al aire libre con vista a las luces de Cusco. Cada quien deja algo en el fuego.', tag: 'Ritual' },
      ],
    },
    {
      label: 'Día 2',
      title: 'Transformar',
      intent: 'Practicar la mente nueva. Sembrar el hábito que sostiene.',
      variant: 'day-2',
      image: IMG.yogaSunrise,
      highlight: '7 actividades · de 06:30 a 18:00',
      activities: [
        { time: '06:30', title: 'Saludo al sol sobre el valle', description: 'Despertar con yoga dinámico mirando amanecer sobre Pisac y Urubamba.', tag: 'Inicio' },
        { time: '08:00', title: 'Desayuno funcional', description: 'Alimentación antiinflamatoria con productos de la zona y café especial.', tag: 'Nutrición' },
        { time: '09:30', title: 'Neurociencia del hábito y plan personal', description: 'Diseñamos tu protocolo de 30 días con base en evidencia y tu historia.', tag: 'Estrategia' },
        { time: '12:00', title: 'Sauna de piedra + contraste térmico', description: 'Sesión guiada de calor y agua fría. Reset autonómico real.', tag: 'Cuerpo' },
        { time: '14:00', title: 'Almuerzo en el campo', description: 'Mesa larga sobre la pradera. Sabores, risas, silencios elegidos.', tag: 'Pausa' },
        { time: '16:00', title: 'Integración: tu carta a los 30 días', description: 'Escritura guiada que te entregas a ti mismo cuando termine el ciclo.', tag: 'Cierre' },
        { time: '17:30', title: 'Ceremonia de cierre y despedida', description: 'Compromiso colectivo y entrega del kit de seguimiento.', tag: 'Sello' },
      ],
    },
    {
      label: 'Post-retiro',
      title: '30 días sembrando',
      intent: 'No te dejamos solo. La mente nueva necesita testigos.',
      variant: 'after',
      image: IMG.paperJournal,
      highlight: 'Llamadas grupales · bitácora · cierre',
      activities: [
        { time: 'Semana 1', title: 'Llamada grupal de integración', description: 'Encuentro virtual a los 7 días para sostener lo aprendido.', tag: 'Acompañamiento' },
        { time: 'Semana 2-3', title: 'Plan personal en práctica', description: 'Micro-tareas diarias con recordatorios suaves y bitácora compartida.', tag: 'Hábito' },
        { time: 'Día 30', title: 'Círculo de cierre 30 días', description: 'Volvemos a reunirnos a leer la carta y celebrar el camino recorrido.', tag: 'Sello' },
      ],
    },
  ];
}
