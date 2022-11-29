import { Component, OnInit } from '@angular/core';
import { Amenity } from 'src/app/model/amenity.model';
import { imageSrcAlt } from 'src/app/model/image-src-alt.model';

@Component({
  selector: 'app-beach-cottages',
  templateUrl: './beach-cottages.component.html',
  styleUrls: ['./beach-cottages.component.scss']
})
export class BeachCottagesComponent implements OnInit {
  public features: Amenity[] = [
    { src: "../../../assets/img/svg/features/tv.svg", detail: "TV with DSTV (B&B bouquet)" },
    { src: "../../../assets/img/svg/features/bed.svg", detail: "2 Bedrooms (sleeps 6 max)" },
    { src: "../../../assets/img/svg/features/shower.svg", detail: "Bathroom" },
    { src: "../../../assets/img/svg/features/lounge.svg", detail: "Lounge / dining area" },
    { src: "../../../assets/img/svg/features/cutlery.svg", detail: "Kitchen" },
    { src: "../../../assets/img/svg/features/braai.svg", detail: "Braai area" },
    { src: "../../../assets/img/svg/features/blanket.svg", detail: "Bedding is included" },
    { src: "../../../assets/img/svg/features/amenities.svg", detail: "You need to bring your own towels, toiletries, matches for the gas stove etc" },
    { src: "../../../assets/img/svg/features/tennis.svg", detail: "Tennis court on the premises" },
    { src: "../../../assets/img/svg/features/golf.svg", detail: "Close to golf course" },
  ];

  public imageSrcList: imageSrcAlt[] = [
    { src: "../../../assets/img/cottage/cottage-bedroom-1.jpg", alt: "Bedroom" },
    { src: "../../../assets/img/cottage/cottage-bedroom-1.jpg", alt: "Bedroom" },
    { src: "../../../assets/img/cottage/cottage-bedroom-1.jpg", alt: "Bedroom" },
    { src: "../../../assets/img/cottage/cottage-bedroom-1.jpg", alt: "Bedroom" },
    { src: "../../../assets/img/cottage/cottage-bedroom-1.jpg", alt: "Bedroom" },
    { src: "../../../assets/img/cottage/cottage-bedroom-1.jpg", alt: "Bedroom" },
    { src: "../../../assets/img/cottage/cottage-bedroom-1.jpg", alt: "Bedroom" },
    { src: "../../../assets/img/cottage/cottage-bedroom-2.jpg", alt: "Bedroom" },
    { src: "../../../assets/img/cottage/cottage-bedroom-3.jpg", alt: "Bedroom" },
    { src: "../../../assets/img/cottage/cottage-driveway.jpg", alt: "Bedroom" },
    { src: "../../../assets/img/cottage/cottage-entrance.jpg", alt: "Bedroom" },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}