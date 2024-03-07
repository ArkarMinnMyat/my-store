import { Component } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { Observable } from 'rxjs';
import { Recipe } from '../../model/recipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.scss'
})
export class CartListComponent {
  cart$:Observable<Recipe[]> = this.cartService.cart$;
  public constructor(private cartService:CartService){

  }
}
