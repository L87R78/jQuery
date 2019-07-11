function initializeTable() {
    $('#createLink').on('click', createCounty);
    addCountryTotable("Bulgaria", "Sofia");
    addCountryTotable("Germany", "Berlin");
    addCountryTotable("Russia", "Moscow");
    hideButtons();


    function addCountryTotable(country, capital) {
            let tableRow = $('<tr>')
                        .append(`<td>${country}</td>`)
                        .append(`<td>${capital}</td>`)
                        .append($('<td>')
                                    .append($('<a href="#">[Up]</a>')
                                        .on('click', moveUp))
                                    .append($('<a href="#">[Down]</a>')
                                        .on('click', moveDown))
                                    .append($('<a href="#">[Delete]</a>')
                                        .on('click', deleteRow)));

        tableRow.css('display', 'none');
        $('#countriesTable').append(tableRow);
        tableRow.fadeIn(2000)
    }

    function createCounty() {
        let country = $('#newCountryText');
        let capital = $('#newCapitalText');
        addCountryTotable(country.val(), capital.val());
        country.val("");
        capital.val("");
        hideButtons()
    }

    function moveUp() {
        let row = $(this).parents("tr:first");
        row.fadeOut(function () {
            row.insertBefore(row.prev());
            row.fadeIn(2000);
            hideButtons()
        });

    }
    
    function moveDown() {
        let row = $(this).parents("tr:first");
        row.fadeOut(function () {
            row.insertAfter(row.next());
            row.fadeIn(2000);
            hideButtons()
        });

    }
    function deleteRow() {
        $(this).fadeOut(function () {
            $(this).parents("tr:first").remove();
            hideButtons()
        });
    }
    function hideButtons() {
        $('#countriesTable a').css('display', '');
        $('#countriesTable tr:eq(2) a:contains("Up")')
            .css('display', 'none');

        $('#countriesTable tr:last a:contains("Down")')
            .css('display', 'none');
    }
}