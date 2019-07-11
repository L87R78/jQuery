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

    /*
    $(selector).on('click', function () {
        let summaryText = $('#content strong').text();

        let summary = $('<div>');
        summary.attr('id', 'summary');
        let title = $('<h2>').text('Summary');
        let paragraph = $('<p>').text(summaryText);

        summary.append(title);
        summary.append(paragraph);
        let parent = $('#content').parent();
        parent.append(summary);

    })
    */
}