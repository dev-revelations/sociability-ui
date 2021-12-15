import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { ConfigService } from '../config.service';
import { Photo } from '../dto/photo.dto';
import { Review } from '../dto/review.dto';
import { CapacitorStorageService } from '../storage/capacitor-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient,
    private config: ConfigService,
    private storage: CapacitorStorageService
  ) { }

  public getPhotos(): Observable<Array<Photo>> {
    return from(this.storage.getPhotos())
      .pipe(
        concatMap(localResult => {
          if (localResult) {
            return from([localResult]);
          }
          return this.httpClient.get<Array<Photo>>(this.config.server + this.config.routePhotos)
            .pipe(
              concatMap(remoteResult => {
                from(this.storage.setPhotos(remoteResult)).subscribe();
                return from([remoteResult]);
              })
            );
        })
      );
  }

  public getReviews(): Observable<Array<Review>> {
    return from(this.storage.getReviews())
      .pipe(
        concatMap(localResult => {
          if (localResult) {
            return from([localResult]);
          }
          return this.httpClient.get<Array<Review>>(this.config.server + this.config.routeReviews)
            .pipe(
              concatMap(remoteResult => {
                from(this.storage.setReviews(remoteResult)).subscribe();
                return from([remoteResult]);
              })
            );
        })
      );
  }
}
