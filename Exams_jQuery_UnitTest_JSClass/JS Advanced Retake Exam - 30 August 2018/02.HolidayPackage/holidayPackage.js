let assert = require('chai').assert;

class HolidayPackage {
    constructor(destination, season) {
        this.vacationers = [];
        this.destination = destination;
        this.season = season;
        this.insuranceIncluded = false; // Default value
    }

    showVacationers() {
        if (this.vacationers.length > 0)
            return "Vacationers:\n" + this.vacationers.join("\n");
        else
            return "No vacationers are added yet";
    }

    addVacationer(vacationerName) {
        if (typeof vacationerName !== "string" || vacationerName === ' ') {
            throw new Error("Vacationer name must be a non-empty string");
        }
        if (vacationerName.split(" ").length !== 2) {
            throw new Error("Name must consist of first name and last name");
        }
        this.vacationers.push(vacationerName);
    }

    get insuranceIncluded() {
        return this._insuranceIncluded;
    }

    set insuranceIncluded(insurance) {
        if (typeof insurance !== 'boolean') {
            throw new Error("Insurance status must be a boolean");
        }
        this._insuranceIncluded = insurance;
    }

    generateHolidayPackage() {
        if (this.vacationers.length < 1) {
            throw new Error("There must be at least 1 vacationer added");
        }
        let totalPrice = this.vacationers.length * 400;

        if (this.season === "Summer" || this.season === "Winter") {
            totalPrice += 200;
        }

        totalPrice += this.insuranceIncluded === true ? 100 : 0;

        return "Holiday Package Generated\n" +
            "Destination: " + this.destination + "\n" +
            this.showVacationers() + "\n" +
            "Price: " + totalPrice;
    }
}

describe("tests", function () {
    let HolidayPacked;

    beforeEach(() => {
        HolidayPacked = new HolidayPackage('Italy', 'Summer');

    });

    it('test', function () {
        assert.equal(HolidayPacked.insuranceIncluded, false)
    });
    it('test', function () {
        assert.equal(HolidayPacked.showVacationers(), "No vacationers are added yet")
    });
    it('test', function () {
        assert.throws(() => HolidayPacked.generateHolidayPackage());
    });
    it('test', function () {
        assert.throws(() => HolidayPacked.addVacationer(2));
    });
    it('test', function () {
        assert.throws(() => HolidayPacked.addVacationer(' '));
    });
    it('test', function () {
        assert.throws(() => HolidayPacked.addVacationer('Pesho'));
    });

    //------------------testing print
    it('test', function () {
        HolidayPacked.addVacationer('Ivan Ivanov');
        HolidayPacked.addVacationer('Pesho Peshev');
        assert.equal(HolidayPacked.showVacationers(), 'Vacationers:\nIvan Ivanov\nPesho Peshev')
    });
    it('test', function () {
        HolidayPacked.addVacationer('Ivan Ivanov');
        HolidayPacked.addVacationer('Pesho Peshev');
        assert.equal(HolidayPacked.generateHolidayPackage(),
            "Holiday Package Generated\nDestination: Italy\nVacationers:\nIvan Ivanov\nPesho Peshev\nPrice: 1000");
    });
});
