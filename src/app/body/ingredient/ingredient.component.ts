import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {
  public volume : number;
  // valeurs en  calories et g
  public energieValue : number;
  public lipidesValue : number;
  public glucidesValue : number;
  public fibresValue : number;
  public selValue : number;
  // valeurs des apports journaliers
  public energieValue100 : number;
  public lipidesValue100 : number;
  public glucidesValue100 : number;
  public fibresValue100 : number;
  public selValue100 : number;

  constructor() { 
  }

  ngOnInit() {
    this.volume = 250;
    this.setCriteriaValues(2109,23,65,1.5,1.84);
  }

  setCriteriaValues100(){
    const rapport = this.volume / 100;
    console.log(rapport)
    this.energieValue100   = this.energieValue  * rapport;
    this.lipidesValue100   = this.lipidesValue  * rapport;
    this.glucidesValue100  = this.glucidesValue * rapport;
    this.fibresValue100    = this.fibresValue   * rapport;
    this.selValue100       = this.selValue      * rapport;
  }

  setCriteriaValues(nrj,lip,glu,fib,sel){
      this.energieValue = nrj;
      this.lipidesValue = lip;
      this.glucidesValue = glu;
      this.fibresValue = fib;
      this.selValue = sel;
      this.setCriteriaValues100();
  }

}
