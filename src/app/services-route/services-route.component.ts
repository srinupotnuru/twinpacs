import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services-route',
  templateUrl: './services-route.component.html',
  styleUrls: ['./services-route.component.scss']
})
export class ServicesRouteComponent {
  constructor(private route: ActivatedRoute) { }
  currentIndex = this.route.snapshot.queryParams['index'] ?? 1;

  changeIndex = (ind: number) => {
    this.currentIndex = ind;
  }
}
