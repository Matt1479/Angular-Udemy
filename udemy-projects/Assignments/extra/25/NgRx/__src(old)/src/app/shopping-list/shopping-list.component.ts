import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../utils/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  // ingredients: Array<Ingredient> = [];
  ingredients: Observable<{ ingredients: Ingredient[] }>;
  // private inChangeSub!: Subscription;

  constructor(
    private shoppingListService: ShoppingListService,
    // Store<type>
    // the type is a description of different parts we have in store
    // shoppingList - key - it has to be the same as in the AppModule
    // the type of the data stored in shoppingList is what the reducer function yields
    // reducer function yields a state of type (initialState): { ingredients: Ingredient[] }
    private store: Store<{ shoppingList: { ingredients: Ingredient[] } }>
  ) {}

  ngOnInit(): void {
    // select() method - selects a slice() of your state
    this.ingredients = this.store.select('shoppingList');

    // this.ingredients = this.shoppingListService.getIngredients();
    // this.inChangeSub = this.shoppingListService.ingredientsChanged.subscribe(
    //   (ingredients: Ingredient[]) => {
    //     this.ingredients = ingredients;
    //   }
    // );
  }

  ngOnDestroy(): void {
    // this.inChangeSub.unsubscribe();
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }
}
