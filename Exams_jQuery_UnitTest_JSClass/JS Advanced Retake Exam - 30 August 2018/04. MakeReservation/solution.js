/*
function makeReservation() {
    let name = $('#fullName');
    let email = $('#email');
    let phoneNumber = $('#phoneNumber');
    let address = $('#address');
    let postCode = $('#postalCode');

    $('#submit').attr("disabled", false);

    $('#submit').on('click', function () {
        if(name.val() !== "" && email.val() !== "") {
            let copyName = name.val();
            let copyEmail = email.val();
            let copyPhoneNumber = phoneNumber.val();
            let copyAddress = address.val();
            let copyPostCode = postCode.val();

            let liName = $(`<li>Name: ${name.val()}</li>`);
            let liEmail = $(`<li>E-mail: ${email.val()}</li>`);
            let liPhone = $(`<li>Phone: ${phoneNumber.val()}</li>`);
            let liAddress = $(`<li>Address: ${address.val()}</li>`);
            let liPostCode = $(`<li>Postal Code: ${postCode.val()}</li>`);

            $('#infoPreview').append(liName);
            $('#infoPreview').append(liEmail);
            $('#infoPreview').append(liPhone);
            $('#infoPreview').append(liAddress);
            $('#infoPreview').append(liPostCode);

            $('#submit').attr("disabled", true);
            $('#edit').attr("disabled", false);
            $('#continue').attr("disabled", false);

            $('#edit').on('click', function () {

                $('#fullName').val(copyName);
                $('#email').val(copyEmail);
                $('#phoneNumber').val(copyPhoneNumber);
                $('#address').val(copyAddress);
                $('#postalCode').val(copyPostCode);

                $('#infoPreview').empty();
                $('#submit').attr("disabled", false);
                $('#edit').attr("disabled", true);
                $('#continue').attr("disabled", true);
            });
        }
        name.val("");
        email.val("");
        phoneNumber.val("");
        address.val("");
        postCode.val("");
    });
    $('#continue').on('click', function () {
        $('#submit').attr("disabled", true);
        $('#edit').attr("disabled", true);
        $('#continue').attr("disabled", true);

        let h2 = $('<h2>Payment details</h2>');
        $('#container').append(h2);

        let option1 = $('<option selected disabled hidden>Choose</option>');
        let option2 = $('<option value="creditCard">Credit Card</option>');
        let option3 = $('<option value="bankTransfer">Bank Transfer</option>');

        let idID = $('<select id="paymentOptions" class="custom-select"> ');
        idID.append(option1);
        idID.append(option2);
        idID.append(option3);
        $('#container').append(idID);
        $('#container').append($('<div id="extraDetails">'));


        $('#paymentOptions').on('change', function () {
            $('#extraDetails').empty();
            let selected = $('#paymentOptions').find(':selected').val();

            let button = $('<button id="checkOut">Check Out</button>');

            if (selected === "creditCard") {
                $('#extraDetails')
                    .append($(`<div class="inputLabel">Card Number<input></div><br>`))
                    .append($(`<div class="inputLabel">Expiration Date<input></div><br>`))
                    .append($(`<div class="inputLabel">Security Numbers<input></div><br>`));

                // $('#extraDetails').append($('<div class="inputLabel">Card Number<input></div>'));
                // $('#extraDetails').append($('<br>'));
                // $('#extraDetails').append($('<div class="inputLabel">Expiration Date<input></div>'));
                // $('#extraDetails').append($('<br>'));
                // $('#extraDetails').append($('<div class="inputLabel">Security Numbers<input></div>'));
            }
            else if (selected === "bankTransfer") {
                let p = $(`<p>You have 48 hours to transfer the amount to:<br>IBAN: GR96 0810 0010 0000 0123 4567 890</p>`);
                $('#extraDetails').append(p);
            }
            $('#extraDetails').append(button);

            $('#checkOut').on('click', function () {
                $('#wrapper').empty();
                let h4 = $('<h4>Thank you for your reservation!</h4>');
                $('#wrapper').append(h4)
            })
        });
    });
}
*/
function makeReservation() {
    let name = $('#fullName');
    let email = $('#email');
    let phoneNumber = $('#phoneNumber');
    let address = $('#address');
    let postCode = $('#postalCode');


    let submit = $('#submit').on('click', function () {
        //window.location = "https://www.youtube.com/watch?v=HKU96i_Qh8Y" + this.id; //open link with buttnon


        if(name.val() !== '' && email.val()){
            $('#infoPreview').append($(`<li>Name: ${name.val()}</li>`));
            $('#infoPreview').append($(`<li>E-mail: ${email.val()}</li>`));
            $('#infoPreview').append($(`<li>Phone: ${phoneNumber.val()}</li>`));
            $('#infoPreview').append($(`<li>Address: ${address.val()}</li>`));
            $('#infoPreview').append($(`<li>Postal Code: ${postCode.val()}</li>`));

            let copyName = name.val();
            let copyEmail = email.val();
            let copyPhone = phoneNumber.val();
            let copyAddress = address.val();
            let copyPostCode = postCode.val();

            name.val("");
            email.val("");
            phoneNumber.val("");
            address.val("");
            postCode.val("");

            $('#submit').attr('disabled', true).hide().fadeIn(1000);
            $('#edit').attr('disabled', false).hide().fadeIn(1000);
            $('#continue').attr('disabled', false).hide().fadeIn(1000);

            //create button   //https....
                $('.block:last').append($('<button id="newButton">New Button</button>'))
            
            $('#edit').on('click', function () {
                name.val(copyName);
                email.val(copyEmail);
                address.val(copyAddress);
                phoneNumber.val(copyPhone);
                postCode.val(copyPostCode);

                $('#infoPreview').empty();
                $('#submit').attr('disabled', false).hide().fadeIn(1000);
                $('#edit').attr('disabled', true).hide().fadeIn(1000);
                $('#continue').attr('disabled', true).hide().fadeIn(1000);

                $('.block:last').find('#newButton').remove() // delete button
            });

            $('#continue').on('click', function () {
                $('#container').empty();
                $('#container').append($('<h2>Payment details</h2>'));

                let select = $('<select id="paymentOptions" class="custom-select">');

                select.append($('<option selected disabled hidden>Choose</option>'));
                select.append($('<option value="creditCard">Credit Card</option>'));
                select.append($('<option value="bankTransfer">Bank Transfer</option>'));

                $('#container').append(select);
                $('#container').append($('<div id="extraDetails">'));


                $("#paymentOptions").on('change', function() {
                    let currentSelect = $(this).find('option:selected')[0].textContent;
                    $('#extraDetails').empty();

                    if(currentSelect === "Credit Card"){

                        $('#extraDetails')
                                 .append($(`<div class="inputLabel">Card Number</div><br>`)
                                     .append($('<input class="input-field" type="text" placeholder="Card Number" name="usrnm">')))
                                 .append($(`<div class="inputLabel">Expiration Date</div><br>`)
                                     .append($('<input class="input-field" type="text" placeholder="Expiration Date" name="usrnm">')))
                                 .append($(`<div class="inputLabel">Security Numbers</div><br>`)
                                     .append($('<input class="input-field" type="text" placeholder="Security Numbers" name="usrnm">')));

                    }else if(currentSelect === "Bank Transfer"){
                        $('#extraDetails').append($('<p>You have 48 hours to transfer the amount to:<br>IBAN: GR96 0810 0010 0000 0123 4567 890</p>'));
                    }
                    $('#extraDetails').append($('<button id="checkOut">Check Out</button>'));

                    $('#checkOut').on('click',function () {
                        $('#wrapper').empty();
                        $('#wrapper').append($('<h4>Thank you for yuor reservation!</h4>'));
                    })
                });
                $('#submit').attr('disabled', true);
                $('#edit').attr('disabled', true);
                $('#continue').attr('disabled', true);
            })
        }
    })
}


































