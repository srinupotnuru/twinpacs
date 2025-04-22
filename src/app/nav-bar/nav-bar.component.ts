import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  isMobile = false;
  menuOpen = false;
  backgroundColor = 'white'; // Initial color
  scrolled = false;

  navItems = [
    { text: 'Home', route: '/', icon: 'ph-browser' },
    { text: 'Services', route: '/services', icon: 'ph-stack' },
    { text: 'Industries', route: '/industries', icon: 'ph-factory' },
    { text: 'Careers', route: '/careers', icon: 'ph-suitcase' },
    { text: 'Get Connected', route: '/contact', icon: 'ph-phone' }
  ];

  constructor(private router: Router) {
    this.checkScreenSize();
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.backgroundColor = 'white'; // Reset when navigating
      }
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 0;
  }

  @HostListener('window:resize', [])
  checkScreenSize() {
    this.isMobile = window.innerWidth < 768;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  scrollToSection(route: string) {
    this.router.navigate([route]);
  }
}
