import { Component, Input, OnInit } from '@angular/core';
import { Amenity } from 'src/app/model/amenity.model';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-amenities',
    templateUrl: './amenities.component.html',
    styleUrls: ['./amenities.component.scss'],
    standalone: false
})
export class AmenitiesComponent implements OnInit {
  bookingUrl: string = environment.bookingUrl;
  showBookingConfirmation = false;

  @Input()
  isEmailReady: boolean = false;
  
  @Input()
  public amenities!: Amenity[];

  @Input()
  public overview!: string;

  constructor() { }

  ngOnInit(): void {
  }

  onBookNowClick(event: Event): void {
    event.preventDefault();
    this.showBookingConfirmation = true;
  }

  closeBookingConfirmation(): void {
    this.showBookingConfirmation = false;
  }

  confirmBookingRedirect(): void {
    this.showBookingConfirmation = false;
    window.open(this.bookingUrl, '_blank', 'noopener,noreferrer');
  }

}
