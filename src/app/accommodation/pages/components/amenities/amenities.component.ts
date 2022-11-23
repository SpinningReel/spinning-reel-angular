import { Component, Input, OnInit } from '@angular/core';
import { Amenity } from 'src/app/model/amenity.model';

@Component({
  selector: 'app-amenities',
  templateUrl: './amenities.component.html',
  styleUrls: ['./amenities.component.scss']
})
export class AmenitiesComponent implements OnInit {

  @Input()
  public amenities!: Amenity[];

  @Input()
  public overview!: string;

  @Input()
  public bookingLink!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
