import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-screen-frame',
  templateUrl: './screen-frame.component.html',
  styleUrls: ['./screen-frame.component.scss'],
})
export class ScreenFrameComponent implements OnInit {

  @Input()
  coverImage: string;
  @Input()
  coverLable: string;

  constructor() { }

  ngOnInit() {}

}
