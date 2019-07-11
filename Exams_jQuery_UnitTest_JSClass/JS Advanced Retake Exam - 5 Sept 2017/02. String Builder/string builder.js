let assert = require('chai').assert;

class StringBuilder {
    constructor(string) {
        if (string !== undefined) {
            StringBuilder._vrfyParam(string);
            this._stringArray = Array.from(string);
        } else {
            this._stringArray = [];
        }
    }

    append(string) {
        StringBuilder._vrfyParam(string);
        for(let i = 0; i < string.length; i++) {
            this._stringArray.push(string[i]);
        }
    }

    prepend(string) {
        StringBuilder._vrfyParam(string);
        for(let i = string.length - 1; i >= 0; i--) {
            this._stringArray.unshift(string[i]);
        }
    }

    insertAt(string, startIndex) {
        StringBuilder._vrfyParam(string);
        this._stringArray.splice(startIndex, 0, ...string);
    }

    remove(startIndex, length) {
        this._stringArray.splice(startIndex, length);
    }

    static _vrfyParam(param) {
        if (typeof param !== 'string') throw new TypeError('Argument must be string');
    }

    toString() {
        return this._stringArray.join('');
    }
}
describe("list", function () {

    let current;

    beforeEach(() => {
        current = new StringBuilder('test');
    });
    describe("check", function () {
        it("check search func", function () {
            assert.equal(StringBuilder.prototype.hasOwnProperty('append'), true)
        });
        it("check search func", function () {
            assert.equal(StringBuilder.prototype.hasOwnProperty('prepend'), true)
        });
        it("check search func", function () {
            assert.equal(StringBuilder.prototype.hasOwnProperty('insertAt'), true)
        });
        it("check search func", function () {
            assert.equal(StringBuilder.prototype.hasOwnProperty('remove'), true)
        });
        it("check search func", function () {
            assert.equal(StringBuilder.prototype.hasOwnProperty('toString'), true)
        });
    });
    describe("instantiated ", function () {
        it("test instantiated ", function () {
            assert.equal(current.toString(), 'test')
        });
        it("test instantiated ", function () {
            let result = new StringBuilder();
            assert.equal(result.toString(), '')
        });
        it("test instantiated ", function () {
            let result = new StringBuilder();
            assert.equal(result.toString(), '')
        });
        it("test instantiated ", function () {
            assert.throws(() => current = new StringBuilder(4), 'Argument must be string');
        });
    });
    describe("append ", function () {
        it("test append ", function () {
           current.append(' function');
            assert.equal(current.toString(), 'test function')
        });
        it("test append ", function () {
            current.append(' function');
            assert.equal(current._stringArray.length, 13)
        });
        it("test append ", function () {
            assert.throws(() => current = new StringBuilder(3), 'Argument must be string');
        });

    });
    describe("prepend ", function () {
        it("test prepend ", function () {
            current.prepend('function ');
            assert.equal(current.toString(), 'function test')
        });
        it("test prepend ", function () {
            current.prepend('function ');
            assert.equal(current._stringArray.length, 13)
        });
        it("test prepend ", function () {
            assert.throws(() => current = new StringBuilder(3), 'Argument must be string');
        });

    });
    describe("insertAt ", function () {
        it("test insertAt ", function () {
            current.insertAt('rr', 1);
            assert.equal(current.toString(), 'trrest');
            assert.equal(current._stringArray.length, 6)
        });
        it("test insertAt ", function () {
            current.insertAt('rr', 434);
            assert.equal(current.toString(), 'testrr');
            assert.equal(current._stringArray.length, 6)
        });
        it("test insertAt ", function () {
            assert.throws(() => current.insertAt([], 2), 'Argument must be string');
        });
    });
    describe("remove ", function () {
        it("test remove ", function () {
            current.remove(1, 2);
            assert.equal(current.toString(), 'tt');
            assert.equal(current._stringArray.length, 2)
        });
    });
});

