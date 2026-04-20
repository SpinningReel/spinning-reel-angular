import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-header-bar',
    templateUrl: './header-bar.component.html',
    styleUrls: ['./header-bar.component.scss'],
    standalone: false
})
export class HeaderBarComponent implements OnInit {
  bookingUrl: string = environment.bookingUrl;

  @Input()
  isEmailReady: boolean = false;

  @Input()
  isSummary: boolean = false;

  @Input()
  isBooking: boolean = false;

  @Input()
  isMainHeader: boolean = true;

  @Input()
  backgroundImgSrc: string = "../../assets/img/Spinning-Reel-Beach.jpg";

  @Input()
  headerSummary: string = "Secluded beach cottages";

  @HostListener('click', ['$event'])
  click(_event: Event) {
    this.isChecked = false;
  }

  @HostListener('click', ['$event.target'])
  clickTarget(_target: EventTarget | null) {
    this.isChecked = false;
  }

  @HostListener('document:scroll', ['$event'])
  scroll(_event: Event) {
    this.isChecked = false;
  }

  isChecked: boolean = false;

  constructor() { }

  navToggle(): void {
    this.isChecked = !this.isChecked;
  }

  ngOnInit(): void {
  }
}
