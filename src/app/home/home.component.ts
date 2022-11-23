import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private portAlfredFlyoverVideo = "https://www.youtube.com/embed/X02XAvyPI-Q";
  public safePortAlfredFlyoverVideo: SafeResourceUrl;

  private spinningReelDetailedVideo = "https://www.youtube.com/embed/k-dqPT8QbOA";
  public safeSpinningReelDetailedVideo: SafeResourceUrl;

  private spinningReelFlyoverVideo = "https://www.youtube.com/embed/Ek3kKTjx0_4";
  public safeSpinningReelFlyoverVideo: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.safeSpinningReelDetailedVideo = this.sanitizer.bypassSecurityTrustResourceUrl(this.spinningReelDetailedVideo);
    this.safeSpinningReelFlyoverVideo = this.sanitizer.bypassSecurityTrustResourceUrl(this.spinningReelFlyoverVideo);
    this.safePortAlfredFlyoverVideo = this.sanitizer.bypassSecurityTrustResourceUrl(this.portAlfredFlyoverVideo);
  }

  ngOnInit(): void {
  }

}
