import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public slides = [
    'background-1',
    'background-2',
    'background-3',
    'background-4',
    'background-5',
  ];

  constructor() { 
  	this.loadScripts();
  }

  ngOnInit() {
  }

  loadScripts() {
    const dynamicScripts = [
    '../../assets/js/jquery-3.1.1.slim.min.js',
     '../../assets/js/ie10-viewport-bug-workaround.js',
     '../../assets/js/tether.min.js'
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

}
