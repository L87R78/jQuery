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

    //let p = $('<a href="#">lubbo</a>')

    $(id).append(textArea);
    $(id).append(buttonIncrement);
    $(id).append(buttonAdd);
    $(id).append(unordoredList);
    //$(id).append(p);

}


/*
function increment(selector) {

   let textArea = $('<textarea>');
   textArea.val(0);
   textArea.addClass('counter');

   textArea.attr('disabled',true)

   textArea.appendTo($(selector))
   /*

 ('<button class="btn" id="incrementBtn">Increment</button>').click(addOneToValue).appendTo($(selector));
   $('<button class="btn" id="addBtn">Add</button>').click(appendIt).appendTo($(selector));
   $('<ul class="results"></ul>').appendTo($(selector))
   function addOneToValue() {
       let oldValue =  $('textarea').val();
       $('textarea').val(+oldValue+1)
   }
   function appendIt() {
       $('.results').append(`<li>${$('textarea').val()}</li>`)
   }


}
*/