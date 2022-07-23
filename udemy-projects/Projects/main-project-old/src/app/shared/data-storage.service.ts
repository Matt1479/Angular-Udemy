import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../utils/recipe.service';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();

    this.http
      .put<Recipe[]>(
        'https://ng-tutorial-project-abb7e-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
        recipes
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchRecipes() {
    return this.http
      .get<Recipe[]>(
        'https://ng-tutorial-project-abb7e-default-rtdb.europe-west1.firebasedatabase.app/recipes.json'
      )
      .pipe(
        // rxjs operator
        map((recipe) => {
          // JS map method (not rxjs)
          // map() is called on every element in an array
          // to transform elements in an array
          return recipe.map((recipe) => {
            // return transformed array
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap((recipes) => {
          this.recipeService.setRecipes(recipes);
        })
      );
  }
}
