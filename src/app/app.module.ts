import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { AboutComponent } from './about/about.component';
import { AttractionsComponent } from './attractions/attractions.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FeatureComponent } from './feature/feature.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { BookingComponent } from './booking/booking.component';
import { AccommodationGridComponent } from './accommodation/accommodation-grid/accommodation-grid.component';
import { BedAndBreakfastComponent } from './accommodation/pages/bed-and-breakfast/bed-and-breakfast.component';
import { ChaletsComponent } from './accommodation/pages/chalets/chalets.component';
import { BeachCottagesComponent } from './accommodation/pages/beach-cottages/beach-cottages.component';
import { AccommodationOptionMediumComponent } from './accommodation/accommodation-options/accommodation-option-medium/accommodation-option-medium.component';
import { AccommodationOptionLargeComponent } from './accommodation/accommodation-options/accommodation-option-large/accommodation-option-large.component';
import { AccommodationOptionSmallComponent } from './accommodation/accommodation-options/accommodation-option-small/accommodation-option-small.component';
import { AmenitiesComponent } from './accommodation/pages/components/amenities/amenities.component';
import { AccommodationCarouselComponent } from './accommodation/pages/components/accommodation-carousel/accommodation-carousel.component';
import { AccommodationOptionLargeGridComponent } from './accommodation/accommodation-options/accommodation-option-large-grid/accommodation-option-large-grid.component';
import { VermontComponent } from './accommodation/pages/vermont/vermont.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderBarComponent,
    AccommodationComponent,
    AboutComponent,
    AttractionsComponent,
    TestimonialsComponent,
    FeatureComponent,
    FooterComponent,
    ContactComponent,
    BookingComponent,
    AccommodationGridComponent,
    BedAndBreakfastComponent,
    ChaletsComponent,
    BeachCottagesComponent,
    AccommodationOptionLargeComponent,
    AccommodationOptionMediumComponent,
    AccommodationOptionSmallComponent,
    AmenitiesComponent,
    AccommodationCarouselComponent,
    AccommodationOptionLargeGridComponent,
    VermontComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
