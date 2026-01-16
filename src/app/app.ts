import { Component, inject, OnInit, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { About } from "./components/about/about";
import { Features } from "./components/features/features";
import { Team } from "./components/team/team";
import { Pricing } from "./components/pricing/pricing";
import { Blog } from "./components/blog/blog";
import { Contactus } from "./components/contactus/contactus";
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [Footer, Header, Hero, About, Features, Team, Pricing, Blog, Contactus, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
isHomePage = true;
 router = inject(Router);
ngOnInit() {
    this.checkUrl(this.router.url);

    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: any) => this.checkUrl(e.urlAfterRedirects));
  }

  checkUrl(url: string) {
    // Home page conditions for hash routing
    this.isHomePage = url === '/' || url.startsWith('/?');
  }
  protected readonly title = signal('barcodepro-angular');
}
