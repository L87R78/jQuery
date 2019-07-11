function createBook (selector, bookName, author, isbn){

    let bookGenerator = (function (){
        let id = 1;
        return function (selector, bookName, author, isbn) {

            let container = $(selector);
            let bookContainer = $('<div>')
                .attr('id', `book${id}`)
                .css('border', "none");

            $(`<p class="title">${bookName}</p>`)
                .appendTo(bookContainer);
            $(`<p class="author">${author}</p>`)
                .appendTo(bookContainer);
            $(`<p class="isbn">${isbn}</p>`)
                .appendTo(bookContainer);

            let selectBtn = $('<button>Select</button>')
                .appendTo(bookContainer);
            let deSelectBtn = $('<button>Deselect</button>')
                .appendTo(bookContainer);

            container.append(bookContainer);
            id++;

            selectBtn.on('click', function () {
               bookContainer.css('border', "2px solid blue");
            });
            deSelectBtn.on('click', function () {
                bookContainer.css('border', "none");
            });

        }
    }());
bookGenerator(selector,bookName,author,isbn);
}


