import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
// naming convention for importing the reducers
import * as fromShoppingList from './store/shopping-list.reducer';
import * as SLActions from './store/shopping-list.actions';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  // ingredients: Array<Ingredient> = [];
  ingredients: Observable<{ ingredients: Ingredient[] }>;

  constructor(private store: Store<fromShoppingList.AppState>) {}

  ngOnInit(): void {
    // select slice of the state
    this.ingredients = this.store.select('shoppingList');
  }

  ngOnDestroy(): void {}

  onEditItem(index: number) {
    // this.shoppingListService.startedEditing.next(index);
    this.store.dispatch(new SLActions.StartEdit(index));
  }
}
