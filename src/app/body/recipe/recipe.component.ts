import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  name : String;
  intro : String;
  ingredients : String [];

  constructor() { 

  }

  ngOnInit() {
    this.getName();
    this.getIntro();
    this.getIngredients();
  }

  getName(){
    this.name = "Raclette"
  }

  getIngredients(){
    this.ingredients = [];
    this.ingredients.push("Fromage");
    this.ingredients.push("Patate");
    this.ingredients.push("Charcuterie");
    //console.log(this.ingredients)
  }

  getIntro(){
    this.intro = "Dayum intro"
  }

}
