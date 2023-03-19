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
                .append($('<a href="#">[Up] </a>').click(moveRowUp))

                .append($('<a href="#">[Down] </a>').click(moveRowDown))

                .append($('<a href="#">[Delete]</a>').click(deleteRow)));

        $(tr).css('display', 'none');
        $('#countriesTable').append(tr);
        tr.fadeIn(1000)

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
        if(row.index() > Number(2)){
            row.insertBefore(row.prev())
            fixRowLinks()
        }
    }
    function moveRowDown() {
        let row = $(this).parent().parent()
        let lengthTable = $('#countriesTable').children('tbody').children('tr').length

        if(row.index() < lengthTable - 1){
            row.insertAfter(row.next());
            fixRowLinks()
        }

    }
    function deleteRow() {
        let rowDelete = $(this).parent().parent();
        $('#countriesTable').find(rowDelete).remove();
        fixRowLinks()
    }
    function fixRowLinks() {
        $('#countriesTable').find('tr')
            .find('a:contains("Up")').css('display', 'inline')

         console.log($('#countriesTable').find('tr'))

        $('#countriesTable').find('tr')
            .find('a:contains("Down")').css('display', 'inline')


        let firstRow = $('#countriesTable').find('tr')[2]                     
        $(firstRow).find('a:contains("Up")').css('display', 'none')             
                                                                              
        let lastRow = $('tr')
        $(lastRow.last()).find('a:contains("Down")').css('display', 'none')
    }
}