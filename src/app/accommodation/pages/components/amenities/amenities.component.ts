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

  @Input()
  isEmailReady: boolean = false;
  
  @Input()
  public amenities!: Amenity[];

  @Input()
  public overview!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
