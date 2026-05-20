import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  PLATFORM_ID,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ButtonComponent } from '../../../shared/components/button/button.component';

interface TierBreakdown {
  name: string;
  remaining: number;
  total: number;
  variant: 'sembradores' | 'lanzamiento' | 'regular';
}

@Component({
  selector: 'app-spots-counter',
  standalone: true,
  imports: [ButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './spots-counter.component.html',
  styleUrl: './spots-counter.component.scss',
})
export class SpotsCounterComponent implements AfterViewInit {
  @ViewChild('counter', { static: true })
  private counterEl?: ElementRef<HTMLElement>;

  protected readonly totalSpots = 10;
  protected readonly remaining = 7;
  protected readonly displayed = signal(0);

  protected readonly tiers: TierBreakdown[] = [
    { name: 'Sembradores', remaining: 2, total: 3, variant: 'sembradores' },
    { name: 'Lanzamiento', remaining: 3, total: 4, variant: 'lanzamiento' },
    { name: 'Regular',     remaining: 2, total: 3, variant: 'regular'     },
  ];

  protected get progress(): number {
    return ((this.totalSpots - this.remaining) / this.totalSpots) * 100;
  }

  private readonly platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId) || !this.counterEl) {
      this.displayed.set(this.remaining);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            this.runCount();
            observer.disconnect();
          }
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(this.counterEl.nativeElement);
  }

  private runCount(): void {
    const target = this.remaining;
    const duration = 1400;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const p = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      this.displayed.set(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
}
