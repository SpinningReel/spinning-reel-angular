import {
  Component,
  Input,
  OnInit
} from "@angular/core";
import { imageSrcAlt } from "src/app/model/image-src-alt.model";

@Component({
  selector: 'app-accommodation-carousel',
  templateUrl: './accommodation-carousel.component.html',
  styleUrls: ['./accommodation-carousel.component.scss'],
})
export class AccommodationCarouselComponent implements OnInit {
  @Input()
  images: imageSrcAlt[] = [];
  @Input()
  indicators: boolean = true;
  @Input()
  controls: boolean = true;
  @Input()
  autoSlide: boolean = true;
  @Input()
  slideInterval: number = 6000;

  selectedIndex: number = 0;
  
  ngOnInit() {
    if (this.autoSlide) {
      this.autoSlideImages();
    }
  }

  autoSlideImages(): void {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval)
  }

  selectImage(index: number): void {
    this.selectedIndex = index;
  }

  onPrevClick(): void {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  onNextClick(): void {
    if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }
}
