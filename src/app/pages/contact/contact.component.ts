import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  successMessage: string = '';

  onSubmit(form: NgForm) {
    if (form.invalid) {
      this.successMessage = '';
      return;
    }

    // Show success message
    this.successMessage = "Your message has been sent successfully!";

    // Reset form and validation state
    form.resetForm();
  }

}
