import { Component, Input } from '@angular/core';
import { Recipe } from '../../../model/recipe';
import { CartService } from '../../../service/cart.service';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss'
})
export class RecipeCardComponent {
  @Input()
  recipe!:Recipe;

  public constructor (private cartService:CartService){

  }

  public addToCart(){
    this.cartService.addToCart(this.recipe);
  }
}
