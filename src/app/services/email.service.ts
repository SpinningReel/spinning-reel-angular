import { Injectable } from '@angular/core';
// import * as Mailgun from 'mailgun-js';
// import { MailService } from '@sendgrid/mail';
// import { MessageClient } from 'cloudmailin';
// import {Mailgun} from 'mailgun-js'
import * as nodeMailer from 'nodemailer'

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  //https://www.courier.com/guides/csharp-send-email/

  //https://www.google.com/search?q=angular+send+email&rlz=1C1GCEA_enZA988ZA988&ei=-XakY6zZN62DhbIP0IKmuAk&oq=angular+send+&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgAMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoMCAAQ6gIQtAIQQxgBOhMIABDqAhC0AhCKAxC3AxDlAhgBOg0ILhCPARDqAhC0AhgCOg0IABCPARDqAhC0AhgCOgUIABCRAjoECAAQQzoLCAAQgAQQsQMQgwE6EQguEIAEELEDEIMBEMcBENEDOgsILhCABBCxAxDUAjoICAAQgAQQsQM6BQguEIAEOggILhCABBCxAzoOCC4QgAQQsQMQxwEQrwE6BwgAELEDEEM6DQguELEDEMcBENEDEEM6CwguEIAEEMcBEK8BOgUILhCxAzoICAAQsQMQgwE6CwguEIAEEMcBENEDOg4ILhCDARDUAhCxAxCABDoOCC4QsQMQgwEQxwEQ0QNKBAhBGABKBAhGGAFQpQ9Yijhg3VNoBnABeACAAcMCiAHuJJIBBjItMTMuNJgBAKABAbABFMABAdoBBAgBGAfaAQYIAhABGAo&sclient=gws-wiz-serp#fpstate=ive&vld=cid:ce03618c,vid:p4bnK0qy89w

  // API_KEY = 'YkRiJSUh3gBho3yD3yuyS8xv';
  // USERNAME = '61131b2f948c506d';
  // HOST = 'smtp.cloudmta.net';
  // BASE_URL = 'smtp://61131b2f948c506d:YkRiJSUh3gBho3yD3yuyS8xv@smtp.cloudmta.net:587?starttls=true';
  // SENDGRID_API_KEY = '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'

  constructor() {
  }

  async sendMailGun() {
    // const nodemailer = require("nodemailer");

    // create reusable transporter object using the default SMTP transport
    let transporter = nodeMailer.createTransport({
      host: "mail.spinningreel.co.za",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'bookings@spinningreel.co.za', // generated ethereal user
        pass: 'Spinning@R33l', // generated ethereal password
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: "bookings@spinningreel.co.za", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...













    // const API_KEY = '26ab695b411e8fcfea3e311e03ca51c2-eb38c18d-505ebc5a';
    // const DOMAIN = 'spinningreel.co.za';

    // // const formData = require('form-data');
    // // const Mailgun = require('mailgun.js');

    // const mailgun = new Mailgun({ apiKey: API_KEY, domain: DOMAIN });
    // // const client = mailgun..client({ username: 'api', key: API_KEY });

    // const messageData = {
    //   from: 'Excited User <me@samples.mailgun.org>',
    //   to: ["bookings@spinningreel.co.za"],
    //   subject: 'Hello',
    //   text: 'Testing some Mailgun awesomeness!'
    // } as Mailgun.messages.SendData;

    // mailgun.messages.call(messageData).send(messageData)
    //   .then((res: any) => {
    //     console.log(res);
    //   })
    //   .catch((err: any) => {
    //     console.error(err);
    //   });

    // const formData = require('form-data');
    // const Mailgun = require('mailgun.js');
    // const mailgun = new Mailgun(formData);
    // const mg = mailgun.client({
    //   username: 'api',
    //   key: '26ab695b411e8fcfea3e311e03ca51c2-eb38c18d-505ebc5a',
    // });
    // mg.messages
    //   .create(sandbox57764053f23b405ca981397a48cfd30a.mailgun.org, {
    //     from: "Mailgun Sandbox <postmaster@sandbox57764053f23b405ca981397a48cfd30a.mailgun.org>",
    //     to: ["bookings@spinningreel.co.za"],
    //     subject: "Hello",
    //     text: "Testing some Mailgun awesomness!",
    //   })
    //   .then(msg => console.log(msg)) // logs response data
    //   .catch(err => console.log(err)); // logs any error`;


    // You can see a record of this email in your logs: https://app.mailgun.com/app/logs.

    // You can send up to 300 emails/day from this sandbox server.
    // Next, you should add your own domain so you can send 10000 emails/month for free.
  }

  // async sendMail() {
  //   const mails = new MailService();
  //   // const sgMail = require('@sendgrid/mail')

  //   mails.setApiKey(this.SENDGRID_API_KEY)
  //   const msg = {
  //     to: 'info@spinningreel.co.za', // Change to your recipient
  //     from: 'test@example.com', // Change to your verified sender
  //     subject: 'Sending with SendGrid is Fun',
  //     text: 'and easy to do anywhere, even with Node.js',
  //     html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  //   }
  //   mails.send(msg).then(() => {
  //     console.log('Email sent')
  //   }).catch((error: any) => {
  //     console.error(error)
  //   })
  // }


  // async sendAMail() {
  //   const client = new MessageClient({ username: this.USERNAME, apiKey: this.API_KEY, host: this.HOST, baseURL: this.BASE_URL });
  //   const response = await client.sendMessage({
  //     from: '"Spinning Reel" <info@spinningreel.co.za>',
  //     to: "kelbys@hotmail.co.za",
  //     subject: "Hello from node",
  //     plain: "Hello world?",
  //     html: "<strong>Hello world?</strong>",
  //     headers: { 'x-myheader': 'test header' },
  //     attachments: [
  //       {
  //         "file_name": "pixel.png",
  //         "content": "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP0rdr1HwAFHwKCk87e6gAAAABJRU5ErkJggg==",
  //         "content_type": "image/png"
  //       }
  //     ]
  //   });

  //   console.log(response);
  // }
}
