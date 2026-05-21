import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { IMG } from '../../../shared/images';

interface MiniQuote {
  text: string;
  who: string;
  role: string;
  avatar: string;
}

@Component({
  selector: 'app-testimonial-preview',
  standalone: true,
  imports: [RouterLink, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './testimonial-preview.component.html',
  styleUrl: './testimonial-preview.component.scss',
})
export class TestimonialPreviewComponent {
  protected readonly miniQuotes: MiniQuote[] = [
    {
      text: 'Volví con un cuerpo que no conocía. Más despacio. Más mío.',
      who: 'Ricardo A.',
      role: 'Médico · Lima',
      avatar: IMG.portraitMan1,
    },
    {
      text: 'El círculo curó cosas que la terapia individual no toca.',
      who: 'Andrés M.',
      role: 'Coach · Trujillo',
      avatar: IMG.portraitMan2,
    },
    {
      text: 'Volví a mi aula sin gritar. Eso ya es transformación.',
      who: 'Liz C.',
      role: 'Maestra · Cusco',
      avatar: IMG.portraitWoman2,
    },
  ];
}
