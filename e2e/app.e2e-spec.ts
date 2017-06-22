import { StudentDetailsPage } from './app.po';

describe('student-details App', () => {
  let page: StudentDetailsPage;

  beforeEach(() => {
    page = new StudentDetailsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
