import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {
  emailAddress: string;
  @ViewChild('f') form: any;

  onSubmit() {
    if (this.form.valid) {
      console.log('Email submitted!!!');    
      this.form.reset();  
    }
  }
  constructor() {
  }
      
  ngOnInit() {    
  }
}