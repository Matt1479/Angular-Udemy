import { Ingredient } from 'src/app/shared/ingredient.model';
import * as SLActions from './shopping-list.actions';

export interface State {
  ingredients: Ingredient[];
  editedIngredient: Ingredient;
  editedIngredientIndex: number;
}

export interface AppState {
  shoppingList: State;
}

const initialState: State = {
  ingredients: [new Ingredient('Apples', 5), new Ingredient('Tomatoes', 10)],
  editedIngredient: null,
  editedIngredientIndex: -1,
};

export function shoppingListReducer(
  state: State = initialState,
  action: SLActions.ShoppingListActions
) {
  switch (action.type) {
    case SLActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };
    case SLActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload],
      };
    case SLActions.UPDATE_INGREDIENT:
      const ingredient = state.ingredients[state.editedIngredientIndex];
      const updatedIngredient = {
        ...ingredient, // copy old ingredient
        ...action.payload, // overwrite the old ingredient
      };
      const updatedIngredients = [...state.ingredients];
      // replace old element (copy) with [index] with the updatedIngredient (copy)
      updatedIngredients[state.editedIngredientIndex] = updatedIngredient;

      return {
        ...state,
        ingredients: updatedIngredients,
        editedIngredientIndex: -1,
        editedIngredient: null,
      };
    case SLActions.DELETE_INGREDIENT:
      return {
        ...state,
        // filter() - run function on every element of an array
        // filter() also provides an index
        ingredients: state.ingredients.filter((ing, ingIndex) => {
          // return true or false - depending on whether we want to keep an element or not
          return ingIndex !== state.editedIngredientIndex;
        }),
      };
    case SLActions.START_EDIT:
      return {
        ...state,
        editedIngredientIndex: action.payload,
        editedIngredient: { ...state.ingredients[action.payload] },
      };
    case SLActions.STOP_EDIT:
      return {
        ...state,
        editedIngredient: null,
        editedIngredientIndex: -1,
      };
    default:
      return state;
  }
}
