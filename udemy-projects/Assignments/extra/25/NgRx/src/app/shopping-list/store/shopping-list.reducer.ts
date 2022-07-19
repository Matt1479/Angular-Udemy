import { Action } from '@ngrx/store';
import { Ingredient } from 'src/app/shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';

const initialState = {
  ingredients: [new Ingredient('Apples', 5), new Ingredient('Tomatoes', 10)],
};

// state - current state
// action - action that triggers the reducer (and state update)
// state = initialState - set default value/state
export function shoppingListReducer(
  state = initialState,
  action: ShoppingListActions.AddIngredient
) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      // never touch the existing state!
      return {
        // good practice: always copy the old state, then overwrite what you want to change
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };
    // return the default state
    default:
      return state;
  }
}
