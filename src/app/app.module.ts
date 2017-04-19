import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DeckComponent } from './deck.component';
import { CardsService } from './cards.service';

@NgModule({
  declarations: [
    AppComponent,
    DeckComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ CardsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
