import { inject, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';

import { CardsService } from './cards.service';
import { Icard } from './models/index';

fdescribe('Cards Service', () => {
  let cardsService: CardsService,
    mockHttp;

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['get']);
    cardsService = new CardsService(mockHttp);
  });

});
