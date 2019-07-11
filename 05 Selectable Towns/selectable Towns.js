function attachEvents() {
    $('#items > li').on('click', function () {
        let arr = []
        if(!$(this).attr('data-selected')){
            $(this).attr('data-selected', true)
            $(this).css('background-color', '#DDD')
            arr.push($(this).attr('data-selected'))
        }else{
            $(this).removeAttr('data-selected')
            $(this).css('background-color', 'white')
        }
        $('#showTownsButton').on('click', function(){
            let resultTowns = $('#items > li[data-selected]')
                .toArray().map(li => li.textContent)
                .join(', ')
            $('#selectedTowns').text('Selected towns: ' + resultTowns)
        })
    })
}