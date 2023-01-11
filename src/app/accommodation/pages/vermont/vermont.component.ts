import { Component, OnInit } from '@angular/core';
import { Amenity } from 'src/app/model/amenity.model';
import { imageSrcAlt } from 'src/app/model/image-src-alt.model';

@Component({
  selector: 'app-vermont',
  templateUrl: './vermont.component.html',
  styleUrls: ['./vermont.component.scss']
})
export class VermontComponent implements OnInit {
  public features: Amenity[] = [
    { src: "../../../assets/img/svg/features/home.svg", detail: "Fully equipped (Comfortably but simply furnished)" },
    { src: "../../../assets/img/svg/features/wifi.svg", detail: "Uncapped Wifi" },
    { src: "../../../assets/img/svg/features/tv.svg", detail: "TV with android smart box (Netflix included)" },
    { src: "../../../assets/img/svg/features/bed.svg", detail: "3 Bedrooms (max 6 people)" },
    { src: "../../../assets/img/svg/features/shower.svg", detail: "2 Bathrooms" },
    { src: "../../../assets/img/svg/features/lounge.svg", detail: "Lounge / dining area" },
    { src: "../../../assets/img/svg/features/cutlery.svg", detail: "Kitchen" },
    { src: "../../../assets/img/svg/features/braai.svg", detail: "Braai area" },
    { src: "../../../assets/img/svg/features/blanket.svg", detail: "Bedding is included" },
    { src: "../../../assets/img/svg/features/amenities.svg", detail: "You need to bring your own towels, toiletries, matches for the gas stove etc" },
  ];

  public imageSrcList: imageSrcAlt[] = [
    { src: "../../../assets/img/vermont/vermont-bedroom-first.jpg", alt: "Vermont chalet image" },
    { src: "../../../assets/img/vermont/vermont-bedroom-first-angled.jpg", alt: "Vermont chalet image" },
    { src: "../../../assets/img/vermont/vermont-bedroom-first-view.jpg", alt: "Vermont chalet image" },
    { src: "../../../assets/img/vermont/vermont-bathroom-first.jpg", alt: "Vermont chalet image" },
    { src: "../../../assets/img/vermont/vermont-veranda-first.jpg", alt: "Vermont chalet image" },
    { src: "../../../assets/img/vermont/vermont-bathroom-ground.jpg", alt: "Vermont chalet image" },
    { src: "../../../assets/img/vermont/vermont-bedroom-ground-1.jpg", alt: "Vermont chalet image" },
    { src: "../../../assets/img/vermont/vermont-bedroom-ground-2.jpg", alt: "Vermont chalet image" },
    { src: "../../../assets/img/vermont/vermont-bedroom-2.jpg", alt: "Vermont chalet image" },
    { src: "../../../assets/img/vermont/vermont-kitchen.jpg", alt: "Vermont chalet image" },
    { src: "../../../assets/img/vermont/vermont-lounge.jpg", alt: "Vermont chalet image" },
    { src: "../../../assets/img/vermont/vermont-lounge-dining.jpg", alt: "Vermont chalet image" },
    { src: "../../../assets/img/vermont/vermont-lounge-first.jpg", alt: "Vermont chalet image" },
    { src: "../../../assets/img/vermont/vermont-entrance-walkway.jpg", alt: "Vermont chalet image" },
    { src: "../../../assets/img/vermont/vermont-aerial.jpg", alt: "Vermont chalet image" },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
