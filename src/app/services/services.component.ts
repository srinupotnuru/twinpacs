import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  industries = [
    { name: 'Executive Search', icon: 'ph-magnifying-glass' },
    { name: 'Contract to Hire', icon: 'ph-user-circle-gear' },
    { name: 'Permanent', icon: 'ph-meta-logo' },
    { name: 'Client Hiring', icon: 'ph-scroll' },
    { name: 'Bulk Placements', icon: 'ph-users-four' },
    { name: 'Contract', icon: 'ph-files' }
  ];

}
