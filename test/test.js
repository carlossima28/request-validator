const RequestValidator = require('../index');
const assert = require('assert').strict;
const regex = require('./test.regex.json');
require('./test.objects.js');

describe("Success Test", function () {
    let tests = Object.entries(obj.success);
    for (let i = 0; i < tests.length; i++) {
        it(tests[i][0], function () {
            let rv = new RequestValidator({
                regex: regex,
                remove_unknown: obj.success[this.test.title].config.remove_unknown
            });
            assert.deepStrictEqual(dispatch(rv, rv.validate, obj.success[this.test.title].param), obj.success[this.test.title].resp);
        });
    }
});

describe("Error Test", function () {
    let tests = Object.entries(obj.fail);
    for (let i = 0; i < tests.length; i++) {
        it(tests[i][0], function () {
            let rv = new RequestValidator({
                regex: regex
            });
            assert.deepStrictEqual(dispatch(rv, rv.validate, obj.fail[this.test.title].param), obj.fail[this.test.title].resp);
        });
    }
});

describe("Fixed Error Test", function () {
    let tests = Object.entries(obj.fixed);
    for (let i = 0; i < tests.length; i++) {
        it(tests[i][0], function () {
            let rv = new RequestValidator({
                regex: regex
            });
            assert.deepStrictEqual(dispatch(rv, rv.validate, obj.fixed[this.test.title].param), obj.fixed[this.test.title].resp);
        });
    }
});