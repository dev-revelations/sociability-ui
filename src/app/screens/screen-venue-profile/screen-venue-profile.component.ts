import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { Photo } from 'src/app/api/photo.data';
import { Review } from 'src/app/api/review.data';

@Component({
  selector: 'app-screen-venue-profile',
  templateUrl: './screen-venue-profile.component.html',
  styleUrls: ['./screen-venue-profile.component.scss'],
})
export class ScreenVenueProfileComponent implements OnInit {

  photos: Array<Photo>;
  reviews: Array<Review>;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.loadPhotos();
    this.loadReviews();
  }

  loadPhotos() {
    const observable = this.api.getPhotos()
      .subscribe(res => {
        this.photos = res;
        observable.unsubscribe();
      });
  }

  loadReviews() {
    const observable = this.api.getReviews()
      .subscribe(res => {
        this.reviews = res;
        observable.unsubscribe();
      });
  }

}
