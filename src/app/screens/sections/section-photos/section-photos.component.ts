import { Component, Input, OnInit } from '@angular/core';
import { Photo } from 'src/app/api/photo.data';

@Component({
  selector: 'app-section-photos',
  templateUrl: './section-photos.component.html',
  styleUrls: ['./section-photos.component.scss'],
})
export class SectionPhotosComponent implements OnInit {

  @Input()
  data: Array<Photo>;

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

  constructor() { }

  ngOnInit() { }

}
