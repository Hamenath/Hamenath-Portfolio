'use client';

import type Lenis from 'lenis';

let lenisInstance: Lenis | null = null;

export function setLenisInstance(instance: Lenis | null): void {
  lenisInstance = instance;
  if (typeof window !== 'undefined') {
    (window as unknown as { __portfolioLenis?: Lenis | null }).__portfolioLenis = instance;
  }
}

export function getLenisInstance(): Lenis | null {
  if (lenisInstance) return lenisInstance;
  if (typeof window !== 'undefined') {
    return (window as unknown as { __portfolioLenis?: Lenis | null }).__portfolioLenis ?? null;
  }
  return null;
}

export interface ScrollToOptions {
  offset?: number;
  duration?: number;
  easing?: (t: number) => number;
}

export function scrollToSection(
  target: string | HTMLElement | number,
  options?: ScrollToOptions
): void {
  const lenis = getLenisInstance();
  const defaultEasing = (t: number): number => Math.min(1, 1.001 - Math.pow(2, -10 * t));
  const offset = options?.offset ?? -80;
  const duration = options?.duration ?? 1.25;
  const easing = options?.easing ?? defaultEasing;

  if (lenis) {
    lenis.scrollTo(target, {
      offset,
      duration,
      easing,
    });
  } else if (typeof window !== 'undefined') {
    if (typeof target === 'number') {
      window.scrollTo({ top: target, behavior: 'smooth' });
    } else {
      const el: HTMLElement | null =
        typeof target === 'string'
          ? (document.querySelector(target.startsWith('#') ? target : `#${target}`) as HTMLElement | null)
          : target;
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY + offset;
        window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
      }
    }
  }
}

export function pauseScroll(): void {
  const lenis = getLenisInstance();
  if (lenis) {
    lenis.stop();
  }
}

export function resumeScroll(): void {
  const lenis = getLenisInstance();
  if (lenis) {
    lenis.start();
  }
}
