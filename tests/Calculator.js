let homepage = require('../Pages/HomePage')

describe('Demo Calculator', function() {
    it('should Addition test', function () {
        //browser.get('https://juliemr.github.io/protractor-demo/');
        homepage.get('https://juliemr.github.io/protractor-demo/');

        //element(by.model('first')).sendKeys('2');
        homepage.enterfirstnumber('4');

        //element(by.model('second')).sendKeys('3');
        homepage.entersecondnumber('6');

        //element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickbuttton();

        //let result=element(by.cssContainingText('.ng-binding','5'));
        //expect(result.getText()).toEqual('5');
        homepage.verify('10');

        browser.sleep(3000);
    });

    it('should Subtraction test', function () {
        //browser.get('https://juliemr.github.io/protractor-demo/');
        homepage.get('https://juliemr.github.io/protractor-demo/');

        //element(by.model('first')).sendKeys('2');
        homepage.enterfirstnumber('4');

        //element(by.model('second')).sendKeys('3');
        homepage.entersecondnumber('6');

        //element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickbutttono1();

        //let result=element(by.cssContainingText('.ng-binding','5'));
        //expect(result.getText()).toEqual('5');
        homepage.verify('10');

        browser.sleep(3000);
    });
});