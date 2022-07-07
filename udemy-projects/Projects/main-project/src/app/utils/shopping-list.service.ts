import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    // return a copy
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // first option - downside: too many events emitted
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }

    // another option - copying the passed array
    // into the ingredients array using spread operator
    this.ingredients.push(...ingredients);
    // don't forget to emit that our ingredients changed
    // meaning: update/replace current array
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  constructor() {}
}
