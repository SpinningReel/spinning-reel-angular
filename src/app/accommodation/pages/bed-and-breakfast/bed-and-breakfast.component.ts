import { Component, OnInit } from '@angular/core';
import { Amenity } from 'src/app/model/amenity.model';
import { imageSrcAlt } from 'src/app/model/image-src-alt.model';

@Component({
  selector: 'app-bed-and-breakfast',
  templateUrl: './bed-and-breakfast.component.html',
  styleUrls: ['./bed-and-breakfast.component.scss']
})
export class BedAndBreakfastComponent implements OnInit {
  public features: Amenity[] = [
    { src: "../../../assets/img/svg/features/tv.svg", detail: "TV with android smart box (Netflix included)" },
    { src: "../../../assets/img/svg/features/wifi.svg", detail: "Uncapped Wifi" },
    { src: "../../../assets/img/svg/features/bed.svg", detail: "1 Bedroom" },
    { src: "../../../assets/img/svg/features/shower.svg", detail: "Ensuite bathroom" },
    { src: "../../../assets/img/svg/features/cutlery.svg", detail: "Kitchenette" },
    { src: "../../../assets/img/svg/features/home.svg", detail: "Own entrance" },
    { src: "../../../assets/img/svg/features/blanket.svg", detail: "Bedding is included" },
    { src: "../../../assets/img/svg/features/golf.svg", detail: "Close to golf course" },
    { src: "../../../assets/img/svg/features/tennis.svg", detail: "Tennis court on the premises" },
  ];

  public imageSrcList: imageSrcAlt[] = [
    { src: "../../../assets/img/b-and-b/b-and-b-top-bed.jpg", alt: "Bedroom" },
    { src: "../../../assets/img/b-and-b/b-and-b-top-coffee-view.jpg", alt: "Bedroom" },
    { src: "../../../assets/img/b-and-b/b-and-b-top-inward.jpg", alt: "Bedroom" },
    { src: "../../../assets/img/b-and-b/b-and-b-top-kitchen-bathroom.jpg", alt: "Bedroom" },
    { src: "../../../assets/img/b-and-b/b-and-b-top-veranda.jpg", alt: "Bedroom" },
    { src: "../../../assets/img/b-and-b/b-and-b-bottom-bed-inward.jpg", alt: "Bedroom" },
    { src: "../../../assets/img/b-and-b/b-and-b-bottom-bed-view.jpg", alt: "Bedroom" },
    { src: "../../../assets/img/b-and-b/b-and-b-bottom-veranda.jpg", alt: "Bedroom" },
    // { src: "../../../assets/img/b-and-b/b-and-b-bottom-bathroom.jpg", alt: "Bedroom" },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
