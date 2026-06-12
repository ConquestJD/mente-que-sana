import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FaqAccordionComponent, FaqItem } from '../../pricing/faq-accordion/faq-accordion.component';

/**
 * Expanded FAQ shown on /contacto. Reuses the FaqAccordionComponent with a
 * longer list of questions.
 */
@Component({
  selector: 'app-faq-full',
  standalone: true,
  imports: [FaqAccordionComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-faq-accordion
      eyebrow="Preguntas frecuentes"
      title="Todo lo que suelen preguntarnos."
      [items]="faqs"
    />
  `,
})
export class FaqFullComponent {
  protected readonly faqs: FaqItem[] = [
    {
      q: '¿Qué pasa si no puedo asistir después de reservar?',
      a: 'Si avisas con más de 21 días de anticipación, el 80% es transferible a la próxima cohorte. Si avisas con menos, se transfiere el 50%. No realizamos devoluciones en efectivo.',
    },
    {
      q: '¿El retiro es para principiantes en yoga o meditación?',
      a: 'Sí. Las prácticas están diseñadas para cualquier nivel. No necesitas experiencia previa, solo apertura para vivirlo en el cuerpo.',
    },
    {
      q: '¿Cómo manejan el tema de altitud para personas que vienen de costa?',
      a: 'Recomendamos llegar a Cusco 24-48 horas antes. Tenemos protocolo de hidratación, oxígeno disponible y cero actividades exigentes el primer día.',
    },
    {
      q: '¿Puedo venir con alguien y compartir habitación?',
      a: 'Sí. Las habitaciones son dobles. Si vienes en pareja o con alguien, indícanos al reservar para asignarlos juntos.',
    },
    {
      q: '¿Qué tipo de alimentación se sirve?',
      a: 'Cocina antiinflamatoria con base vegetariana. Adaptamos a celíaco, veganos y alergias específicas. Avísanos al reservar.',
    },
    {
      q: '¿Cuándo se confirma la fecha del retiro?',
      a: 'La fecha exacta se confirma cuando se completan los 7 primeros cupos. Trabajamos con cohortes para asegurar la calidad del círculo.',
    },
    {
      q: '¿Cómo es el clima en esa altitud?',
      a: 'Días templados (18-22°C) y noches frías (4-8°C). Recomendamos ropa por capas: térmica, abrigo, gorro y zapatos cómodos para terreno.',
    },
    {
      q: '¿Hay señal o internet en el lugar?',
      a: 'Hay internet por satélite en zonas comunes, pero recomendamos un detox digital voluntario durante los dos días para profundizar la experiencia.',
    },
    {
      q: '¿Qué debo traer?',
      a: 'Ropa cómoda por capas, botella de agua reutilizable, cuaderno personal, cualquier medicación habitual. El resto lo ponemos nosotros.',
    },
    {
      q: '¿Quiénes facilitan el retiro?',
      a: 'Armando Huamán Naula (cirujano general y oncológico, ginecólogo oncólogo y especialista en cirugía colorrectal mínimamente invasiva) como facilitador principal, una maestra de yoga certificada y un médico de soporte. Equipo de tres personas para diez participantes.',
    },
    {
      q: '¿Tienen retiros para grupos cerrados (empresas, equipos)?',
      a: 'Sí. Ofrecemos formato corporativo y para equipos de salud. Escríbenos por WhatsApp para conversar el diseño a medida.',
    },
    {
      q: '¿Aceptan dólares o solo soles?',
      a: 'Aceptamos PEN, USD y transferencias internacionales. Para pagos en USD, usamos tipo de cambio del día de la transacción.',
    },
  ];
}
