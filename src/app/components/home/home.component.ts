import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { BannerComponent } from '../banner/banner.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  routes: Routes = [];
  components = {
    banner: BannerComponent,
  };
  showBanner: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('here');
    this.routes.push({
      path: 'banner',
      component: this.components.banner,
    });
    this.router.resetConfig(this.routes);
  }

  addBanner() {
    this.showBanner = !this.showBanner;
  }

  openBanner(e: MouseEvent) {
    this.router.navigate(['/banner']);
    e.preventDefault();
  }
}
