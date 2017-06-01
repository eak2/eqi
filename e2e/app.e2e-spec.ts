import { EquityinsightPage } from './app.po';

describe('equityinsight App', () => {
  let page: EquityinsightPage;

  beforeEach(() => {
    page = new EquityinsightPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
