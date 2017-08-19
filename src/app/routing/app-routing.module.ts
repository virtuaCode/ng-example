import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { FruitsComponent } from "../fruits/fruits.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { FruitDetailComponent } from "../fruit-detail/fruit-detail.component";

const ROUTES: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'fruits', component: FruitsComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: 'detail/:id', component: FruitDetailComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule { }
