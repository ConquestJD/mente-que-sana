import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { formatFooterNextDate } from '../../../shared/retreat-dates';
import { LocaleService, TranslatePipe } from '../../i18n';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  protected readonly i18n = inject(LocaleService);
  protected readonly year = new Date().getFullYear();
  protected readonly whatsappNumber = '+51 998 901 054';

  protected readonly nextDate = computed(() =>
    formatFooterNextDate(new Date(), this.i18n.locale()),
  );

  protected readonly footerCopy = computed(() =>
    this.i18n.t('footer.copy').replace('{{year}}', String(this.year)),
  );
}
