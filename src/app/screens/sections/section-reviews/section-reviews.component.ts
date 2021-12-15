import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-reviews',
  templateUrl: './section-reviews.component.html',
  styleUrls: ['./section-reviews.component.scss'],
})
export class SectionReviewsComponent implements OnInit {

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 2,
    speed: 400,
    freeMode:true,
    loop: true,
  };

  constructor() { }

  ngOnInit() { }

}
