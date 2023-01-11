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
    { src: "../../../assets/img/svg/features/home.svg", detail: "Fully equipped (Comfortably but simply furnished)" },
    { src: "../../../assets/img/svg/features/wifi.svg", detail: "Uncapped Wifi" },
    { src: "../../../assets/img/svg/features/tv.svg", detail: "TV with android smart box (Netflix included)" },
    { src: "../../../assets/img/svg/features/bed.svg", detail: "2 Bedrooms (second room has single bunk beds) with two single beds in the lounge (max 6 people)" },
    { src: "../../../assets/img/svg/features/shower.svg", detail: "1 Bathroom" },
    { src: "../../../assets/img/svg/features/lounge.svg", detail: "Lounge / dining area" },
    { src: "../../../assets/img/svg/features/cutlery.svg", detail: "Kitchen" },
    { src: "../../../assets/img/svg/features/braai.svg", detail: "Braai area" },
    { src: "../../../assets/img/svg/features/blanket.svg", detail: "Bedding is included" },
    { src: "../../../assets/img/svg/features/amenities.svg", detail: "You need to bring your own towels, toiletries, matches for the gas stove etc" },
  ];

  public imageSrcList: imageSrcAlt[] = [
    { src: "../../../assets/img/cottage/cottage-front-view.jpg", alt: "Beach cottage image" },
    { src: "../../../assets/img/cottage/cottage-fullview.jpg", alt: "Beach cottage image" },
    { src: "../../../assets/img/cottage/cottage-kitchen.jpg", alt: "Beach cottage image" },
    { src: "../../../assets/img/cottage/cottage-bedroom-1.jpg", alt: "Beach cottage image" },
    { src: "../../../assets/img/cottage/cottage-bedroom-2.jpg", alt: "Beach cottage image" },
    { src: "../../../assets/img/cottage/cottage-bedroom-3.jpg", alt: "Beach cottage image" },
    { src: "../../../assets/img/cottage/cottage-driveway.jpg", alt: "Beach cottage image" },
    { src: "../../../assets/img/cottage/cottage-entrance.jpg", alt: "Beach cottage image" },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}