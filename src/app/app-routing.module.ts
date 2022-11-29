import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { BeachCottagesComponent } from './accommodation/pages/beach-cottages/beach-cottages.component';
import { BedAndBreakfastComponent } from './accommodation/pages/bed-and-breakfast/bed-and-breakfast.component';
import { ChaletsComponent } from './accommodation/pages/chalets/chalets.component';
import { VermontComponent } from './accommodation/pages/vermont/vermont.component';
import { BookingComponent } from './booking/booking.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'accommodation', component: AccommodationComponent },
  { path: 'accommodation/beach-cottages', component: BeachCottagesComponent },
  { path: 'accommodation/log-chalets', component: ChaletsComponent },
  { path: 'accommodation/vermont-chalet', component: VermontComponent },
  { path: 'accommodation/bed-and-breakfast', component: BedAndBreakfastComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
