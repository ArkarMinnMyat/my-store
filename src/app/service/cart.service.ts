import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Recipe } from '../model/recipe';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartBehaviourSubject:BehaviorSubject<Recipe[]> =
  new BehaviorSubject<Recipe[]>([]);
  cart$:Observable<Recipe[]> = this.cartBehaviourSubject.asObservable();
  recipes:Recipe[]= [];
  constructor() { }

  duplicateDetect(recipe:Recipe):Recipe{
    return this.recipes.find(r => r.id === recipe.id) as Recipe;
  }

  addToCart(recipe:Recipe){
    if(!this.duplicateDetect(recipe)){
      this.recipes.push(recipe);
      this.cartBehaviourSubject.next(this.recipes);
    }
    
  }
}
