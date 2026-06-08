import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  Input,
  NgZone,
  OnDestroy,
  PLATFORM_ID,
  QueryList,
  ViewChild,
  ViewChildren,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { Sede } from '../../../shared/sedes';

/**
 * Cinematic full-viewport scroll gallery for the place spaces.
 *
 * Each space is its own ~100vh scene with a full-bleed background image,
 * editorial typography overlay, and a persistent left rail that tracks
 * the current chapter via IntersectionObserver.
 */
@Component({
  selector: 'app-spaces-gallery',
  standalone: true,
  imports: [ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './spaces-gallery.component.html',
  styleUrl: './spaces-gallery.component.scss',
})
export class SpacesGalleryComponent implements AfterViewInit, OnDestroy {
  @Input() sede?: Sede;

  @ViewChildren('scene', { read: ElementRef })
  private sceneEls!: QueryList<ElementRef<HTMLElement>>;

  @ViewChild('scenesWrap', { read: ElementRef })
  private scenesWrap?: ElementRef<HTMLElement>;

  /** Index of the currently most-visible scene. */
  protected readonly activeIndex = signal(0);
  /** 0–1 progress through the entire scenes block (for the rail track). */
  protected readonly progress = signal(0);
  /** Whether the rail should be visible (only while scenes block is in view). */
  protected readonly railVisible = signal(false);

  private observer?: IntersectionObserver;
  private wrapObserver?: IntersectionObserver;
  private onScroll?: () => void;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private zone: NgZone,
  ) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.initObservers();
    this.sceneEls.changes.subscribe(() => this.initObservers());
  }

  private initObservers(): void {
    this.observer?.disconnect();
    this.observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          const el = visible[0].target as HTMLElement;
          const idx = Number(el.dataset['idx']);
          if (!Number.isNaN(idx)) this.activeIndex.set(idx);
        }
      },
      { threshold: [0.25, 0.5, 0.75] },
    );

    this.sceneEls.forEach((ref) => this.observer!.observe(ref.nativeElement));

    const wrap = this.scenesWrap?.nativeElement;
    if (wrap && !this.wrapObserver) {
      this.wrapObserver = new IntersectionObserver(
        (entries) => {
          const e = entries[0];
          this.railVisible.set(e.isIntersecting);
        },
        { threshold: 0, rootMargin: '-15% 0px -15% 0px' },
      );
      this.wrapObserver.observe(wrap);
    }

    if (!this.onScroll) {
      this.zone.runOutsideAngular(() => {
        let rafId = 0;
        this.onScroll = () => {
          cancelAnimationFrame(rafId);
          rafId = requestAnimationFrame(() => {
            const wrapEl = this.scenesWrap?.nativeElement;
            if (!wrapEl) return;
            const rect = wrapEl.getBoundingClientRect();
            const viewport = window.innerHeight;
            const total = rect.height - viewport;
            if (total <= 0) return;
            const scrolled = Math.min(Math.max(-rect.top, 0), total);
            const p = scrolled / total;
            this.zone.run(() => this.progress.set(p));
          });
        };
        window.addEventListener('scroll', this.onScroll, { passive: true });
        this.onScroll();
      });
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.wrapObserver?.disconnect();
    if (this.onScroll) window.removeEventListener('scroll', this.onScroll);
  }
}
