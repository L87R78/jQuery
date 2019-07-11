function attachEvents() {

    $('.button').on('click', function () {
        let current  = $(this)
        //console.log(current.hasClass)
        $('.selected').removeClass('selected')
        current.addClass('selected')
    })
}
