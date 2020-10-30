let demopage = require('../pages/demopage');

demo_url = 'http://juliemr.github.io/protractor-demo/';

describe('Numbers Operation', () => {
    it('Addition', () => {
        demopage.getURL(demo_url);
        demopage.firstTxt('2');
        demopage.operatorList('ADDITION');
        demopage.secondTxt('3');
        demopage.goButton();
        demopage.verifyResult('5');
    })
    it('Subtraction', () => {
        demopage.getURL(demo_url);
        demopage.firstTxt('5');
        demopage.operatorList('SUBTRACTION');
        demopage.secondTxt('3');
        demopage.goButton();
        demopage.verifyResult('2');
    })
    it('Multiplication', () => {
        demopage.getURL(demo_url);
        demopage.firstTxt('5');
        demopage.operatorList('MULTIPLICATION');
        demopage.secondTxt('4');
        demopage.goButton();
        demopage.verifyResult('20');
    })
    it('Division', () => {
        demopage.getURL(demo_url);
        demopage.firstTxt('20');
        demopage.operatorList('DIVISION');
        demopage.secondTxt('5');
        demopage.goButton();
        demopage.verifyResult('4');
    })
    it('Modulo', () => {
        demopage.getURL(demo_url);
        demopage.firstTxt('30');
        demopage.operatorList('MODULO');
        demopage.secondTxt('3');
        demopage.goButton();
        demopage.verifyResult('0');
    })
})