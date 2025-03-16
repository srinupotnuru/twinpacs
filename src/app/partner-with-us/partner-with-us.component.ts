import { Component } from '@angular/core';

@Component({
  selector: 'app-partner-with-us',
  templateUrl: './partner-with-us.component.html',
  styleUrls: ['./partner-with-us.component.scss']
})
export class PartnerWithUsComponent {

  features = [
    {
      title: 'Tailored IT Solutions',
      image: 'assets/tailored-it.png',
      description:
        'We offer customized technology strategies to meet your unique business needs, from software development and cloud integration to cybersecurity and data management.'
    },
    {
      title: 'Top-Tier Talent',
      image: 'assets/top-tier-talent.png',
      description:
        'Finding the right professionals can be a challenge. Our expert recruitment team connects you with high-quality IT talent who not only have the skills but also fit seamlessly into your company culture.'
    },
    {
      title: 'Innovation & Excellence',
      image: 'assets/innovation.png',
      description:
        'We stay ahead of industry trends, ensuring your technology solutions are always cutting-edge, while our recruitment services ensure you have the right people to implement them.'
    },
    {
      title: 'Scalable & Secure',
      image: 'assets/scalable.png',
      description:
        'Our solutions are designed to grow with your business, keeping you competitive and secure in an ever-changing digital landscape.'
    }
  ];

}
