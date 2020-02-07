var hasClass = function(element, cls){
    return element.getAttribute('class').then(function (classes) {
        return classes.split(' ').indexOf(cls) !== -1;
    });
}
describe('JO | Search Update', ()=>{
    beforeEach(function(done){
        done();
    }, 10000);
    it('should toggle between the search and clear search btns, based on focus or blur state resp.', (done)=>{
        browser.ignoreSynchronization = true;
        const width = 500;
        const height = 1000;
 
        browser.driver.manage().window().setSize(width, height)
        browser.get('https://www.johnlewis.com/search?search-term=lipsticks', 10000);
        element(by.css('#mobileSearch')).sendKeys('lipsticks');
        const cancelSearchBtn = element(by.css('.mobile-search__clear-btn'))
        expect(hasClass(cancelSearchBtn, 'mobile-search--clear-btn-hidden')).toBe(false)
        done()
    }, 10000)
})