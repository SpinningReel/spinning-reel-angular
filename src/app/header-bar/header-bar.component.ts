import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {
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
  click() {
    this.isChecked = false;
  }

  @HostListener('click', ['$event.target'])
  clickTarget() {
    this.isChecked = false;
  }

  @HostListener('document:scroll', ['$event'])
  scroll() {
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
