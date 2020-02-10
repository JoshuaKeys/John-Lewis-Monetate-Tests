var hasClass = function(element, cls) {
  return element.getAttribute("class").then(function(classes) {
    return classes.split(" ").indexOf(cls) !== -1;
  });
};
describe("JO | 967 | Partnership Card Journey Test V2", () => {
  beforeEach(function(done) {
    browser.ignoreSynchronization = true;
    done();
  }, 10000);

  it("it should display on desktop and trigger a modal", done => {
    const width = 1200;
    const height = 1000;
    browser.driver
      .manage()
      .window()
      .setSize(width, height);

    browser.get(
      "https://www.johnlewis.com/2019-apple-ipad-10-2-inch-a10-ipados-wi-fi-32gb/gold/p4529032",
      10000
    );
    var partnershipCard = element(
      by.css(".show-on-desktop .partnership-card-journey__find-out-more-link")
    );
    element(by.css("#ensCloseBanner"))
      .getText()
      .then(text => {
          if(text.toLowerCase() === 'allow all') {
            element(by.css("#ensCloseBanner")).click();
          }

          partnershipCard.click();
          var partnershipModal = element(by.css('.jl-custom-modal.partnership-card-modal__wrapper'))
          expect(hasClass(partnershipModal, 'jl-custom-modal_hidden')).toBe(false);
      });
    done();
  }, 10000);

  it("it should display on mobile and trigger a modal", done => {
    const width = 500;
    const height = 1000;
    browser.driver
      .manage()
      .window()
      .setSize(width, height);

    browser.get(
      "https://www.johnlewis.com/2019-apple-ipad-10-2-inch-a10-ipados-wi-fi-32gb/gold/p4529032",
      10000
    );
    var partnershipCard = element(
      by.css(".show-on-mobile .partnership-card-journey__find-out-more-link")
    );
    element(by.css("#ensCloseBanner"))
      .getText()
      .then(text => {
          if(text.toLowerCase() === 'allow all') {
            element(by.css("#ensCloseBanner")).click();
          }

          partnershipCard.click();
          var partnershipModal = element(by.css('.jl-custom-modal.partnership-card-modal__wrapper'))
          expect(hasClass(partnershipModal, 'jl-custom-modal_hidden')).toBe(false);
      });
    done();
  });
});
