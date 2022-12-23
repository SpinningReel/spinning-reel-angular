import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accommodation-option-medium',
  templateUrl: './accommodation-option-medium.component.html',
  styleUrls: ['./accommodation-option-medium.component.scss']
})
export class AccommodationOptionMediumComponent implements OnInit {

  @Input()
  backgroundImgSource: string | undefined;

  @Input()
  accommodationTitle: string | undefined;

  @Input()
  accommodationDescription: string | undefined;

  @Input()
  routerLinkPath: string | undefined;

  @Input()
  isEven: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
