import { Injectable } from '@angular/core'

import { Fruit } from "./fruit"
import { FRUITS } from "./mock-fruits"

@Injectable()
export class FruitService {
    getFruits(): Promise <Fruit[]> { 
        return Promise.resolve(FRUITS)
    }
}