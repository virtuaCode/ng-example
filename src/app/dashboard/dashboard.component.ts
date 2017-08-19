import { Component, OnInit } from '@angular/core';

import { Fruit } from "../fruit";
import { FruitService } from "../fruit.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  fruits: Fruit[] = [];

  constructor(
    private fruitService: FruitService
  ) { }

  ngOnInit(): void {
    this.fruitService.getFruits().then(fruits => this.fruits = fruits.slice(1, 5));
  }

}
