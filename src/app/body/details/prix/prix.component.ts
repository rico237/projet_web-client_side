import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prix',
  templateUrl: './prix.component.html',
  styleUrls: ['./prix.component.css']
})
export class PrixComponent implements OnInit {
  public dispos: number[] = [];
  constructor() { }

  ngOnInit() {
    this.mockDispos(10);
  }

  mockDispos(n) {
    for (let i = 0; i < n; i++) {
      this.dispos.push(i);
    }
  }
}
