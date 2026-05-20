import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from './core/components/navbar/navbar.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { routeAnimations } from './shared/animations/route-transitions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [routeAnimations],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  /**
   * Returns the animation key from the activated route data so
   * `@routeAnimations` triggers between route changes.
   */
  protected getRouteAnimationData(outlet: RouterOutlet): string {
    return outlet?.activatedRouteData?.['animation'] ?? '';
  }
}
