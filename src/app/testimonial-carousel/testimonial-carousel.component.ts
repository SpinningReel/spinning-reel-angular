import {
  Component,
  Input,
  OnInit
} from "@angular/core";
import { imageSrcAlt } from "src/app/model/image-src-alt.model";

@Component({
  selector: 'app-testimonial-carousel',
  templateUrl: './testimonial-carousel.component.html',
  styleUrls: ['./testimonial-carousel.component.scss'],
})
export class TestimonialCarouselComponent implements OnInit {
  @Input()
  testimonials: testimonialCarousel[] = [];
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

    this.testimonials = [];
    this.testimonials.push({
      ratings: new Array(5),
      comments: "\"I have stayed twice at Spinning Reel in the bed and breakfast apartments and both times have been amazing. The rooms are well equipped, clean and very comfortable and the view of the sea is beautiful. The highlights of staying at Spinning Reel are the peaceful environment and nearby beach which is lovely for walks. I recommend this accommodation to anyone coming to Port Alfred. Thank you!\"", 
      person: "Caroline"
    });
    this.testimonials.push({
      ratings: new Array(5),
      comments: "\"We have visited Spinning Reels twice and each time was magical – most definitely my most favourite getaway place – a piece of heaven on earth – loved loved loved it!\"", 
      person: "Melissa Weldrick"
    });
    this.testimonials.push({
      ratings: new Array(3),
      comments: "\"We had an overnight stay at The Spinning Reel B+B Suite this weekend and it was great! The view is beautiful, the suite is clean & the beds are comfy! Thank you!\"",
      person: "Bev & Graham"
    });
    this.testimonials.push({
      ratings: new Array(3),
      comments: "\"My friends and I had the best time, the chalet we stayed in was absolutely fabulous. Spectacular views. Private but not too private. Just perfect. I am recommending it to all my friends. See you soon Spinning Reel!\"",
      person: "Riaan Voster"
    });
    this.testimonials.push({
      ratings: new Array(5),
      comments: "\"We stayed in the B+B, it was absolutely the best. I would recommend Spinning Reel for anyone!\"",
      person: "Jaco & Marize"
    });

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
      this.selectedIndex = this.testimonials.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  onNextClick(): void {
    if (this.selectedIndex === this.testimonials.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }
}

type testimonialCarousel = {
  ratings: number[],
  comments: string,
  person: string
}