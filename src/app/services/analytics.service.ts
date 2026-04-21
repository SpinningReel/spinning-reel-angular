import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { environment } from '../../environments/environment';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    clarity: (...args: unknown[]) => void;
  }
}

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  private initialized = false;

  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {}

  initialize(): void {
    if (this.initialized) {
      return;
    }

    const gaMeasurementId = environment.analytics.gaMeasurementId?.trim();
    const clarityProjectId = environment.analytics.clarityProjectId?.trim();

    if (gaMeasurementId) {
      this.loadGoogleAnalytics(gaMeasurementId);
      this.trackInitialTrafficSource();
      this.trackSpaPageViews();
    }

    if (clarityProjectId) {
      this.loadMicrosoftClarity(clarityProjectId);
    }

    this.initialized = true;
  }

  private loadGoogleAnalytics(measurementId: string): void {
    const existingScript = this.document.getElementById('ga4-js');
    if (!existingScript) {
      const script = this.document.createElement('script');
      script.id = 'ga4-js';
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      this.document.head.appendChild(script);
    }

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function (...args: unknown[]) {
      window.dataLayer.push(args);
    };

    window.gtag('js', new Date());
    window.gtag('config', measurementId, { send_page_view: false });
  }

  private trackSpaPageViews(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        const navigationEvent = event as NavigationEnd;
        if (!window.gtag) {
          return;
        }

        window.gtag('event', 'page_view', {
          page_path: navigationEvent.urlAfterRedirects,
          page_location: this.document.location.href,
          page_title: this.document.title
        });
      });
  }

  private trackInitialTrafficSource(): void {
    const sessionKey = 'traffic-source-logged';
    if (sessionStorage.getItem(sessionKey) || !window.gtag) {
      return;
    }

    const referrer = this.document.referrer.toLowerCase();
    const isGoogleReferrer = /https?:\/\/(www\.)?google\./.test(referrer);

    if (isGoogleReferrer) {
      window.gtag('event', 'traffic_source_google', {
        source: 'google',
        medium: 'organic',
        referrer: this.document.referrer
      });
    }

    sessionStorage.setItem(sessionKey, '1');
  }

  private loadMicrosoftClarity(projectId: string): void {
    const existingScript = this.document.getElementById('clarity-js');
    if (existingScript) {
      return;
    }

    const clarityQueue: unknown[][] = [];
    window.clarity = window.clarity || function (...args: unknown[]) {
      clarityQueue.push(args);
    };

    const script = this.document.createElement('script');
    script.async = true;
    script.src = `https://www.clarity.ms/tag/${projectId}`;
    script.id = 'clarity-js';

    const firstScriptTag = this.document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(script, firstScriptTag);
  }
}
