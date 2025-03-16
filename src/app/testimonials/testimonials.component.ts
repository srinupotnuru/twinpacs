import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  showFullText: boolean = false;  // Controls the visibility of additional text

  // Toggles the text visibility
  toggleText(): void {
    this.showFullText = !this.showFullText;
  }


  testimonials = [
    {
      text: `"My Journey In Recruitment Has Been An Incredibly Fulfilling One, Shaped By Dedication, Expertise, And An Unwavering Commitment To Excellence. I Began My Career As A Recruiter And Have Had The Privilege Of Leading Recruitment Teams At Large, Renowned Companies Across Diverse Industries, Including Airlines, Healthcare, E-Commerce, And Retail. My Experience Spans High-Impact Hiring Initiatives, Including Scaling Recruitment Efforts To Over 1,000 Hires Per Quarter, While Managing And Nurturing High-Performing Teams."`,
      author: "Parveen",
      designation: "Founder"

    },
    {
      text: `"With over 20 years of experience in end-to-end recruitment—ranging from sourcing to sales—I have had the privilege of heading staffing operations across India and Europe for a leading IT services and solutions provider. Over the years, I’ve honed my skills in building high-performing teams, managing diverse talent pools, and driving recruitment strategies that align with business objectives.Being a polyglot speaker, I’ve had the unique opportunity to connect with clients and candidates from different cultures and regions, and this global perspective has been invaluable in my career.Now, joining hands with my former colleagues at TwinPacs, I am excited to leverage our collective expertise to provide innovative, tailored recruitment solutions. TwinPacs isn’t just a company—it’s a vision to bring together the best talent and businesses, bridging gaps across industries and regions with precision and care. I’m thrilled to embark on this new chapter, ensuring success for both employers and job seekers alike."`,
      author: "Krishna",
      designation: "Operations Director, TwinPacs"
    }
  ];


  currentTestimonial = 0;

  showTestimonial(index: number) {
    this.currentTestimonial = index;
  }

}
