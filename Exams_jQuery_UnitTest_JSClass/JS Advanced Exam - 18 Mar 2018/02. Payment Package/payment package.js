let expect = require('chai').expect;


class PaymentPackage {
    constructor(name, value) {
        this.name = name;
        this.value = value;
        this.VAT = 20;      // Default value
        this.active = true; // Default value
    }

    get name() {
        return this._name;
    }

    set name(newValue) {
        if (typeof newValue !== 'string') {
            throw new Error('Name must be a non-empty string');
        }
        if (newValue.length === 0) {
            throw new Error('Name must be a non-empty string');
        }
        this._name = newValue;
    }

    get value() {
        return this._value;
    }

    set value(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('Value must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('Value must be a non-negative number');
        }
        this._value = newValue;
    }

    get VAT() {
        return this._VAT;
    }

    set VAT(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('VAT must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('VAT must be a non-negative number');
        }
        this._VAT = newValue;
    }

    get active() {
        return this._active;
    }

    set active(newValue) {
        if (typeof newValue !== 'boolean') {
            throw new Error('Active status must be a boolean');
        }
        this._active = newValue;
    }

    toString() {
        const output = [
            `Package: ${this.name}` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${this.value}`,
            `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`
        ];
        return output.join('\n');
    }
}

describe('tests',()=>{
    it('should have properties',()=>{
        let Pp = new PaymentPackage('name',1);
        expect(Pp.VAT).to.equal(20)
    })
    it('should have properties',()=>{
        let Pp = new PaymentPackage('name',1);
        expect(Pp.active).to.equal(true)
    })
    it('should have properties',()=>{
        expect(()=>new PaymentPackage('name',-1)).to.throw(Error)
    })
    it('should have properties',()=>{
        expect(()=>new PaymentPackage('name','opa')).to.throw(Error)
    })
    it('should have properties',()=>{
        expect(()=>new PaymentPackage('',1)).to.throw(Error)
    })
    it('should have properties',()=>{
        expect(()=>new PaymentPackage(1,2)).to.throw(Error)
    })
    it('should have properties',()=>{
        let Pp = new PaymentPackage('name',1);
        expect(()=>Pp.VAT=-1).to.throw(Error)
    })
    it('should have properties',()=>{
        let Pp = new PaymentPackage('name',1);
        expect(()=>Pp.VAT='o').to.throw(Error)
    })
    it('should have properties',()=>{
        let Pp = new PaymentPackage('name',1);
        expect(()=>Pp.active='trau').to.throw(Error)
    })
    it('should have properties',()=>{
        let Pp = new PaymentPackage('name',1);
        expect(()=>Pp.active='false').to.throw(Error)
    })
    it('should have properties',()=>{
        let Pp = new PaymentPackage('name',1);
        expect(()=>Pp.name=2).to.throw(Error)
    })
    it('should have properties',()=>{
        let Pp = new PaymentPackage('name',1);
        expect(()=>Pp.value=-1).to.throw(Error)
    })
    it('should have properties',()=>{
        let Pp = new PaymentPackage('name',1);
        Pp.value = 12;
        expect(Pp.value).to.equal(12)
    })
    it('should have properties',()=>{
        let Pp = new PaymentPackage('name',1);
        Pp.value =0;
        expect(Pp.value).to.equal(0)
    })
    it('should have properties',()=>{
        let Pp = new PaymentPackage('name',1);
        Pp.name ='mara';
        expect(Pp.name).to.equal('mara')
    })
    it('should have properties',()=>{
        let Pp = new PaymentPackage('name',1);
        Pp.VAT =0;
        expect(Pp.VAT).to.equal(0)
    })
    it('should have properties',()=>{
        let Pp = new PaymentPackage('name',1);
        Pp.active =true;
        expect(Pp.active).to.equal(true)
    })
    it('should have properties',()=>{
        let Pp = new PaymentPackage('name',1);
        Pp.active =false;
        expect(Pp.active).to.equal(false)
    })
    it('should have properties',()=>{
        let Pp = new PaymentPackage('name',1);
        Pp.active =false;
        expect(Pp.toString()).to.equal('Package: name (inactive)\n- Value (excl. VAT): 1\n- Value (VAT 20%): 1.2')
    })
    it('should have properties',()=>{
        let Pp = new PaymentPackage('name',1);

        expect(Pp.toString()).to.equal('Package: name\n- Value (excl. VAT): 1\n- Value (VAT 20%): 1.2')
    })
})