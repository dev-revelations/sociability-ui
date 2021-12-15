import { Component, Input, OnInit } from '@angular/core';
import { Review } from 'src/app/dto/review.dto';

@Component({
  selector: 'app-section-reviews',
  templateUrl: './section-reviews.component.html',
  styleUrls: ['./section-reviews.component.scss'],
})
export class SectionReviewsComponent implements OnInit {

  @Input()
  data: Array<Review>;

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 2,
    speed: 400,
    freeMode: true,
    loop: true,
    spaceBetween: 100,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true
    }
  };

  constructor() { }

  ngOnInit() { }

}
