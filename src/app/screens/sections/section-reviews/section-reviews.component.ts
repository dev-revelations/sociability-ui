import { Component, Input, OnInit } from '@angular/core';
import { Review } from 'src/app/api/review.data';

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
  };

  constructor() { }

  ngOnInit() { }

}
