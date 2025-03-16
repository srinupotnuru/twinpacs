import { Component } from '@angular/core';

@Component({
  selector: 'app-industries-covered',
  templateUrl: './industries-covered.component.html',
  styleUrls: ['./industries-covered.component.scss']
})
export class IndustriesCoveredComponent {
  industries = [
    { name: 'Communications, Media & Entertainment', icon: 'ph-film-slate' },
    { name: 'Banking & Financial Services', icon: 'ph-bank' },
    { name: 'Travel, Transportation,Hospitality & Logistics', icon: 'ph-truck' },
    { name: 'Retail & Fast Moving Consumer Goods', icon: 'ph-shopping-cart-simple' },
    { name: 'Healthcare & Insurance', icon: 'ph-heartbeat' },
    { name: 'Shared Services and BPO', icon: 'ph-info' },
    { name: 'Information Technology', icon: 'ph-brain' },
    { name: "Manufacturing and Engineering", icon: "ph-factory" },
  ];
}
