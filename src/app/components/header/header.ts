import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink,CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
 isMobileNavOpen = false;

  toggleMobileNav() {
    this.isMobileNavOpen = !this.isMobileNavOpen;
    document.body.classList.toggle('mobile-nav-active', this.isMobileNavOpen);
    document.body.classList.toggle('scrolled', this.isMobileNavOpen);
  }
}
