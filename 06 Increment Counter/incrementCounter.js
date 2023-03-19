function increment(id) {

    let textArea = $('<textarea class="counter" disabled="disabled"></textarea>');

    textArea.val(0);

    let buttonAdd = $('<button class="btn" id="addBtn">Add</button>');
    buttonAdd.click(add);
    function add() {
        let li = $(`<li>${textArea.val()}</li>`);
        li.appendTo(unordoredList);
    }

    let buttonIncrement = $('<button class="btn" id="incrementBtn">Increment</button>');
    buttonIncrement.click(addOne);
    function addOne() {
        let oldValue = textArea.val();
        textArea.val(Number(oldValue)+1);
    }

    let unordoredList = $('<ul class="results"></ul>');

    $(id).append(textArea);
    $(id).append(buttonIncrement);
    $(id).append(buttonAdd);
    $(id).append(unordoredList);
}
