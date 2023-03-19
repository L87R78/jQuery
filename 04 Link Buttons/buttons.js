function attachEvents() {

    $('.button').on('click', function () {
        let current  = $(this)
        $('.selected').removeClass('selected')
        current.addClass('selected')
    })
}
