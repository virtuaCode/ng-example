import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Fruit }                    from "../fruit";
import { FruitService }             from "../fruit.service";

@Component({
    selector: 'app-fruit-detail',
    templateUrl: './fruit-detail.component.html',
    styleUrls: ['./fruit-detail.component.css']
})
export class FruitDetailComponent implements OnInit {

    constructor(  
        private heroService: FruitService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit() {
        this.route.paramMap
        .switchMap((params: ParamMap) => this.heroService.getFruit(+params.get('id')))
        .subscribe(fruit => this.fruit = fruit);
    }

    @Input() fruit: Fruit;

    goBack(): void {
        this.location.back();
      }
}
