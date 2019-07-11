let assert = require('chai').assert;



class SubscriptionCard {
    constructor(firstName, lastName, SSN) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._SSN = SSN;
        this._subscriptions = [];
        this._blocked = false;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get SSN() {
        return this._SSN;
    }

    get isBlocked() {
        return this._blocked;
    }

    addSubscription(line, startDate, endDate) {
        this._subscriptions.push({
            line,
            startDate,
            endDate
        });
    }

    isValid(line, date) {
        if (this.isBlocked) return false;
        return this._subscriptions.filter(s => s.line === line || s.line === '*')
            .filter(s => {
                return s.startDate <= date &&
                    s.endDate >= date;
            }).length > 0;
    }

    block() {
        this._blocked = true;
    }

    unblock() {
        this._blocked = false;
    }
}

module.exports = SubscriptionCard;
/*

describe("card", function () {

    describe("test constructor", function () {
        it('return true', function () {
            let card = new SubscriptionCard('Pesho', 'Petrov', '00000000');

            assert.equal(card.firstName, 'Pesho');
            assert.equal(card.lastName, 'Petrov');
            assert.equal(card.SSN, '00000000');
        });
    });

    describe("isBlocked test", function () {
        it('return false if card not blocked', function () {
            let card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            assert.equal(card.isBlocked, false);
        });
        it('return true if card is blocked', function () {
            let card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.block();
            assert.equal(card.isBlocked, true);
        });
        it('return false if card is block after unblock', function () {
            let card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.block();
            card.unblock();
            assert.equal(card.isBlocked, false);
        });
        it('return true if card unblock after block', function () {
            let card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.unblock();
            card.block();
            assert.equal(card.isBlocked, true);
        });
    });
    describe("addSubscription tests", function () {
        it('Add correctly subscription', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            assert.equal(card._subscriptions.length, 0);
            assert.equal(card._subscriptions[0], undefined);
            assert.toString(card._subscriptions, []);
        });

        it('Add correctly subscription', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            assert.equal(card._subscriptions.length, 1);
            assert.equal(card._subscriptions[0].line, '120');
            assert.toString(card._subscriptions[0].startDate, new Date('2018-04-22'));
            assert.toString(card._subscriptions[0].endDate, new Date('2018-05-21'));
        });
        it('Add correctly subscription', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            card.addSubscription('*', new Date('2018-05-25'), new Date('2018-06-24'));


            assert.equal(card._subscriptions.length, 2);
            assert.equal(card._subscriptions[0].line, '120');
            assert.toString(card._subscriptions[0].startDate, new Date('2018-04-22'));
            assert.toString(card._subscriptions[0].endDate, new Date('2018-05-21'));
            assert.equal(card._subscriptions[1].line, '*');
            assert.toString(card._subscriptions[1].startDate, new Date('2018-05-25'));
            assert.toString(card._subscriptions[1].endDate, new Date('2018-06-24'));
        });



    });
    describe("IsValid tests", function () {
        it('empty card', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            assert.equal(card.isValid('120', new Date('2018-04-22')), false);
        });
        it('one day before card', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            assert.equal(card.isValid('120', new Date('2018-04-21')), false);
        });
        it('one day after card', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            assert.equal(card.isValid('120', new Date('2018-05-22')), false);
        });

        it('on start date  card', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            assert.equal(card.isValid('120', new Date('2018-04-22')), true);
        });
        it('on end date  card', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            assert.equal(card.isValid('120', new Date('2018-05-21')), true);
        });
        it('on end date  card', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            assert.equal(card.isValid('121', new Date('2018-04-27')), false);
        });
                                // for *
        it('on end date  card', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('*', new Date('2018-04-22'), new Date('2018-05-21'));
            assert.equal(card.isValid('1SAASA21', new Date('2018-05-21')), true);
        });
        it('on end date  card', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('*', new Date('2018-04-22'), new Date('2018-05-21'));
            assert.equal(card.isValid('1SAASA21', new Date('2018-04-22')), true);
        });

        it('on end date  card', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('*', new Date('2018-04-22'), new Date('2018-05-21'));
            assert.equal(card.isValid('1SAASA21', new Date('2018-05-22')), false);
        });
        it('on den before date  card', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('*', new Date('2018-04-22'), new Date('2018-05-21'));
            assert.equal(card.isValid('1SAASA21', new Date('2018-04-21')), false);
        });
        it('block card', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('*', new Date('2018-04-22'), new Date('2018-05-21'));
            card.block()

            assert.equal(card.isValid('120', new Date('2018-04-24')), false);

        });

    });

    it('Should not change', function () {
        const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
        this.firstName = 'test';
        this.lastName = 'test';
        this.SSN = 'test';

        assert.equal(card.firstName, 'Pesho');
        assert.equal(card.lastName, 'Petrov');
        assert.equal(card.SSN, '00000000');

    });
});
*/




//------------------------------------------------SOLVE-02--------------------------------------------------



