function onlineShop(selector) {
    let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br><br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display">
        </ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;
    $(selector).html(form);

    let product = $('.custom-select');
    let price = $('#price');
    let quantity = $('#quantity');
    let button = $('#submit');
    let box = $('.display');
    let capacity = $('#capacity');
    let sum = $('#sum');


    let quatityLength = 0;
    let priceLength = 0;



    $(function() {
        product.keyup(check_submit).each(function() {
            check_submit();
        });
    });

    function check_submit() {
        if (product.val().length == 0) {
            button.on('click', function () {
                let li = $('<li>');
                li.text(`Product: ${product.val()} Price: ${price.val()} Quantity: ${quantity.val()}`);
                box.append(li);
            });
            button.attr("disabled", true);
        } else {
          button.removeAttr("disabled");
        }
    }




    // button.on('click', addProduct);
    // function addProduct() {
    //     button.attr('disabled',true);
    //     let li = $('<li>');
    //     li.text(`Product: ${product.val()} Price: ${price.val()} Quantity: ${quantity.val()}`);
    //     box.append(li);
    //
    //     quatityLength += +quantity.val();
    //     priceLength += +price.val();
    //
    //
    //     if(quatityLength > 149){
    //         capacity.addClass("fullCapacity").val("full");
    //
    //         product.attr("disabled", true);
    //         price.attr("disabled", true);
    //         quantity.attr("disabled", true);
    //
    //         button.attr('disabled',true);
    //     }else{
    //         capacity.val(quatityLength);
    //     }
    //     sum.val(priceLength);
    //     product.val("");
    //     price.val(1);
    //     quantity.val(1);
    // }
}
