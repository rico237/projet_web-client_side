import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tableauNutrition",
  templateUrl: "./tableauNutrition.component.html",
  styleUrls: ["./tableauNutrition.component.css"]
})
export class tableauNutrition implements OnInit {
  public name: string;
  public volume: number;
  // valeurs en  calories et g
  public valuesPortion: number[];
  public values100: number[];

  public criteriaNames: string[];

  constructor() {
    this.criteriaNames = [];
    this.values100 = [];
    this.valuesPortion = [];
    this.setName();
  }

  public ngOnInit() {
    this.volume = 250;
    const mockData = [2109, 23, 65, 1.5, 1.84];
    const mockDataNames = ["Energie (kJ)", "Lipides", "Glucides", "Fibres", "Sel"];
    this.name = "ingredient x";
    this.setCriteriaNames(mockDataNames);
    this.setCriteriaValues(mockData);
  }

  public setCriteriaValues100() {
    const rapport = this.volume / 100;
    for (let i = 0 ; i < this.valuesPortion.length; i ++) {
      let temp = (this.valuesPortion [i] * rapport).toFixed(2);
      this.values100[i] = parseFloat(temp);
    }
  }

  public setCriteriaValues(values) {
    for (let i = 0; i < this.criteriaNames.length; i++) {
      this.valuesPortion[i] = values [i];
    }
    this.setCriteriaValues100();
  }

  public setCriteriaNames(strings) {
    for (let i = 0; i < strings.length; i++) {
      this.criteriaNames[i] = strings[i];
    }
  }

  public setName() {
    this.name = "ingredient X";
  }

}
