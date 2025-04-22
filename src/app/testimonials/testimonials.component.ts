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
      text: `"My journey in recruitment has been an incredibly fulfilling one, shaped by dedication, expertise, and an unwavering commitment to excellence. I began my career as a recruiter and have had the privilege of leading recruitment teams at large, renowned companies across diverse industries, including airlines, healthcare, e-commerce, and retail. My experience spans high-impact hiring initiatives, including scaling recruitment efforts to over 1,000 hires per quarter, while managing and nurturing high-performing teams.
I’ve always strived to align talent acquisition strategies with business goals, using data insights and market intelligence to optimize processes and deliver innovative solutions. I take pride in fostering collaborative work environments that enable my teams to consistently achieve outstanding results. Today, I am proud to have established Twinpacs, where I work alongside an incredibly talented team to continue shaping the future of recruitment. My journey is a reflection of my vision, humility, and my commitment to adding value in every step of the process."
`,
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
