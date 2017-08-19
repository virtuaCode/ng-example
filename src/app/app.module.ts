import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { FruitDetailComponent } from './fruit-detail/fruit-detail.component';
import { FruitsComponent } from "./fruits/fruits.component";
import { FruitService } from "./fruit.service";
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from "./routing/app-routing.module";
import { CreatorComponent } from './creator/creator.component';



@NgModule({
  declarations: [
    AppComponent,
    FruitDetailComponent,
    FruitsComponent,
    DashboardComponent,
    CreatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [FruitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
