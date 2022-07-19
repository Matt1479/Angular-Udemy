import { Action } from '@ngrx/store';
import { Ingredient } from 'src/app/shared/ingredient.model';

// convention: use a constant which name is the same name as the identifier,
// which should be descriptive about what this action does
// and then you simply store your string indentifier in that constant
export const ADD_INGREDIENT = 'ADD_INGREDIENT';

export class AddIngredient implements Action {
  // type - indentifier of an action
  readonly type = ADD_INGREDIENT;

  // payload or any other name
  constructor(public payload: Ingredient) {}
}
