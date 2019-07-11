function addDestination() {
    let city = $('#input input')[0];
    let country = $('#input input')[1];
    let season = $('#seasons :selected').text();
    if(city.value !== "" && country.value !== ""){
        let countSummer = $('#summaryBox input')[0].value;
        let countAutumn = $('#summaryBox input')[1].value;
        let countWinter = $('#summaryBox input')[2].value;
        let countSpring = $('#summaryBox input')[3].value;

        let tr = $('<tr>');
        let td1 = $(`<td>${city.value}, ${country.value}</td>`);
        let td2 = $(`<td>${season}</td>`);
        tr.append(td1);
        tr.append(td2);
        $('#destinationsList').append(tr);

        if(season === 'Summer'){
            countSummer++;
            $('#summaryBox input')[0].value = countSummer;
        }else if(season === 'Autumn'){
            countAutumn++;
            $('#summaryBox input')[1].value = countAutumn

        }else if(season === 'Winter'){
            countWinter++;
            $('#summaryBox input')[2].value = countWinter
        }
        else if(season === 'Spring'){
            countSpring++;
            $('#summaryBox input')[3].value = countSpring

        }

        city.value = "";
        country.value = "";
    }
}