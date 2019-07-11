class LineManager{
    constructor(arr){
        this.arr = arr;
        this.currentStop = 0;
        this.delay = 0;
        this.totalDuration = 0;
    }
    get atDepot() {
        return this.currentStop === this._arr.length - 1;
    }
    get nextStopName() {
        if(this.atDepot){
            return "At Depot"
        }
        return  this._arr[this.currentStop + 1].name;
    }

    get currentDelay(){
        return this.delay;
    }
    set arr(value) {
        if(!Array.isArray(value)){
            throw new Error("input in not array")
        }
        for (let i = 0; i < value.length; i++) {
            if(typeof value[i].name !== "string" || typeof value[i].timeToNext !== "number" ||
                typeof value[i].name === '' || typeof value[i].timeToNext < 0){
                throw new Error("invalid Name or Number")
            }

        }

      //  this.atDepot();
        return this._arr = value;
    }

    arriveAtStop(minutes){
        if(minutes < 0 || this.atDepot){
            throw new Error("invalid Name or Number")
        }
        this.totalDuration += minutes;
        this.delay += minutes - this._arr[this.currentStop].timeToNext;
        this.currentStop++;
        return !this.atDepot;

    }

    toString(){
      let line = this.atDepot ? "- Course completed" : `- Next stop: ${this._arr[this.currentStop + 1].name}`;
        return `Line summary
${line}
- Stops covered: ${this.currentStop}
- Time on course: ${this.totalDuration} minutes
- Delay: ${this.delay} minutes`
    }
}

// Initialize a line manager with correct values
const man = new LineManager([
    {name: 'Depot', timeToNext: 4},
    {name: 'Romanian Embassy', timeToNext: 2},
    {name: 'TV Tower', timeToNext: 3},
    {name: 'Interpred', timeToNext: 4},
    {name: 'Dianabad', timeToNext: 2},
    {name: 'Depot', timeToNext: 0},
]);
console.log(man);

//Travel through all the stops until the bus is at depot
while(man.atDepot === false) {
    console.log(man.toString());
    man.arriveAtStop(4);
}

console.log(man.toString());

// Should throw an Error (minutes cannot be negative)
//man.arriveAtStop(-4);
// Should throw an Error (last stop reached)
//man.arriveAtStop(4);

// Should throw an Error at initialization
//const wrong = new LineManager([
//    { name: 'Stop', timeToNext: { wrong: 'Should be a number'} }
//]);