describe("SubscriptionCard", function () {

    describe("constructor tests", function () {
        it('should be initialized correct', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');

            assert.equal(card.firstName, 'Pesho');
            assert.equal(card.lastName, 'Petrov');
            assert.equal(card.SSN, '00000000');
        });
    });
    describe("blocked card tests", function () {
        it('should be return false for isBlocked', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            assert.equal(card.isBlocked, false);
        });
        it('should be return true for getter block', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.block();
            assert.equal(card.isBlocked, true);
        });
        it('should be return true for getter unblock', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.unblock();
            assert.equal(card.isBlocked, false);
        });
        it('should be return true for getter unblock', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.unblock();
            card.block();
            assert.equal(card.isBlocked, true);
        });
        it('should be return true for getter unblock', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.block();
            card.unblock();
            assert.equal(card.isBlocked, false);
        });
    });
    describe("addSubscription tests", function () {
        it('should be initialized correct', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');

            assert.equal(card._subscriptions.length, 0);

            assert.equal(card._subscriptions[0], undefined);
            assert.isDefined(card._subscriptions, []);
        });
        it('should be initialized correct', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));

            assert.equal(card._subscriptions.length, 1);

            assert.equal(card._subscriptions[0].line, '120');
            assert.isDefined(card._subscriptions[0].startDate, new Date('2018-04-22'));
            assert.isDefined(card._subscriptions[0].endDate, new Date('2018-05-21'));
        });
        it('should be initialized correct', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            card.addSubscription('*', new Date('2018-05-25'), new Date('2018-06-24'));

            assert.equal(card._subscriptions.length, 2);

            assert.equal(card._subscriptions[0].line, '120');
            assert.isDefined(card._subscriptions[0].startDate, new Date('2018-04-22'));
            assert.isDefined(card._subscriptions[0].endDate, new Date('2018-05-21'));

            assert.equal(card._subscriptions[1].line, '*');
            assert.isDefined(card._subscriptions[1].startDate, new Date('2018-05-25'));
            assert.isDefined(card._subscriptions[1].endDate, new Date('2018-06-24'));
        });
    });
    describe("isValid tests", function () {
        it('empty card', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('*', new Date('2018-05-25'), new Date('2018-06-24'));
            card.block();
            let test = card.isValid('120', new Date('2018-05-27'));
            assert.equal(test, false);
        });
        //false
        it('empty card', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');

            let test = card.isValid('120', new Date('2018-04-22'));
            assert.equal(test, false);
        });
        it('one day before', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));

            let test = card.isValid('120', new Date('2018-04-21'));
            assert.equal(test, false);
        });
        it('one day after', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));

            let test = card.isValid('120', new Date('2018-05-22'));
            assert.equal(test, false);
        });
        it('one day after', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));

            let test = card.isValid('1230', new Date('2018-04-25'));
            assert.equal(test, false);
        });
        it('one day after', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));

            let test = card.isValid('12ew0', new Date('2018-04-20'));
            assert.equal(test, false);
        });
        it('one day after', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));

            let test = card.isValid('[]', new Date('2018-04-26'));
            assert.equal(test, false);
        });





        //true
        it('on start day ', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));

            let test = card.isValid('120', new Date('2018-04-22'));
            assert.equal(test, true);
        });
        it('on start day ', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));

            let test = card.isValid('120', new Date('2018-04-27'));
            assert.equal(test, true);
        });
        it('on end day ', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));

            let test = card.isValid('120', new Date('2018-05-21'));
            assert.equal(test, true);
        });
        it('on end day ', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));

            let test = card.isValid('120', new Date('2018-05-12'));
            assert.equal(test, true);
        });







                                    // for * test
        it('one day before', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('*', new Date('2018-04-22'), new Date('2018-05-21'));

            let test = card.isValid('dsds', new Date('2018-04-21'));
            assert.equal(test, false);
        });
        it('one day after', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('*', new Date('2018-04-22'), new Date('2018-05-21'));

            let test = card.isValid('dsds', new Date('2018-05-22'));
            assert.equal(test, false);
        });

        //true
        it('on start day ', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('*', new Date('2018-04-22'), new Date('2018-05-21'));

            let test = card.isValid('dsdsd', new Date('2018-04-22'));
            assert.equal(test, true);
        });
        it('on end day ', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('*', new Date('2018-04-22'), new Date('2018-05-21'));

            let test = card.isValid('dssds', new Date('2018-05-21'));
            assert.equal(test, true);
        });
        it('on end day ', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('*', new Date('2018-04-22'), new Date('2018-05-21'));

            let test = card.isValid([], new Date('2018-05-21'));
            assert.equal(test, true);
        });
        it('on end day ', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('*', new Date('2018-04-22'), new Date('2018-05-21'));

            let test = card.isValid({}, new Date('2018-05-21'));
            assert.equal(test, true);
        });
        it('on end day ', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('*', new Date('2018-04-22'), new Date('2018-05-21'));

            let test = card.isValid(new Date(), new Date('2018-05-21'));
            assert.equal(test, true);
        });

    });
    describe("names tests", function () {
        it('should be initialized correct', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.firstName = 'Gosho';
            assert.equal(card.firstName, 'Pesho');
        });

        it('should be initialized correct', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.lastName = 'Gosho';
            assert.equal(card.lastName, 'Petrov');
        });
        it('should be initialized correct', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.SSN = 'Gossasho';
            assert.equal(card.SSN, '00000000');
        });
    });
});




































