import { DevtasksPage } from './app.po';

describe('devtasks App', function() {
  let page: DevtasksPage;

  beforeEach(() => {
    page = new DevtasksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
