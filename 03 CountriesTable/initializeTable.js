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

        $(tr).css('display', 'none');   //с това му казваме да се
        tr.fadeIn(2000)                // появява бавничко

        //console.log(tr)
        //console.log(addCountryToTable)
    }

    function createCountry() {
        let country = $('#newCountryText');    //тук създаваме Create за държава и столица
        let capital = $('#newCapitalText');     //тук създаваме Create за държава и столица

        addCountryToTable(country.val(), capital.val()); //тук създаваме Create за държава и столица

        country.val('');     //тук им казваме след като сме ги създали да приемат празен стринг- да изчезнат
        capital.val('');     //тук им казваме след като сме ги създали да приемат празен стринг- да изчезнат

        fixRowLinks()
    }
    function moveRowUp(event) {
        //let test = $(event.target) // така взимаме само Up
        //console.log(test)

        //let test = $(this).parent() // така взимаме само Up Down Delete
        //console.log(test)

        //let test = $(this).parent().parent().children().get(0)    //това взима само Germany
        let row = $(this).parent().parent();          //така взима целия ред -   Germany	Berlin	[Up] [Down] [Delete];
        //console.log(test)

        if(row.index() > 2) {
            row.fadeOut(500, function () {
                row.insertBefore(row.prev()); // това казва да премести целия ред нагоре,инсертними този ред със предишния
                row.fadeIn(500);
                fixRowLinks()

            })
        }
    }
    function moveRowDown() {

        let row = $(this).parent().parent();
        if(row.index() > row.length) {
            row.fadeOut(500, function () {
                row.insertAfter(row.next()); //казва инсертними този ред със следващия
                row.fadeIn(500);
                fixRowLinks()
            })
        }
    }
    function deleteRow() {
        //let element = $(this).parent().parent().children('td:last')       //така изтривам цалата колонка с [Up] [Down] [Delete]
        //let element = $(this).parent().parent().children('td:first')       //така изтривам country(Germany)
        let element = $(this).parent().parent();          //така изтривам целия ред    Germany	Berlin	[Up] [Down] [Delete]
        // console.log(element)
        element.fadeOut(function () {
            element.remove();
            fixRowLinks()
        })
    }
    function fixRowLinks() {

        $('#countriesTable').find('tr')
            .find('a:contains("Up")').css('display', 'inline');
        //console.log(firstRow)

        $('#countriesTable').find('tr')
           .find('a:contains("Down")').css('display', 'inline');


        let firstRow = $('#countriesTable').find('tr')[2]                       //така с тоя код всяко Up когато отиде до горе и загива
        $(firstRow).find('a:contains("Up")').css('display', 'none');         //същото е и със Down когато отиде до долу се маха
                                                                                // а Delete си се маха както трябва да е
        //console.log(firstRow)
        let lastRow = $('tr')
        $(lastRow.last()).find('a:contains("Down")').css('display', 'none')
    }
}