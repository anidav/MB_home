import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Directive } from '@angular/core';
import { ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {
  myform: FormGroup;

  onSubmit() {
    if (this.myform.valid) {
      console.log('valid email');      
    }
  }
  constructor() {

  }
      
  ngOnInit() {
    this.myform = new FormGroup({
      email: new FormControl (null, [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])
    });
  }
}