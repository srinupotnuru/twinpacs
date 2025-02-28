import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  isMobile: boolean = false;
  menuOpen: boolean = false;
  navItems = [
    { text: 'Home', route: '/', icon: 'ph-browser' },
    { text: 'Services', route: '/services', icon: 'ph-stack' },
    { text: 'Industries', route: '/industries', icon: 'ph-factory' },
    { text: 'Careers', route: '/careers', icon: ' ph-suitcase' },
    { text: 'Contact', route: '/contact', icon: 'ph-phone' }
  ];


  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  @HostListener('window:resize', [])
  checkScreenSize() {
    this.isMobile = window.innerWidth < 768;
  }


  constructor(private router: Router) {

    this.checkScreenSize();

  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Set background color based on route
        if (event.url === '/' || event.url === '/home') {
          this.backgroundColor = 'transparent';
        } else {
          this.backgroundColor = 'rgb(254, 251, 249)';
        }
      }
    });
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  backgroundColor: string = 'transparent'; // Default for home


  scrollToSection(route: string) {
    this.router.navigate([route]); // Navigate to the provided route
  }

}
