import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    standalone: false
})
export class ContactComponent implements OnInit {
  @Input()
  isEmailReady: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
