import { browser, element, by } from 'protractor';

describe('app-deck component', () => {
    let btnOption = element(by.tagName('button')),
        alert = element(by.css('.alert')),
        secondaryBtn = element(by.css('.btn-secondary')),
        computerCol = element(by.css('.col-computer'));

    beforeEach(() => {
        browser.get('/');
    });

    it('on button click an alert message should display', () => {
        btnOption.click().then(function() {
            expect(alert.isPresent()).toBeTruthy();
        });
    });

    it('on button click the reset button should display', () => {
        btnOption.click().then(function() {
            expect(secondaryBtn.isPresent()).toBeTruthy();
        });
    });

    it('on button click the computer column should display', () => {
        btnOption.click().then(function() {
            expect(computerCol.isPresent()).toBeTruthy();
        });
    });

    it('on button click the reset button the computer column should not display', () => {
        btnOption.click().then(function() {
            secondaryBtn.click().then(function() {
                expect(computerCol.isPresent()).toBeFalsy();
            });
        });
    });
});
