import { AppPage } from './app.po';

describe('angular-bootstrap-starter App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Angular Bootstrap starter template');
  });
});
