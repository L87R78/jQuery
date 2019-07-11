function attachEvents() {
   $('.button ').click(function () {
       $('.button').removeClass('selected');
       $(this).addClass('selected');
   })
}