import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-accommodation',
    templateUrl: './accommodation.component.html',
    styleUrls: ['./accommodation.component.scss'],
    standalone: false
})
export class AccommodationComponent implements OnInit {
  @Input()
  isHomeView: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
