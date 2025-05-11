import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hirings',
  templateUrl: './hirings.component.html',
  styleUrls: ['./hirings.component.scss']
})
export class HiringsComponent {

  constructor(private router: Router) { }

  navigateTo = () => {
    this.router.navigate(['/contact'])
  }


  jobsToShow = 6;

  jobListings = [
    {
      title: 'Product Designer',
      description: 'We are looking for a mid-level product designer to join our team.',
      jobType: 'Full time',
      location: 'Malaysia',
      company: 'Amazon Inc',
    },
    {
      title: 'Ux Designer',
      description: 'We are looking for a mid-level product designer to join our team.',
      jobType: 'Full time',
      location: 'Malaysia',
      company: 'Amazon Inc',
    },
    {
      title: 'Engineering Manager',
      description: 'We are looking for a mid-level product designer to join our team.',
      jobType: 'Full time',
      location: 'Malaysia',
      company: 'Amazon Inc',
    },
    {
      title: 'Frontend Developer',
      description: 'We are looking for a mid-level product designer to join our team.',
      jobType: 'Full time',
      location: 'Malaysia',
      company: 'Amazon Inc',
    },
    {
      title: 'Product Designer',
      description: 'We are looking for a mid-level product designer to join our team.',
      jobType: 'Full time',
      location: 'Malaysia',
      company: 'Amazon Inc',
    },
    {
      title: 'Ux Designer',
      description: 'We are looking for a mid-level product designer to join our team.',
      jobType: 'Full time',
      location: 'Malaysia',
      company: 'Amazon Inc',
    },
    {
      title: 'Product Designer',
      description: 'We are looking for a mid-level product designer to join our team.',
      jobType: 'Full time',
      location: 'Malaysia',
      company: 'Amazon Inc',
    },
    {
      title: 'Ux Designer',
      description: 'We are looking for a mid-level product designer to join our team.',
      jobType: 'Full time',
      location: 'Malaysia',
      company: 'Amazon Inc',
    },
    {
      title: 'Product Designer',
      description: 'We are looking for a mid-level product designer to join our team.',
      jobType: 'Full time',
      location: 'Malaysia',
      company: 'Amazon Inc',
    },
    {
      title: 'Ux Designer',
      description: 'We are looking for a mid-level product designer to join our team.',
      jobType: 'Full time',
      location: 'Malaysia',
      company: 'Amazon Inc',
    }
  ];

}
