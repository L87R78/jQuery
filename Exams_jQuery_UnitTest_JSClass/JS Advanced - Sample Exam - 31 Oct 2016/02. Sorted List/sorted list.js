let assert = require('chai').assert;

class SortedList {
    constructor() {
        this.list = [];
    }

    add(element) {
        this.list.push(element);
        this.sort();
    }

    remove(index) {
        this.vrfyRange(index);
        this.list.splice(index, 1);
    }

    get(index) {
        this.vrfyRange(index);
        return this.list[index];
    }

    vrfyRange(index) {
        if (this.list.length == 0) throw new Error("Collection is empty.");
        if (index < 0 || index >= this.list.length) throw new Error("Index was outside the bounds of the collection.");
    }

    sort() {
        this.list.sort((a, b) => a - b);
    }

    get size() {
        return this.list.length;
    }
}

describe("list", function () {

    let arr;

    beforeEach(() => {
        arr = new SortedList();
    });
    describe("check all func ", function () {
        it('test arr', function () {
            assert.equal(arr.list !== undefined, true)
        });
        it('test add', function () {
            assert.equal(SortedList.prototype.hasOwnProperty('add'), true)
        });
        it('test remove', function () {
            assert.equal(SortedList.prototype.hasOwnProperty('remove'), true)
        });
        it('test vrfyRange', function () {
            assert.equal(SortedList.prototype.hasOwnProperty('vrfyRange'), true)
        });
        it('test sort', function () {
            assert.equal(SortedList.prototype.hasOwnProperty('sort'), true)
        });
        it('test get', function () {
            assert.equal(SortedList.prototype.hasOwnProperty('get'), true)
        });
        it('test size', function () {
            assert.equal(SortedList.prototype.hasOwnProperty('size'), true)
        });
    });
    describe("add", function () {
        it('test add', function () {
            arr.add(5);
            assert.equal(arr.list.join(', '), 5);
        });
        it('test add', function () {
            arr.add(-5);
            assert.equal(arr.list.join(', '), -5);
        });
        it('test add', function () {
            arr.add("sasa");
            assert.equal(arr.list.join(', '), 'sasa');
        });
        it('test add', function () {
            arr.add([]);
            assert.equal(arr.list.join(', '), []);
        });
    });
    describe("sort", function () {
        it('test sort', function () {
            arr.add(7);
            arr.add(2);
            arr.add(5);
            assert.equal(arr.list.sort().join(', '), '2, 5, 7');
        });
        it('test sort', function () {
            arr.add("c");
            arr.add("a");
            arr.add("b");
            assert.equal(arr.list.sort().join(', '), 'a, b, c');
        });
    });
    describe("remove", function () {
        it('test remove', function () {
            assert.throws(() => arr.remove(), 'Collection is empty.');
        });
        it('test remove', function () {
            arr.add(2);
            assert.throws(() => arr.remove(-1), 'Index was outside the bounds of the collection.');
        });
        it('test remove', function () {
            arr.add(2);
            assert.throws(() => arr.remove(1), 'Index was outside the bounds of the collection.');
        });
        it('test remove', function () {
            arr.add(2);
            assert.throws(() => arr.remove(2), 'Index was outside the bounds of the collection.');
        });
        it('test remove', function () {
            arr.add(2);
            arr.add(5);
            arr.add(1);
            arr.remove(1);
            assert.equal(arr.list.join(', '), '1, 5');
        });
    });
    describe("get", function () {
        it('test get', function () {
            assert.throws(() => arr.get(), 'Collection is empty.');
        });
        it('test get', function () {
            arr.add(2);
            assert.throws(() => arr.get(-1), 'Index was outside the bounds of the collection.');
        });
        it('test get', function () {
            arr.add(2);
            assert.throws(() => arr.get(1), 'Index was outside the bounds of the collection.');
        });
        it('test get', function () {
            arr.add(2);
            assert.throws(() => arr.get(2), 'Index was outside the bounds of the collection.');
        });
        it('test get', function () {
            arr.add(2);
            arr.add(5);
            arr.add(1);
            arr.get(1);
            assert.equal(arr.list.join(', '), '1, 2, 5');
        });
        it('test get', function () {
            arr.add(2);
            arr.add(5);
            arr.add(1);
            arr.get();
            assert.equal(arr.list.length, 3);
        });
        it('test get', function () {
            arr.add(2);
            arr.add(5);
            arr.add(1);
            let result = arr.get(1);
            assert.equal(result, 2);
        });
    });
    describe("size", function () {
        it('test size', function () {
            arr.add(2);
            arr.add(5);
            arr.add(1);

            assert.equal(arr.size, 3);
        });


    });
});
