//Page Object Model example
let demopage = function(){
    
    //define the elements
    let firstInput = element(by.model('first'));
    var operators=element(by.model('operator'));    		
    let secondInput = element(by.model('second'));
    let goBtn = element(by.css('[ng-click="doAddition()"]'));

    //define functions
    this.getURL = function(url) {browser.get(url);}
    this.firstTxt = function(first) {firstInput.sendKeys(first);}
    this.operatorList = function(operator) { operators.$(`[value=${operator}]`).click();}
    this.secondTxt = function(second) {secondInput.sendKeys(second);}
    this.goButton = function() {goBtn.click();}
    this.verifyResult = function(result) {
        //get the actual result from the calculator page
        let output = element(by.binding('latest'));
        //assert the result
        expect(output.getText()).toEqual(result);
    }    
}
module.exports = new demopage();