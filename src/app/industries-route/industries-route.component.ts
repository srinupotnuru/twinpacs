import { Component } from '@angular/core';

@Component({
  selector: 'app-industries-route',
  templateUrl: './industries-route.component.html',
  styleUrls: ['./industries-route.component.scss']
})
export class IndustriesRouteComponent {

  industriesData = [
    {
      name: 'Communication, Media & Entertainment',
      imageUrl: '../../assets/industries/communication.png'
    },
    {
      name: 'Banking & Financial Services',
      imageUrl: 'assets/industries/banking.png'
    },
    {
      name: 'Travel, Transportation,Hospitality & Logistics',
      imageUrl: 'assets/industries/travel.png'
    },
    {
      name: 'Retail & Fast Moving Consumer Goods',
      imageUrl: 'assets/industries/retail.png'
    },
    {
      name: 'Healthcare & Insurance',
      imageUrl: 'assets/industries/health.png'
    },
    {
      name: 'Shared Services and BPO',
      imageUrl: 'assets/industries/shared.png'
    },
    {
      name: 'Information Technology',
      imageUrl: 'assets/industries/information.png'
    }, {
      name: 'Manufacturing and Engineering',
      imageUrl: 'assets/industries/manufacturing.png'
    }
  ];

}
