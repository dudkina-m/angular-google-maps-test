import { WebileSoftTestPage } from './app.po';

describe('webile-soft-test App', function() {
  let page: WebileSoftTestPage;

  beforeEach(() => {
    page = new WebileSoftTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
