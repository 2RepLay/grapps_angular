import { GrappsPage } from './app.po';

describe('grapps App', () => {
  let page: GrappsPage;

  beforeEach(() => {
    page = new GrappsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
