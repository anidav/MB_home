import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logos',
  templateUrl: './logos.component.html',
  styleUrls: ['./logos.component.scss']
})
export class LogosComponent implements OnInit {
    public logoItems: Array<any> = [
        {
          name: 'Banner design',
          icon: 'Presentation.jpg',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          name: 'Landing page',
          icon: 'Presentation.jpg',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          name: 'Marketing compeign optimization',
          icon: 'Presentation.jpg',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
    ];

  constructor() { }

  ngOnInit() {
  }

}