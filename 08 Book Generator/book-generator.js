function createBook(selector, title, author, ISBN ) {
    //let textArea = $(`<div class="counter" disabled="disabled"></div>`);
    //let buttonIncrement = $('<button class="btn" id="incrementBtn">Increment</button>');

    let numberOfBook = $(`${selector} div`).length+1;
    let id = 'book'+numberOfBook;
    let book = $(`<div style="border: medium none;">`);
    book.attr('id',id);

    let p1 = $(`<p class="title">${title}</p>`);
    let p2 = $(`<p class="author">${author}</p>`);
    let p3 = $(`<p class="isbn">${ISBN}</p>`);

    let BottonSelect = $('<button>Select</button>');
    BottonSelect.click(select);
    function select() {
        book.css('border','2px solid blue')
    }

    let BottonDeselect = $('<button>Deselect</button>');
    BottonDeselect.click(deselect);
    function deselect() {
        book.css('border','none')
    }

    book.append(p1).append(p2).append(p3).append(BottonSelect).append(BottonDeselect);
    $(selector).append(book);
}