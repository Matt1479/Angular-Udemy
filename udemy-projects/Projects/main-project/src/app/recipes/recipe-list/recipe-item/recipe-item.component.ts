import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  // exposing it with @Input() to bind it, to later get data from outside
  @Input('recipeItem') recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>;

  constructor() {}

  ngOnInit(): void {}

  onSelected() {
    this.recipeSelected.emit();
  }
}
