import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  selectedForm: string = 'vendor'; // Default selection
  showForm: boolean = false; // Default to hiding form

  toggleForm() {
    this.showForm = this.selectedForm === 'candidate';
  }


}
