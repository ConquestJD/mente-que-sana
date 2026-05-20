import {
  animate,
  animateChild,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

/**
 * Fade + slide route transition.
 * Applied on the outer container that wraps the <router-outlet>.
 *
 * Usage:
 *  [@routeAnimations]="getRouteAnimationData(outlet)"
 *
 * Where the activated route data is provided via `data: { animation: 'home' }`
 * on each route — this lets Angular detect changes between routes.
 */
export const routeAnimations = trigger('routeAnimations', [
  transition('* <=> *', [
    query(
      ':enter',
      [style({ opacity: 0, transform: 'translateY(20px)' })],
      { optional: true },
    ),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(
        ':leave',
        [animate('200ms ease-out', style({ opacity: 0 }))],
        { optional: true },
      ),
      query(
        ':enter',
        [
          animate(
            '300ms 150ms ease-out',
            style({ opacity: 1, transform: 'translateY(0)' }),
          ),
        ],
        { optional: true },
      ),
    ]),
  ]),
]);
