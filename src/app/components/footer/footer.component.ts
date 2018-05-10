import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public iconItems: Array<any> = [
    '../assets/photos/fb-1.jpg',
    '../assets/photos/twitter-icons-1.jpg'
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
