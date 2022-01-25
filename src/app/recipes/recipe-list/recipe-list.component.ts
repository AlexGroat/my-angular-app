import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    // new recipe, add a name, description and an image path as parameters
    new Recipe(
      'A Test recipe',
      'This is my test recipe',
      'https://img.bestrecipes.com.au/R_L8NQYW/w643-h428-cfill-q90/br/2018/05/nannas-golden-sausage-casserole-recipe-522926-1.jpg'
    ),
  ];
  // import the recipe model
  constructor() {}

  ngOnInit(): void {}
}
