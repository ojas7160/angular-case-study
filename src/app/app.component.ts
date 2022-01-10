import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { CoreModule } from './modules/core/core.module';
import { HomeModule } from './modules/home/home.module';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

// interface Routes {
//   path: string,
//   loadChildren?: () => void,
//   component?: unknown,
//   children: Routes[],
// }
export class AppComponent implements OnInit {
  title = 'angular-case-study';
  components = {
    home: HomeModule,
    core: CoreModule,
  };
  routes: Routes = [];
  constructor(private router: Router) {}

  ngOnInit() {
    for (let component in this.components) {
      if (component == 'home') {
        this.routes.push({
          path: component,
          loadChildren: () =>
            import('./modules/home/home.module').then((m) => m.HomeModule),
        });
      } else {
        this.routes.push({
          path: component,
          loadChildren: () =>
            import('./modules/core/core.module').then((m) => m.CoreModule),
        });
      }
    }
    this.routes.push({ path: '', pathMatch: 'full', redirectTo: 'home' });
    this.router.resetConfig(this.routes);
  }
}
