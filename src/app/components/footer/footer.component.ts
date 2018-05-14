import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {
  emailForm: FormGroup;
  email: FormControl;

  onSubmit() {
    if (this.emailForm.valid) {
      console.log('valid email');
    }
  }
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.emailForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
    });
  }
}