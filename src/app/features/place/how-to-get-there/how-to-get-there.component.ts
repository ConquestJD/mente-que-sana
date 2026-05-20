import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

interface Step {
  index: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-how-to-get-there',
  standalone: true,
  imports: [ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './how-to-get-there.component.html',
  styleUrl: './how-to-get-there.component.scss',
})
export class HowToGetThereComponent {
  protected readonly steps: Step[] = [
    { index: '01', title: 'Llega a Cusco', description: 'Vuelo o bus a la ciudad imperial. Recomendamos llegar al menos 24h antes para aclimatar.' },
    { index: '02', title: 'Te recogemos', description: 'Punto de encuentro en Plaza de Armas a las 13:30. Transporte privado incluido.' },
    { index: '03', title: 'Camino panorámico', description: '45 minutos por la ruta del Valle Sagrado, mirando cómo se abre la cordillera.' },
    { index: '04', title: 'Bienvenida en el terreno', description: 'Llegada al retiro, infusión caliente y orientación. El círculo comienza.' },
  ];

  protected readonly climate = [
    { label: 'Día',     value: '18-22°C', hint: 'Sol intenso, llevar protección.' },
    { label: 'Noche',   value: '4-8°C',   hint: 'Frío seco. Recomendamos abrigo.' },
    { label: 'Humedad', value: '40%',     hint: 'Hidratación importante por altitud.' },
  ];
}
