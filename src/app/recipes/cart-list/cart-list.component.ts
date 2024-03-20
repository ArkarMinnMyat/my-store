import { Component, DoCheck, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { Observable } from 'rxjs';
import { Recipe } from '../../model/recipe';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.scss'
})
export class CartListComponent implements OnInit , DoCheck{
  cart$:Observable<Recipe[]> = this.cartService.cart$;
  public constructor(private cartService:CartService){

  }

  

  total:number=0.0;

  recipes:Recipe[]=[];
  
  ngOnInit(): void {
    this.cart$.subscribe(data => this.recipes = data)
  }

  ngDoCheck(): void {
    this.calculatePrice();
  }

  private calculatePrice(){
    this.total = this.recipes.reduce(
      (a,b) => {
        b.total = (b.quantity as number) * (b.price as number)
        return a + (b.quantity as number) * (b.price as number)
      },0
    )
  }
}
