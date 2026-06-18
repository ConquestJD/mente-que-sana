import { Pipe, PipeTransform, inject } from '@angular/core';
import { LocaleService } from './locale.service';

@Pipe({
  name: 'translate',
  standalone: true,
  pure: false,
})
export class TranslatePipe implements PipeTransform {
  private readonly i18n = inject(LocaleService);

  transform(key: string): string {
    this.i18n.locale();
    return this.i18n.t(key);
  }
}
