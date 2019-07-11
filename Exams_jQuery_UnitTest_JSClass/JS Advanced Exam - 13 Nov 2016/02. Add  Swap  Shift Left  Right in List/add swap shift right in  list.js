let assert = require('chai').assert;


function createList() {
    let data = [];
    return {
        add: function (item) {
            data.push(item)
        },
        shiftLeft: function () {
            if (data.length > 1) {
                let first = data.shift();
                data.push(first);
            }
        },
        shiftRight: function () {
            if (data.length > 1) {
                let last = data.pop();
                data.unshift(last);
            }
        },
        swap: function (index1, index2) {
            if (!Number.isInteger(index1) || index1 < 0 || index1 >= data.length ||
                !Number.isInteger(index2) || index2 < 0 || index2 >= data.length ||
                index1 === index2) {
                return false;
            }
            let temp = data[index1];
            data[index1] = data[index2];
            data[index2] = temp;
            return true;
        },
        toString: function () {
            return data.join(", ");
        }
    };
}

describe("list", function () {

    let list;

    beforeEach(() => {
        list = createList();
    });
    describe("has data array", function () {
        it('has empty array', function () {
            assert.equal(list.toString(), "")
        });
    });

    describe("add", function () {
        it('has empty array', function () {
            list.add("2");
            list.add("3");

            assert.equal(list.toString(), "2, 3")
        });
    });
    describe("shiftLeft", function () {
        it('has empty array', function () {
            list.add("2");
            list.add("3");
            list.shiftLeft();

            assert.equal(list.toString(), "3, 2")
        });
    });
    describe("shiftRight", function () {
        it('has empty array', function () {
            list.add("2");
            list.add("3");
            list.add("6");
            list.shiftRight();

            assert.equal(list.toString(), "6, 2, 3")
        });
    });
    describe("swap", function () {
        it('Should return false', function () {
            list.add(3);
            list.add(5);
            list.add(2);

            //for first index
            assert.equal(list.swap(-1, 1), false);
            assert.equal(list.swap('sass', 3), false);
            assert.equal(list.swap(2.3, 2), false);
            assert.equal(list.swap(1, 'sasas'), false);
            assert.equal(list.swap(3, 2), false);
            //for second index
            assert.equal(list.swap(1, -1), false);
            assert.equal(list.swap(3,'sass'), false);
            assert.equal(list.swap(2, 2.5), false);
            assert.equal(list.swap('sasas', 1), false);
            assert.equal(list.swap(2, 3), false);

            //for object
            assert.equal(list.swap(1, {}), false);
            assert.equal(list.swap({}, 1), false);

            assert.equal(list.swap(0, 0), false);
            assert.equal(list.swap(2, 2), false);
            assert.equal(list.swap(0, 1), true);
            assert.equal(list.swap(1, 0), true);

        });
        it('pesho', function () {
            list.add(1);
            list.add(2);
            list.swap(0,1);
            assert.equal(list.toString(), '2, 1')
        })
        
    });

    describe("toString", function () {
        it('Should return works', function () {
            list.add("2");
            list.add("3");
            list.add("6");
            assert.equal(list.toString(), "2, 3, 6")
        });
        it('Should return empty', function () {

            assert.equal(list.toString(), "")
        });
    });
});
