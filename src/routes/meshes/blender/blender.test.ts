import chai from 'chai';

import Blender from './blender';

const expect = chai.expect;

const TEST_SCRIPT = `${__dirname}/blender.test.py`;

describe('## Blender Tests', () => {
    it.only('Verifies blender is properly called with arguments', async () => {
        const testString = 'some test string';
        const testArray = ['first', 'second'];

        // Call Blender with the test script
        const result = await Blender.python(TEST_SCRIPT, [
            '--testString', testString,
            '--testFlag',
            '--testArray'].concat(testArray)
        );

        // Verify Blender returned expected results
        expect(result).to.include('{"testString": "some test string", "testArray": ["first", "second"], "testFlat": true}');
        return Promise.resolve();
    });
});
