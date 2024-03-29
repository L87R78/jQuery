function initializeTable() {
    $("#createLink").click(createCountry);
    addCountryToTable("Bulgaria", "Sofia");
    addCountryToTable("Germany", "Berlin");
    addCountryToTable("Russia", "Moscow");
    fixRowLinks();

    function addCountryToTable(country, capital) {
        let tr = $('<tr>')
            .append($('<td>').text(country))
            .append($('<td>').text(capital))
            .append($('<td>')
                .append($('<a href="#">[Up]</a>').click(moveRowUp))
                .append(' ')
                .append($('<a href="#">[Down]</a>').click(moveRowDown))
                .append(' ')
                .append($('<a href="#">[Delete]</a>').click(deleteRow)));

        $('#countriesTable').append(tr);

        $(tr).css('display', 'none');
        tr.fadeIn(2000)
    }

    function createCountry() {
        let country = $('#newCountryText');
        let capital = $('#newCapitalText');

        addCountryToTable(country.val(), capital.val());

        country.val('');
        capital.val('');

        fixRowLinks()
    }
    function moveRowUp(event) {
        let row = $(this).parent().parent();
        if(row.index() > 2) {
            row.fadeOut(500, function () {
                row.insertBefore(row.prev());
                row.fadeIn(500);
                fixRowLinks()
            })
        }
    }
    function moveRowDown() {

        let row = $(this).parent().parent();
        if(row.index() > row.length) {
            row.fadeOut(500, function () {
                row.insertAfter(row.next());
                row.fadeIn(500);
                fixRowLinks()
            })
        }
    }
    function deleteRow() {
        let element = $(this).parent().parent();
        element.fadeOut(function () {
            element.remove();
            fixRowLinks()
        })
    }
    function fixRowLinks() {

        $('#countriesTable').find('tr')
            .find('a:contains("Up")').css('display', 'inline');

        $('#countriesTable').find('tr')
           .find('a:contains("Down")').css('display', 'inline');

        let firstRow = $('#countriesTable').find('tr')[2];          
        $(firstRow).find('a:contains("Up")').css('display', 'none');                                               

        let lastRow = $('tr')
        $(lastRow.last()).find('a:contains("Down")').css('display', 'none')
    }
}