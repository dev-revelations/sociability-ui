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
    'https://unsplash.com/photos/0uAVsDcyD0M/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjM5NTM1Njcw&force=true&w=640',
    'https://unsplash.com/photos/poI7DelFiVA/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjM5NTM1NTY0&force=true&w=640',
    'https://unsplash.com/photos/SUXcGaSnZyY/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjM5NTM1ODI0&force=true&w=640',
    'https://unsplash.com/photos/GXXYkSwndP4/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjM5NTM1NTU2&force=true&w=640',
    'https://unsplash.com/photos/OFJGlG3sKik/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjM5NTM1NzMz&force=true&w=640',
  ];

  constructor() { }

  ngOnInit() { }

}
