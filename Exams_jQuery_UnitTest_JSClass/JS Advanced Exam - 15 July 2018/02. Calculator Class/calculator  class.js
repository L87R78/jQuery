let assert = require('chai').assert;

class Calculator {
    constructor() {
        this.expenses = [];
    }

    add(data) {
        this.expenses.push(data);
    }

    divideNums() {
        let divide;
        for (let i = 0; i < this.expenses.length; i++) {
            if (typeof (this.expenses[i]) === 'number') {
                if (i === 0 || divide===undefined) {
                    divide = this.expenses[i];
                } else {
                    if (this.expenses[i] === 0) {
                        return 'Cannot divide by zero';
                    }
                    divide /= this.expenses[i];
                }
            }
        }
        if (divide !== undefined) {
            this.expenses = [divide];
            return divide;
        } else {
            throw new Error('There are no numbers in the array!')
        }
    }

    toString() {
        if (this.expenses.length > 0)
            return this.expenses.join(" -> ");
        else return 'empty array';
    }

    orderBy() {
        if (this.expenses.length > 0) {
            let isNumber = true;
            for (let data of this.expenses) {
                if (typeof data !== 'number')
                    isNumber = false;
            }
            if (isNumber) {
                return this.expenses.sort((a, b) => a - b).join(', ');
            }
            else {
                return this.expenses.sort().join(', ');
            }
        }
        else return 'empty';
    }
}
describe("list", function () {

    let arr;

    beforeEach(() => {
        arr = new Calculator();
    });
    describe("check", function () {
        it('test arr', function () {
            assert.equal(arr.expenses !== undefined, true)
        });

    });
    describe("add", function () {
        it('test add', function () {
            arr.add(10);
            arr.add("Pesho");
            arr.add(5);
            assert.deepEqual(arr.expenses, [10, "Pesho", 5]);
        });
        it('test add', function () {
            arr.add(-10);
            arr.add("Pesho");
            arr.add(5);
            assert.deepEqual(arr.expenses, [-10, "Pesho", 5]);
        });
        it('test add', function () {
            arr.add(-10);
            arr.add("Pesho");
            arr.add(5.43);
            assert.deepEqual(arr.expenses, [-10, "Pesho", 5]);
        });
        it('test add', function () {
            arr.add([10, 2, 3]);
            arr.add({});
            let result = arr.expenses;
            assert.deepEqual(result, [[10,2,3], {}]);
        });

    });

    describe("divideNums", function () {
        it('test divideNums', function () {
            arr.add("sasasa");
            assert.throws(() => arr.divideNums(), 'There are no numbers in the array!');
        });
        it('test divideNums', function () {
            arr.add([]);
            assert.throws(() => arr.divideNums(), 'There are no numbers in the array!');
        });
        it('test divideNums', function () {
            arr.add({});
            assert.throws(() => arr.divideNums(), 'There are no numbers in the array!');
        });
        it('test divideNums', function () {
            arr.add("sas");
            arr.add({});
            arr.add(-3.4);
            assert.closeTo(arr.divideNums(), -3.4, 0.01);
        });
        it('test divideNums', function () {
            arr.add("sas");
            arr.add({});
            arr.add(-9.9);
            arr.add(9);
            arr.add(9.5);
            assert.closeTo(arr.divideNums(), -0.115, 0.01);
        });
        it('test divideNums', function () {
            arr.add("sas");
            arr.add({});
            arr.add(-9.9);
            arr.add(9);
            arr.add(0);
            assert.equal(arr.divideNums(), "Cannot divide by zero");
        });
    });
    describe("toString", function () {
        it('test toString', function () {
            assert.equal(arr.toString(), "empty array");
        });
        it('test toString', function () {
            arr.add(2);
            arr.add(3);
            assert.equal(arr.toString(), "2 -> 3");
        });
        it('test toString', function () {
            arr.add("sasa");
            arr.add("aaa");
            assert.equal(arr.toString(), "sasa -> aaa");
        });

    });
    describe("orderBy", function () {
        it('test toString', function () {
            assert.equal(arr.orderBy(), "empty");
        });

        it('test toString', function () {
            arr.add(4);
            arr.add(3);
            assert.equal(arr.orderBy(),'3, 4');
        });
        it('test toString', function () {
            arr.add("lubo");
            arr.add("Angel");
            assert.equal(arr.orderBy(),'Angel, lubo');
        });




    });
});