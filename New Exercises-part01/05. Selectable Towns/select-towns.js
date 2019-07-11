function attachEvents() {
    let items = $('#items li');

    let arr = [];

    items.on('click', function () {
        if ($(this).attr('data-selected')){
            $(this).removeAttr('data-selected');
            $(this).css('background', '');
        }else{
            $(this).attr('data-selected', true);
            $(this).css('background', '#DDD');
            arr.push($(this)[0].textContent);
        }
    });
    let resultTown =  $('#showTownsButton');
    resultTown.on('click', function () {

       $('#selectedTowns').html(`Selected towns: ${arr.join(', ')}`)
    })
}