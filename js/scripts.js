pizzaPrice = 15;

function Pizza(size, toppings) {
    this.size = size;
    this.toppings = toppings;
}
Pizza.prototype.price = function(size, toppings) {
    if (pizzaSize === xl) {
        return pizzaPrice + 2;
    } else if (pizzaSize === lg) {
        return pizzaPrice + 1;
    } else if (pizzaSize === small) {
        return pizzaPrice - 1;
    }
    var toppingsPrice = (numOfToppings * .50);

    return sizePrice + toppingsPrice;
}

$(function() {
    $("#form.order-form").submit(function(event) {
        event.preventDefault();
        var sizeInput = $("input#pizza-size").val();
        $("input:checkbox[name=pizza-toppings]": checked).each(function() {
            var toppingsInput = $(this).val();
        });
    });
});
