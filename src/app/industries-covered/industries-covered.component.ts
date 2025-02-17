import { Component } from '@angular/core';

@Component({
  selector: 'app-industries-covered',
  templateUrl: './industries-covered.component.html',
  styleUrls: ['./industries-covered.component.scss']
})
export class IndustriesCoveredComponent {
  industries = [
    { name: 'Executive Search', icon: 'ph-magnifying-glass' },
    { name: 'Contract to Hire', icon: 'ph-user-circle-gear' },
    { name: 'Permanent', icon: 'ph-meta-logo' },
    { name: 'Client Hiring', icon: 'ph-scroll' },
    { name: 'Bulk Placements', icon: 'ph-users-four' },
    { name: 'Contract', icon: 'ph-files' }
  ];
}
