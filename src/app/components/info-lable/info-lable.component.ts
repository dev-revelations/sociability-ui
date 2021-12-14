import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-lable',
  templateUrl: './info-lable.component.html',
  styleUrls: ['./info-lable.component.scss'],
})
export class InfoLableComponent implements OnInit {

  @Input()
  icon: string;

  @Input()
  showMore: boolean;

  constructor() { }

  ngOnInit() {}

}
