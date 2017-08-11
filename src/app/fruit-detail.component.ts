import { Component, Input } from '@angular/core';

import { Fruit } from './fruit'



@Component({
  selector: 'fruit-detail',
  templateUrl: './fruit-detail.component.html'
})

export class FruitDetailComponent {
    @Input() fruit: Fruit;
}