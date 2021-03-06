import { Component, Input, OnInit } from '@angular/core';
import { Review } from 'src/app/dto/review.dto';

@Component({
  selector: 'app-review-box',
  templateUrl: './review-box.component.html',
  styleUrls: ['./review-box.component.scss'],
})
export class ReviewBoxComponent implements OnInit {

  @Input()
  review: Review;

  constructor() { }

  ngOnInit() { }

}
