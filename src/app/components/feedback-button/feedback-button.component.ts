import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback-button',
  templateUrl: './feedback-button.component.html',
  styleUrls: ['./feedback-button.component.scss'],
})
export class FeedbackButtonComponent implements OnInit {

  @Input()
  icon: string;

  @Input()
  selected: boolean;

  constructor() { }

  ngOnInit() {}

}
