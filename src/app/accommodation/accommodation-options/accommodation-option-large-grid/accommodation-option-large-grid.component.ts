import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accommodation-option-large-grid',
  templateUrl: './accommodation-option-large-grid.component.html',
  styleUrls: ['./accommodation-option-large-grid.component.scss']
})
export class AccommodationOptionLargeGridComponent implements OnInit {
  @Input()
  public hasBeachCottages = true;
  @Input()
  public hasLogCabin = true;
  @Input()
  public hasVermont = true;
  @Input()
  public hasBAndB = true;

  constructor() { }

  ngOnInit(): void {
  }

}
