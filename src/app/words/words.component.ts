import { Component, OnInit } from '@angular/core';

import { level1 } from '../word-list';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent{
  clase = ['capitalize', 'upper', 'lower']
  font = ['ubuntu', 'anton', 'yellowtail', 'dancing']

  words = level1;
  
  item = level1[Math.floor(Math.random() * level1.length)];
  fuente = this.font[Math.floor(Math.random() * this.font.length)];
  tipo = this.clase[Math.floor(Math.random() * this.clase.length)];

  change() {
    this.item = level1[Math.floor(Math.random() * level1.length)];
    this.fuente = this.font[Math.floor(Math.random() * this.font.length)];
    this.tipo = this.clase[Math.floor(Math.random() * this.clase.length)];
  }

}