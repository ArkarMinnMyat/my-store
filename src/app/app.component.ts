import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { RecipeService } from './service/recipe.service';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { CartService } from './service/cart.service';
import { Observable } from 'rxjs';
import { Recipe } from './model/recipe';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, RecipesListComponent,CommonModule ,NavbarComponent,RouterModule ,FooterComponent]
})
export class AppComponent {
  cart$:Observable<Recipe[]> = this.cartService.cart$;
  public constructor (private cartService:CartService){

  }
}
