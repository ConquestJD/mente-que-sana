import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { SectionHeaderComponent } from '../../../shared/components/section-header/section-header.component';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

interface DisciplineCard {
  eyebrow: string;
  title: string;
  body: string;
  icon: 'brain' | 'wave' | 'andes';
}

@Component({
  selector: 'app-why-preview',
  standalone: true,
  imports: [ButtonComponent, SectionHeaderComponent, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './why-preview.component.html',
  styleUrl: './why-preview.component.scss',
})
export class WhyPreviewComponent {
  protected readonly cards: DisciplineCard[] = [
    {
      eyebrow: 'Psiconeuroinmunología',
      title: 'Tu mente habla con tu sistema inmune.',
      body: 'El estrés crónico altera tu microbiota, eleva la inflamación y silencia tu vitalidad. La PNI nos enseña a revertirlo desde adentro.',
      icon: 'brain',
    },
    {
      eyebrow: 'Neurociencia',
      title: 'Tu cerebro cambia a cualquier edad.',
      body: 'La neuroplasticidad es la prueba: cada hábito nuevo reescribe circuitos. Lo que practicas con consciencia, se vuelve quien eres.',
      icon: 'wave',
    },
    {
      eyebrow: 'Sabiduría Andina',
      title: 'Mil años cuidando el espíritu.',
      body: 'La cosmovisión quechua entiende la salud como reciprocidad: con el cuerpo, con la tierra, con la comunidad. Ayni.',
      icon: 'andes',
    },
  ];
}
