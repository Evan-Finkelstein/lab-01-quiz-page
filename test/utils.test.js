
import { countsAsYes } from '../counts-as-a-yes.js'

const test = QUnit.test;

test('Should return true when passed an argument that starts w/ Y', (expect) => {
 
    const expected = true;
    const userInput = 'Yes';
    const actual = countsAsYes(userInput);
    expect.equal(actual, expected);
});
