import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  readonly server = 'http://sociability-mock-api.herokuapp.com';
  readonly routePhotos = '/photos';
  readonly routeReviews = '/reviews';

  constructor() { }
}
