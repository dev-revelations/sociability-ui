import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { Photo } from '../dto/photo.dto';
import { Review } from '../dto/review.dto';

@Injectable({
  providedIn: 'root'
})
export class CapacitorStorageService {

  private readonly KEY_PHOTOS = "KEY_PHOTOS";
  private readonly KEY_REVIEWS = "KEY_REVIEWS";

  constructor() { }

  async setPhotos(photos: Array<Photo>): Promise<void> {
    const json = JSON.stringify(photos);
    await Storage.set({
      key: this.KEY_PHOTOS,
      value: json
    });
  }

  async setReviews(reviews: Array<Review>): Promise<void> {
    const json = JSON.stringify(reviews);
    await Storage.set({
      key: this.KEY_REVIEWS,
      value: json
    });
  }

  async getPhotos(): Promise<Array<Photo>> {
    const result = await Storage.get({ key: this.KEY_PHOTOS });
    if (!(result.value === undefined || result.value === null) && result.value.length > 0) {
      return JSON.parse(result.value);
    }
    return null;
  }

  async getReviews(): Promise<Array<Review>> {
    const result = await Storage.get({ key: this.KEY_REVIEWS });
    if (!(result.value === undefined || result.value === null) && result.value.length > 0) {
      return JSON.parse(result.value);
    }
    return null;
  }

}
