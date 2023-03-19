function solve(selector) {

    $(selector).on('click', function () {

        let parent = $('#content').parent();
        let summaryText = $('#content strong').text();

        let div = $('<div id="summary">');
        let h2 = $('<h2>Summary</h2>');
        let paragraph = $('<p>').text(summaryText);

        parent.append(div);
        parent.find(div).append(h2);
        parent.find(div).append(paragraph);
    })
}