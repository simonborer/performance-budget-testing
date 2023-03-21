import * as chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);
let expect = chai.expect;

import * as lght from './index.lighthouse.js';

describe('index.html', function() {
    describe('Lighthouse metrics', function() {
        this.timeout(60000);
        describe('Budget', function() {
            it('should come in under budget', async function() {
                return expect(await lght.performanceBudget()).to.have.property('sizeOverBudget').to.equal(0);
            });
        });
    });
});