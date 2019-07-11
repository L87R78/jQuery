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
        //с това му казваме да се
        tr.fadeIn(1000)                // появява бавничко

    }

    function createCountry() {
        let country = $('#newCountryText');             //тук създаваме Create за държава и столица
        let capital = $('#newCapitalText');             //тук създаваме Create за държава и столица
        addCountryToTable(country.val(), capital.val()); //тук създаваме Create за държава и столица
        country.val('');     //тук им казваме след като сме ги създали да приемат празен стринг- да изчезнат
        capital.val('');     //тук им казваме след като сме ги създали да приемат празен стринг- да изчезнат
        fixRowLinks()
    }
    function moveRowUp(event) {
        let row = $(this).parent().parent();
        //console.log(row)
        //console.log(row.index())
        if(row.index() > Number(2)){
            row.insertBefore(row.prev())
            fixRowLinks()
        }
    }
    function moveRowDown() {
        let row = $(this).parent().parent()
        let lengthTable = $('#countriesTable').children('tbody').children('tr').length
        //console.log(row.index().length - 1)
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
        /*
        $('#countriesTable').find('tr')
            .find('a:contains("Up")').css('display', 'inline');
        $('#countriesTable').find('tr')
            .find('a:contains("Down")').css('display', 'inline');



        let firstRow = $('tr')
        $(firstRow[2]).find('a:contains("Up")').css('display', 'none')

                                                                                //така с тоя код всяко Up когато отиде до горе и загива
                                                                                //същото е и със Down когато отиде до долу се маха
                                                                                // а Delete си се маха както трябва да е
        let lastRow = $('tr')
        $(lastRow.last()).find('a:contains("Down")').css('display', 'none')
        */


        $('#countriesTable').find('tr')
            .find('a:contains("Up")').css('display', 'inline')

         console.log($('#countriesTable').find('tr'))

        $('#countriesTable').find('tr')
            .find('a:contains("Down")').css('display', 'inline')


        let firstRow = $('#countriesTable').find('tr')[2]                       //така с тоя код всяко Up когато отиде до горе и загива
        $(firstRow).find('a:contains("Up")').css('display', 'none')             //същото е и със Down когато отиде до долу се маха
                                                                                // а Delete си се маха както трябва да е
        console.log(firstRow)
        let lastRow = $('tr')
        $(lastRow.last()).find('a:contains("Down")').css('display', 'none')

    }
}