import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {


  selectedOption: string = 'candidate'; // Default selected option
  roles: string[] = [
    'UI/UX Designer',
    'Data Analyst',
    'Accountant',
    'Brand Manager',
    'Front end developer',
    'Interior designer',
    'Marketing head',
    'Sales executive',
    'Customer support',
    'Architect',
    'AWS',
    'Delivery support'
  ]

  constructor() { }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      console.log('Selected file:', file.name);
    }
  }

  onSubmit(): void {
    console.log('Form submitted for:', this.selectedOption);
    // Add form submission logic here
  }


}
