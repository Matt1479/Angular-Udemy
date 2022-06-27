import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/utils/recipe.service';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  // exposing it with @Input() to bind it, to later get data from outside
  @Input('recipeItem') recipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}

  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
