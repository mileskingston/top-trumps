import { Component } from '@angular/core';

import { DeckComponent } from './deck.component';
import { CardsService } from './cards.service';
import { Icard } from './models/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Top Trumps';
}
