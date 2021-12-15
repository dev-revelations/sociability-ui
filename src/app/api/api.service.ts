import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from '../config.service';
import { Photo } from './photo.data';
import { Review } from './review.data';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient, private config: ConfigService) { }

  public getPhotos(): Observable<Photo> {
    return this.httpClient.get<Photo>(this.config.server + this.config.routePhotos);
  }

  public getReviews(): Observable<Review> {
    return this.httpClient.get<Review>(this.config.server + this.config.routeReviews);
  }
}
