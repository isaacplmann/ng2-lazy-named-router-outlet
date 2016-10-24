import { ModalroutePage } from './app.po';

describe('modalroute App', function() {
  let page: ModalroutePage;

  beforeEach(() => {
    page = new ModalroutePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
