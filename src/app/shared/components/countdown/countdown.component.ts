import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  inject,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface Remaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

/**
 * Countdown to a target ISO date — used near pricing/spots sections.
 * Falls back gracefully on SSR (renders the snapshot of "remaining").
 */
@Component({
  selector: 'app-countdown',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (label) { <span class="countdown__label title-sm">{{ label }}</span> }
    <div class="countdown__grid">
      <div class="countdown__unit">
        <span class="countdown__num ui-data">{{ pad(remaining().days) }}</span>
        <span class="countdown__txt">días</span>
      </div>
      <div class="countdown__unit">
        <span class="countdown__num ui-data">{{ pad(remaining().hours) }}</span>
        <span class="countdown__txt">horas</span>
      </div>
      <div class="countdown__unit">
        <span class="countdown__num ui-data">{{ pad(remaining().minutes) }}</span>
        <span class="countdown__txt">min</span>
      </div>
      <div class="countdown__unit">
        <span class="countdown__num ui-data">{{ pad(remaining().seconds) }}</span>
        <span class="countdown__txt">seg</span>
      </div>
    </div>
  `,
  styleUrl: './countdown.component.scss',
})
export class CountdownComponent implements OnInit, OnDestroy {
  /** ISO date string of the target moment. */
  @Input({ required: true }) target!: string;
  /** Optional label above the grid. */
  @Input() label?: string;

  protected readonly remaining = signal<Remaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  private intervalId?: number;
  private readonly platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    this.tick();
    if (isPlatformBrowser(this.platformId)) {
      this.intervalId = window.setInterval(() => this.tick(), 1000);
    }
  }

  ngOnDestroy(): void {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  protected pad(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  private tick(): void {
    const target = new Date(this.target).getTime();
    const now = Date.now();
    const diff = Math.max(0, target - now);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    this.remaining.set({ days, hours, minutes, seconds });
  }
}
