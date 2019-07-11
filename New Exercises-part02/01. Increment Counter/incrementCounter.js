function increment() {
    let container = $('#wrapper')
   let textArea = $('<textarea>')
       .addClass('counter')
       .attr("disabled", true);
   let count = 0;
   let currentNum = 0;
   let zero = +0;
   textArea.val(zero);

   let incrementBtn = $('<button>Increment</button>');
   incrementBtn.on('click', function () {
         count++;
       textArea.val(zero + count)
   });

    let addBtn = $('<button>Add</button>');
    let classResult = $('<ul>')
        .addClass('results');
    addBtn.on('click', function () {
        let li = $(`<li>${textArea[0].value}</li>`).appendTo(classResult);
        console.log(li);
    });
   container
       .append(textArea)
       .append(incrementBtn)
       .append(addBtn)
       .append(classResult)
}