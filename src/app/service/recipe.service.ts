import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Recipe } from '../model/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSuject:BehaviorSubject<Recipe[]> = 
      new BehaviorSubject<Recipe[]>([]);

  recipes$:Observable<Recipe[]> = this.recipeSuject
    .asObservable();

  constructor(private http:HttpClient) {
    this.getAllRecipes().subscribe();
  }

  public getAllRecipes():Observable<Recipe[]>{
    return this.http.get<Recipe[]>('http://localhost:3000/recipes')
          .pipe(
            tap( data => this.recipeSuject.next(data))
          )
  }
}
