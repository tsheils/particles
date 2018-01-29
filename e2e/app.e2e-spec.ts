import { AppPage } from './app.po';

describe('particles App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display particles', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('particles');
  });
});
