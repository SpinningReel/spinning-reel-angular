import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accommodation-option-small',
  templateUrl: './accommodation-option-small.component.html',
  styleUrls: ['./accommodation-option-small.component.scss']
})
export class AccommodationOptionSmallComponent implements OnInit {

  @Input()
  backgroundImgSource: string | undefined;

  @Input()
  accommodationTitle: string | undefined;

  @Input()
  routerLinkPath: string | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

}
