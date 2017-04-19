import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Icard, Imessage } from './models/index';

const win: Imessage = {
  'title': 'win',
  'message': 'You win!'
},
  draw: Imessage = {
    'title': 'draw',
    'message': 'A draw!'
  },
  lose: Imessage = {
    'title': 'lose',
    'message': 'You lose!'
  };

@Injectable()
export class CardsService {
  message: {};
  constructor(private http: Http) { }

  getCards(): Observable<Icard[]> {
    // return this.http.get('https://jsonplaceholder.typicode.com/posts')
    return this.http.get('src/app/cards.json')
      .map(this.extractData)
      .catch(this.handleError);
  }

  optionSelected(option, player, computer) {
    switch(option) {
      case 'year':
        if (player < computer) {
          this.message = win;
        }
        else if (player > computer) {
          this.message = lose;
        } else {
          this.message = draw;
        };
        break;
      default:
        if (player > computer) {
          this.message = win;
        }
        else if (player < computer) {
          this.message = lose;
        } else {
          this.message = draw;
        };
    }
    return this.message;
  }

  private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
