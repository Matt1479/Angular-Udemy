import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './utils/shopping-list.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeService } from './utils/recipe.service';
import { shoppingListReducer } from './shopping-list/store/shopping-list.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    PageNotFoundComponent,
    RecipeStartComponent,
    RecipeEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    // StoreModule.forRoot() - pass Action Reducer Map - JS Object
    // { identifier: reducer }
    StoreModule.forRoot({ shoppingList: shoppingListReducer }),
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
