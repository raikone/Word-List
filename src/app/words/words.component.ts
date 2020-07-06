import { Component, OnInit } from '@angular/core';

import { level1 } from '../word-list';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent{
  clase = ['capitalize', 'lower','upper']
  font_base = ['ubuntu', 'anton', 'merriweather']
  font_hand = ['yellowtail', 'dancing', 'indie', 'cedarville', 'sacramento', 'rochester', 'parisienne']
  
  item = level1[Math.floor(Math.random() * level1.length)];
  tipo = this.clase[Math.floor(Math.random() * this.clase.length)];
  
  get_font() {
    if (this.tipo != 'upper') {
      console.log('todas')
      return this.font_base.concat(this.font_hand);
    } else {
      console.log('ubuntu o anton')
      return this.font_base;
    }
  }

  font = this.get_font();
  fuente = this.font[Math.floor(Math.random() * this.font.length)];
  
  
  change() {
    this.item = level1[Math.floor(Math.random() * level1.length)];
    this.tipo = this.clase[Math.floor(Math.random() * this.clase.length)];
    this.font = this.get_font();
    this.fuente = this.font[Math.floor(Math.random() * this.font.length)];
    
  }

}