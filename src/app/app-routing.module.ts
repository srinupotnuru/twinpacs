import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ServicesRouteComponent } from './services-route/services-route.component';
import { IndustriesRouteComponent } from './industries-route/industries-route.component';
import { CareersRouteComponent } from './careers-route/careers-route.component';
import { ContactRouteComponent } from './contact-route/contact-route.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesRouteComponent },
  { path: 'industries', component: IndustriesRouteComponent },
  { path: 'careers', component: CareersRouteComponent },
  { path: 'contact', component: ContactRouteComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })
  ], // 👈 Add useHash: true
  exports: [RouterModule]
})
export class AppRoutingModule { }
