import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-photos',
  templateUrl: './section-photos.component.html',
  styleUrls: ['./section-photos.component.scss'],
})
export class SectionPhotosComponent implements OnInit {

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 3,
    speed: 400,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    }
  };

  readonly photos = [
    '../../../../assets/cafe_restaurant_tables_chairs.jpg',
    '../../../../assets/cafe_restaurant_tables_chairs.jpg',
    '../../../../assets/cafe_restaurant_tables_chairs.jpg',
    '../../../../assets/cafe_restaurant_tables_chairs.jpg',
    '../../../../assets/cafe_restaurant_tables_chairs.jpg',
  ];

  constructor() { }

  ngOnInit() { }

}
