import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: false
})
export class FooterComponent implements OnInit {
  bookingUrl: string = environment.bookingUrl;

  @Input()
  isEmailReady: boolean = false;
  @Input()
  isContactPage: boolean = false;
  @Input()
  isHomePage: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
