import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WordsComponent } from './words/words.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  imports: [
    BrowserModule,
    MatCardModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: WordsComponent },
    ])
  ],
  declarations: [
    AppComponent,
    WordsComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }