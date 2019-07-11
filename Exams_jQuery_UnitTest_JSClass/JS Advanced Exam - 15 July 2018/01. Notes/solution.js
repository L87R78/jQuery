function addSticker() {
    let title = $('.title');
    let text = $('.content');

    if(title.val() !== "" && text.val() !== ""){
        let li = $('<li class="note-content">');
        let h2 = $('<h2>').text(title.val());
        let p = $('<p>').text(text.val());


         li.append($(`<a class="button">x</a>`));
         li.append(h2);
         li.append($('<hr>'));
         li.append(p);

        $('#sticker-list').append(li);
        title.val("");
        text.val("");

        $('.button').on('click', function () {
            this.parentNode.remove();
        });
    }
}