import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
   title : string;
   subtitle: string;
   heroe : string;
   heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  constructor() {
    this.heroe = this.heroes[0]
    this.title = 'El heroe de';
    this.subtitle = 'Uwuland'

  }

}
