import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { ProductListComponent } from 'src/app/components/product-list/product-list.component';

@NgModule({
  declarations: [ProductListComponent],
  imports: [CommonModule, CoreRoutingModule],
})
export class CoreModule {}
