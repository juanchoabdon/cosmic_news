import { ClientCosmicPage } from './app.po';

describe('client-cosmic App', function() {
  let page: ClientCosmicPage;

  beforeEach(() => {
    page = new ClientCosmicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
