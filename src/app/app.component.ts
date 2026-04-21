import { Component, inject } from '@angular/core';
import { AnalyticsService } from './services/analytics.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: false
})
export class AppComponent {
    private readonly analyticsService = inject(AnalyticsService);

    constructor() {
        this.analyticsService.initialize();
    }
}
