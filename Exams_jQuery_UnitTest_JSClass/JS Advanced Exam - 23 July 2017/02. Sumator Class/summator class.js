let assert = require('chai').assert;

class Sumator {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    sumNums() {
        let sum = 0;
        for (let item of this.data)
            if (typeof (item) === 'number')
                sum += item;
        return sum;
    }
    removeByFilter(filterFunc) {
        this.data = this.data.filter(x => !filterFunc(x));
    }
    toString() {
        if (this.data.length > 0)
            return this.data.join(", ");
        else
            return '(empty)';
    }
}

describe("Summator", function () {
            let list;

            beforeEach(() => {
                list = new Sumator();

            });
    describe("add", function () {
        it('test', function () {
            assert.equal(list.data !== undefined, true)
        });
        it('test', function () {
            assert.equal(Sumator.prototype.hasOwnProperty('add'), true)
        });

    });
    describe("add", function () {
        it('test', function () {
            list.add(2);
            list.add(3);
            assert.equal(list.toString(), '2, 3')
        });
        it('test', function () {
            list.add("sas");
            list.add("aaa");
            assert.equal(list.toString(), 'sas, aaa')
        });


        it('test', function () {
            list.add({});
            list.add([]);

            assert.equal(list.toString(), '[object Object], ')
        });
        it('test', function () {
            list.add([]);
            list.add([]);

            assert.equal(list.toString(), ', ')
        });

        it('test', function () {
            assert.equal(list.toString(), "(empty)")
        });
        it('test', function () {
            assert.equal(list.data.length,0)
        });
    });
    describe("sumNums", function () {
            //isValid
            it('test', function () {
                list.add(2);
                list.add(3);
                assert.equal(list.sumNums(), 5)
            });
            it('test', function () {
            list.add(2.3);
            list.add(3.2);
            assert.equal(list.sumNums(), 5.5)
        });
        it('test', function () {
            list.add(-2);
            list.add(-3);
            assert.equal(list.sumNums(), -5)
        });
        it('test', function () {
            list.add(-2.3);
            list.add(-3.2);
            assert.equal(list.sumNums(), -5.5)
        });
        it('test', function () {
            list.add(0);
            list.add(0);
            assert.equal(list.sumNums(), 0)
        });

        //No valid
        it('test', function () {
            list.add([]);
            list.add('sas');
            assert.equal(list.sumNums(), 0)
        });
        it('test', function () {
            list.add([]);
            list.add({});
            assert.equal(list.sumNums(), 0)
        });
        it('test', function () {
            list.add(new Date());
            list.add('sas');
            assert.equal(list.sumNums(), 0)
        });
        it('test', function () {
            list.add('sasas');
            list.add('sas');
            assert.equal(list.sumNums(), 0)
        });

    });
    describe("removeByFilter", function () {
        it('test', function () {
            list.add(2);
            list.add(3);
            list.add(4);
            list.add(7);
            list.removeByFilter(x => x % 2 === 0);

            assert.equal(list.toString(), '3, 7')
        });
        it('test', function () {
            list.add(2);
            list.add(3);
            list.add(4);
            list.removeByFilter(x => x === 'string');

            assert.equal(list.toString(), '2, 3, 4')
        });
        it('test', function () {
            list.add(2);
            list.add(3);
            list.add(4);
            list.removeByFilter(undefined);

            assert.throws(() => list());
        });
    });
    describe("toString", function () {
        it('test', function () {
            list.add(2);
            list.add(3);
            list.add(4);
            assert.equal(list.toString(), '2, 3, 4')
        });
        it('test', function () {
            list.add('lubo');
            list.add('atanasov');

            assert.equal(list.toString(), 'lubo, atanasov')
        });
        it('test', function () {
            list.add('lubo');
            list.add(4);

            assert.equal(list.toString(), 'lubo, 4')
        });
        it('test', function () {
            list.add({});
            list.add({});

            assert.equal(list.toString(), '[object Object], [object Object]')
        });
        it('test', function () {
            list.add([]);
            list.add([]);

            assert.equal(list.toString(), ', ')
        });
        it('test', function () {
            assert.equal(list.toString(), '(empty)')
        });

    });
});

let list = new Sumator();
console.log(`list = [${list}]`);
list.add(1);
list.add(2);
list.add("three");
list.add(4);
console.log(`list = [${list}]`);
 console.log("sum = " + list.sumNums());
 list.add("5.5"); // not a number!
 list.add(7.7);
 console.log(`list = [${list}]`);
 console.log("sum = " + list.sumNums());
// list.removeByFilter(x => x % 2 === 0);
// console.log(`list = [${list}]`);
// console.log("sum = " + list.sumNums());


