let homepage=function (){
    let firstinput=element(by.model('first'));
    let secondinput=element(by.model('second'));
    let btnclick=element(by.css('[ng-click="doAddition()"]'));

    this.get =function (url){
        browser.get(url);
    }

    this.enterfirstnumber = function (firstnumber){
        firstinput.sendKeys(firstnumber);
    }

    this.entersecondnumber =function (secondnumber){
        secondinput.sendKeys(secondnumber);
    }

    this.clickbuttton =function (){
        btnclick.click();
    }

    this.verify = function (result){
        let output=element(by.cssContainingText('.ng-binding',result));
        expect(output.getText()).toEqual(result);
    }

};

module.exports= new homepage();