import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {
  public energieValue : number;
  public lipidesValue : number;
  public glucidesValue : number;
  public fibresValue : number;
  public selValue : number;

  constructor() { 
  }

  ngOnInit() {
    this.setValues(2109,23,65,1.5,1.84);
  }

  setValues(nrj,lip,glu,fib,sel){
    this.energieValue = nrj;
    this.lipidesValue = lip;
    this.glucidesValue = glu;
    this.fibresValue = fib;
    this.selValue = sel;
  }

}
