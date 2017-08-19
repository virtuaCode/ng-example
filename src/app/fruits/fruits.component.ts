import { Component, OnInit } from '@angular/core'

import { Fruit } from '../fruit'
import { FruitService } from "../fruit.service";
import { Router } from "@angular/router";

import {ButtonModule} from 'primeng/primeng';


@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css'] // https://codepen.io/anon/pen/zddOmY
})

export class FruitsComponent implements OnInit {
  constructor(
    private fruitService: FruitService,
    private router: Router
  ) { }
  
  title = 'Fruits'
  fruits : Fruit[]
  selectedFruit: Fruit;

  onSelect(fruit: Fruit): void {
    this.selectedFruit = fruit;
  }
  
  gotoDetail(fruit: Fruit): void {
    this.router.navigate(["/detail", this.selectedFruit.id])
  }

  getFruits(): any {
    this.fruitService.getFruits().then(fruits => this.fruits = fruits)
  }

  ngOnInit(): void {
    this.getFruits()
  }
}