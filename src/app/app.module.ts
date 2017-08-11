import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { FruitDetailComponent } from './fruit-detail.component';
import { FruitsComponent } from "./fruits.component";
import { FruitService } from "./fruit.service";



@NgModule({
  declarations: [
    AppComponent,
    FruitDetailComponent,
    FruitsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'fruits',
        component: FruitsComponent
      }
    ])
  ],
  providers: [FruitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
