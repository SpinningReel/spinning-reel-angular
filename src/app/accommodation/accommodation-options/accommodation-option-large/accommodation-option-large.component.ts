import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accommodation-option-large',
  templateUrl: './accommodation-option-large.component.html',
  styleUrls: ['./accommodation-option-large.component.scss']
})
export class AccommodationOptionLargeComponent implements OnInit {

  @Input()
  backgroundImgSource: string | undefined;

  @Input()
  accommodationTitle: string | undefined;

  @Input()
  accommodationDescription: string | undefined;

  @Input()
  routerLinkPath: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
