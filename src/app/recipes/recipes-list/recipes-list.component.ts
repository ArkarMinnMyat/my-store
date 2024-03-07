import { Component } from '@angular/core';
import { RecipeService } from '../../service/recipe.service';
import { Observable } from 'rxjs';
import { Recipe } from '../../model/recipe';
import { CommonModule } from '@angular/common';
import { RecipeCardComponent } from "./recipe-card/recipe-card.component";

@Component({
    selector: 'app-recipes-list',
    standalone: true,
    templateUrl: './recipes-list.component.html',
    styleUrl: './recipes-list.component.scss',
    imports: [CommonModule, RecipeCardComponent]
})
export class RecipesListComponent {

  recipe$:Observable<Recipe[]> = this.recipeService.recipes$;

  public constructor(private recipeService:RecipeService){
    
  }

}
