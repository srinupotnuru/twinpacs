import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutTwinpacsComponent } from './about-twinpacs/about-twinpacs.component';
import { ServicesComponent } from './services/services.component';
import { PartnerWithUsComponent } from './partner-with-us/partner-with-us.component';
import { ItServicesComponent } from './it-services/it-services.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule } from '@angular/forms';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { HiringsComponent } from './hirings/hirings.component';
import { IndustriesCoveredComponent } from './industries-covered/industries-covered.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    NavBarComponent,
    AboutTwinpacsComponent,
    ServicesComponent,
    PartnerWithUsComponent,
    ItServicesComponent,
    ContactFormComponent,
    TestimonialsComponent,
    HiringsComponent,
    IndustriesCoveredComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
