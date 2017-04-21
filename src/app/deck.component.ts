import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { CardsService } from './cards.service';
import { Icard, Imessage } from './models/index';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit, OnDestroy  {
  private subs: Subscription;
  errorMessage: string;
  reset: boolean;
  message: any = {};
  cards: Icard[];
  compCard: any = {};

  constructor(private cardsService: CardsService) { }

  ngOnInit(): void {
    this.getCards();
  };

  getCards() {
    this.subs = this.cardsService.getCards().subscribe(
      data => {
        this.cards = data;
        const random = Math.floor(Math.random() * (this.cards.length) + 1);
        this.compCard = this.cards[random];
      },
      error => this.errorMessage = <any>error
    );
  };

  selectOption(card, option) {
    this.reset = false;
    this.message = this.cardsService.optionSelected(option, card[option], this.compCard[option]);
  };

  resetCard() {
    const random = Math.floor(Math.random() * (this.cards.length - 1) + 1);
    this.reset = true;
    this.compCard = this.cards[random];
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
