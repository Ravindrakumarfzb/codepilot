import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  imports: [ReactiveFormsModule],
  templateUrl: './contactus.html',
  styleUrl: './contactus.css',
})
export class Contactus {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      subject: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.contactForm.valid) {
      console.log('Form Submitted', this.contactForm.value);
      alert('Message sent successfully!');
      this.contactForm.reset();
    }
  }
}
