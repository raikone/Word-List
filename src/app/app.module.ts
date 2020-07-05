import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WordsComponent } from './words/words.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: WordsComponent },
    ]) ],
  declarations: [ AppComponent, WordsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
