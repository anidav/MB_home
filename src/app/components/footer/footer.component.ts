import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public iconItems: Array<any> = [
    '../assets/photos/facebook.png',
    '../assets/photos/twitter.png',
    '../assets/photos/linkedin.png',
    '../assets/photos/googleplus.png'
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
