import { Component, OnInit } from '@angular/core';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
  }

  async submit() {
    await this.emailService.sendMailGun();
  }

}
