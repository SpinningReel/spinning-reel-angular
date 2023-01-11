import { Component, OnInit } from '@angular/core';
import { Amenity } from 'src/app/model/amenity.model';
import { imageSrcAlt } from 'src/app/model/image-src-alt.model';

@Component({
  selector: 'app-chalets',
  templateUrl: './chalets.component.html',
  styleUrls: ['./chalets.component.scss']
})
export class ChaletsComponent implements OnInit {
  public features: Amenity[] = [
    { src: "../../../assets/img/svg/features/home.svg", detail: "Fully equipped (Comfortably but simply furnished)" },
    { src: "../../../assets/img/svg/features/wifi.svg", detail: "Uncapped Wifi" },
    { src: "../../../assets/img/svg/features/tv.svg", detail: "TV with android smart box (Netflix included)" },
    { src: "../../../assets/img/svg/features/bed.svg", detail: "3 Bedrooms / Sleeping areas (max 6 people)" },
    { src: "../../../assets/img/svg/features/shower.svg", detail: "2 Bathrooms" },
    { src: "../../../assets/img/svg/features/lounge.svg", detail: "Lounge / dining area" },
    { src: "../../../assets/img/svg/features/cutlery.svg", detail: "Kitchen" },
    { src: "../../../assets/img/svg/features/braai.svg", detail: "Braai area" },
    { src: "../../../assets/img/svg/features/blanket.svg", detail: "Bedding is included" },
    { src: "../../../assets/img/svg/features/amenities.svg", detail: "You need to bring your own towels, toiletries, matches for the gas stove etc" },
  ];

  public imageSrcList: imageSrcAlt[] = [
    { src: "../../../assets/img/log-cabin/log-cabin-bedroom-1.jpg", alt: "Log chalet image" },
    { src: "../../../assets/img/log-cabin/log-cabin-bedroom-2.jpg", alt: "Log chalet image" },
    { src: "../../../assets/img/log-cabin/log-cabin-bedroom-main.jpg", alt: "Log chalet image" },
    { src: "../../../assets/img/log-cabin/log-cabin-bedroom-main-veranda.jpg", alt: "Log chalet image" },
    { src: "../../../assets/img/log-cabin/log-cabin-coffee-spot.jpg", alt: "Log chalet image" },
    { src: "../../../assets/img/log-cabin/log-cabin-coridoor.jpg", alt: "Log chalet image" },
    { src: "../../../assets/img/log-cabin/log-cabin-entrance.jpg", alt: "Log chalet image" },
    { src: "../../../assets/img/log-cabin/log-cabin-entry-passage.jpg", alt: "Log chalet image" },
    { src: "../../../assets/img/log-cabin/log-cabin-kitchen.jpg", alt: "Log chalet image" },
    { src: "../../../assets/img/log-cabin/log-cabin-lounge.jpg", alt: "Log chalet image" },
    { src: "../../../assets/img/log-cabin/log-cabin-veranda.jpg", alt: "Log chalet image" },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
