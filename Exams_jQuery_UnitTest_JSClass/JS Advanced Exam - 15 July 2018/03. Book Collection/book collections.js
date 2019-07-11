class BookCollection {
    constructor(genre, room, capacity){
        this.room = room;
        this.shelfCapacity = capacity;
        this.shelfGenre = genre;
        this.shelf = [];
    }

    get room (){
        return this._room;
    }

    set room(currentRoom){
        switch (currentRoom) {
            case 'livingRoom':
            case 'bedRoom':
            case 'closet':
            this._room = currentRoom;
            break;

            default:
                throw new Error (`Cannot have book shelf in ${currentRoom}`);
                break;
        }
    }

    addBook(bookName,bookAuthor, genre){
        if(this.shelfCondition() === 0){
            this.shelf.shift();
        }
        let book = {bookName, bookAuthor, genre};

        this.shelf.push(book);
        this.shelf.sort((book1,book2) => book1['bookAuthor'].localeCompare(book2['bookAuthor']))
        return this;
    }
    throwAwayBook(bookName){
        this.shelf =  this.shelf.filter((b) => b.bookName   !== bookName);
    }
    showBooks(genre){
        let output = "";
        let wantedBooks = this.shelf.filter((b) => b.genre === genre);
        if(wantedBooks.length > 0){
            output += `Result for search \"${genre}\":\n`;
            wantedBooks.forEach((book) => {
                output += `\uD83D\uDCD6 ${book.bookAuthor} – "${book.bookName}"\n`;
            })
        }

        return output;

    }
    toString(){
        let output = "";
       if(this.shelf.length > 0){
            output += `\"${this.shelfGenre}\" shelf in ${this.room} contains:`;
            this.shelf.forEach((book) => {

                output += `\n\uD83D\uDCD6 \"${book.bookName}\" = ${book.bookAuthor}`
            });
       }else{
           output = `it\'s an empty shelf`;
       }
       return output
    }

    shelfCondition(){
        return Math.max(0, this.shelfCapacity - this.shelf.length);
    }
}

// let livingRoom = new BookCollection("Programming", "livingRoom", 5)
//
// livingRoom.addBook("book1", "author1", 'history')
// livingRoom.addBook("book2", "author2", 'lubo')
// livingRoom.addBook("book3", "author3", 'history')
//
//
// console.log(livingRoom.toString());
