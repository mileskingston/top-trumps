import { TtScssPage } from './app.po';

describe('tt-scss App', () => {
  let page: TtScssPage;

  beforeEach(() => {
    page = new TtScssPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
