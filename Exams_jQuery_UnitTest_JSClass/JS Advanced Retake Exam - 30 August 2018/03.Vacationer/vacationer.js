class Vacationer {

    constructor(fullName, idNumber, creditCard , wishList){
        this.fullName = fullName;
        this.creditCard = creditCard;
        this.idNumber = idNumber;

        this.wishList = wishList;

    }

    get creditCard() {
        return this._creditCard;
    }

    set creditCard(value) {
        if(value === undefined){
            this._creditCard  = {
                cardNumber: 1111,
                expirationDate: "",
                securityNumber: 111
            };
            this.wishList = [];

            return this._creditCard;
        }

        //this._creditCard = value;
        this.generateIDNumber();
        //return this._creditCard;

    }

    get fullName() {
        return this._fullName;
    }

    set fullName(value) {
        if(value.length < 3){
            throw new Error ("Name must include first name, middle name and last name");
        }
        let oneName = value[0][0];
        let twoName = value[1][0];
        let threeName = value[2][0];

        let newFirstName = value[0].slice(1, value[0].length);
        let newMiddlName = value[1].slice(1, value[1].length);
        let newLastName = value[2].slice(1, value[2].length);
        let isCheckForUpLetter = false;

        //check newFirstName
        for (let letter of newFirstName) {
            if(letter !== letter.toLowerCase()){
                isCheckForUpLetter = true;
            }
        }
        //check newMiddlName
        for (let letter of newMiddlName) {
            if(letter !== letter.toLowerCase()){
                isCheckForUpLetter = true;
            }
        }
        //check newLastName
        for (let letter of newLastName) {
            if (letter !== letter.toLowerCase()) {
                isCheckForUpLetter = true;
            }
        }


        if(oneName !== oneName.toUpperCase() || twoName !== twoName.toUpperCase() || threeName !== threeName.toUpperCase() || isCheckForUpLetter === true){
            throw new Error ("Invalid full name");
        }
        this._fullName = value;
    }

    generateIDNumber(){
        let arr =  this._fullName;
        let firstLetterASCII = arr[0][0].charCodeAt(0);
        let result1 = 231 * firstLetterASCII;
        let result2 = 139 * arr[1].length;
        let finish = (result1 + result2).toString();

        let getLastLetterOnLastName = arr[2].substr(arr[2].length - 1);


        for (let letter of getLastLetterOnLastName) {
            if(letter === 'a' || letter === 'e' || letter === 'o' || letter === 'i' || letter === 'u'){
                finish += "8";
            }else{
                finish += "7";
            }
        }
        return this.idNumber = finish;
    }
    addCreditCardInfo(input){
        if(input.length < 3){
            throw new Error (" Missing credit card information");
        }else if(typeof(input[0]) !== 'number' || typeof(input[2]) !== 'number'){
            throw new Error ("Invalid credit card details");
        }
        return input //?
    }

    addDestinationToWishList(destination){
        if(this.wishList.length === 0){
             return this.wishList.push(destination)
        }

        if (this.wishList.indexOf(destination) > -1) {
            throw new Error("Destination already exists in wishlist");
        } else {
            return this.wishList.push(destination)
        }
    }
    getVacationerInfo(){
        let arr = [];
        console.log(`Name: ${this.fullName[0]} ${this.fullName[1]} ${this.fullName[2]}`);
        console.log(`ID number: ${this.idNumber}`);
        console.log("Wishlist");
        if(this.wishList.length === 0){
            console.log("empty")
        }else{
            this.wishList.sort(function(a, b){
                return a.length > b.length
            });
            console.log(this.wishList.join(', '))
        }
        console.log("Credit Card:");
        console.log(`Card Number: ${this._creditCard.cardNumber}`);
        console.log(`Expiration Date: ${this._creditCard.expirationDate}`);
        console.log(`Security Number: ${this._creditCard.securityNumber}`);
        console.log()


    }
}
// Initialize vacationers with 2 and 3 parameters
let vacationer1 = new Vacationer(["Vania", "Ivanova", "Zhivkova"]);
let vacationer2 = new Vacationer(["Tania", "Ivanova", "Zhivkova"],
    [123456789, "10/01/2018", 777]);

// Should throw an error (Invalid full name)
try {
    let vacationer3 = new Vacationer(["Vania", "Ivanova", "ZhiVkova"]);
} catch (err) {
    console.log("Error: " + err.message);
}

// Should throw an error (Missing credit card information)
try {
    let vacationer3 = new Vacationer(["Zdravko", "Georgiev", "Petrov"]);
    vacationer3.addCreditCardInfo([123456789, "20/10/2018"]);
} catch (err) {
    console.log("Error: " + err.message);
}

 vacationer1.addDestinationToWishList('Spain');
 vacationer1.addDestinationToWishList('Germany');
 vacationer1.addDestinationToWishList('Bali');

// // Return information about the vacationers
 console.log(vacationer1.getVacationerInfo());
 console.log(vacationer2.getVacationerInfo());
