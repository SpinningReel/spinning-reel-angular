import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { BeachCottagesComponent } from './accommodation/pages/beach-cottages/beach-cottages.component';
import { BedAndBreakfastComponent } from './accommodation/pages/bed-and-breakfast/bed-and-breakfast.component';
import { ChaletsComponent } from './accommodation/pages/chalets/chalets.component';
import { VermontComponent } from './accommodation/pages/vermont/vermont.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', title: 'Spinning Reel Beach Cottages', component: HomeComponent },
  { path: 'accommodation', title: 'Spinning Reel Accommodation', component: AccommodationComponent },
  { path: 'accommodation/beach-cottages', title: 'Beach Cottage Accommodation', component: BeachCottagesComponent },
  { path: 'accommodation/log-chalets', title: 'Log Chalet Accommodation', component: ChaletsComponent },
  { path: 'accommodation/vermont-chalet', title: 'Vermont Chalet Accommodation', component: VermontComponent },
  { path: 'accommodation/bed-and-breakfast', title: 'Bed and Breakfast Accommodation', component: BedAndBreakfastComponent },
  { path: 'contact', title: 'Contact Spinning Reel', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', title: 'Spinning Reel Beach Cottages', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
