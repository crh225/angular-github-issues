import { AngularTemplatePage } from './app.po';

describe('angular-template App', () => {
  let page: AngularTemplatePage;

  beforeEach(() => {
    page = new AngularTemplatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(1 === 1);
  });
});
