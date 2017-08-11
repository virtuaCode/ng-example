import { Component, OnInit } from '@angular/core'

import { Fruit } from './fruit'
import { FruitService } from "./fruit.service";

@Component({
  selector: 'fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})

export class FruitsComponent implements OnInit {
  constructor(private fruitService: FruitService) { }
  
  title = 'Fruits'
  fruits : Fruit[]
  selectedFruit: Fruit;

  onSelect(fruit: Fruit): void {
    this.selectedFruit = fruit;
  }
  getFruits(): any {
    this.fruitService.getFruits().then(fruits => this.fruits = fruits)
  }
  ngOnInit(): void {
    this.getFruits()
  }
}