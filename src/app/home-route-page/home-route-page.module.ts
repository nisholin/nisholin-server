import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutePageRoutingModule } from './home-route-page-routing.module';
import { HomeRouteComponent } from './home-route.component';


@NgModule({
  declarations: [
    HomeRouteComponent
  ],
  imports: [
    CommonModule,
    HomeRoutePageRoutingModule
  ]
})
export class HomeRoutePageModule { }
