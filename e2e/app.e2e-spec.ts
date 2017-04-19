import { browser, element, by } from 'protractor';

describe('app component', () => {
  let title = element(by.css('app-root h1')),
    deck = element(by.tagName('app-deck'));

  beforeEach(() => {
    browser.get('/');
  });

  it('should display Top Trumps title', () => {
    expect(title.getText()).toEqual('Top Trumps');
  });

  it('should display app-deck element', () => {
    expect(deck.isPresent()).toBeTruthy();
  });
});
