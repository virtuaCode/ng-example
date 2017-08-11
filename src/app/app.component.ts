import { Component, OnInit } from '@angular/core'

import { Fruit } from './fruit'
import { FruitService } from "./fruit.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Fruits'
}