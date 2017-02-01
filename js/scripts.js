var pizzaPrice = 15;

function Pizza(size, toppings, cheese) {
    this.pizzaSize = size;
    this.toppings = [];
    this.cheese = cheese;
}

function sizeCost(size) {
    if (size === "xl") {
        return pizzaPrice + 2;
    } else if (size === "large") {
        return pizzaPrice + 1;
    } else if (size === "small") {
        return pizzaPrice - 1;
    } else {
        return pizzaPrice;
    }
}

function toppingsPrice(toppings) {
    var toppingsCost = (toppings * .50);
    return toppingsCost;
}
Pizza.prototype.totalPrice = function() {
var total = this.toppingsPrice + this.sizeCost;
parseInt(total,10);
return total;
}

$(function() {
    $("#begin-order").click(function() {
        $("#order").show();
        $("#begin-order").hide();
    });
    $("form.order-form").submit(function(event) {
        event.preventDefault();
        var sizeInput = $("#pizza-size option:selected").val();
        var cheeseInput = $("#cheese-choices option:selected").val();
        $("input:checkbox[name=toppings]:checked").each(function() {
            var toppingsInput = $(this).val();
            var countToppings = $("[type='checkbox']:checked").length;
            var tCost = toppingsPrice(countToppings);
            var sCost = sizeCost(sizeInput);
            var totalCost = tCost + sCost;
            var newPizza = new Pizza(sizeInput, toppingsInput, cheeseInput);
            newPizza.toppings.push(toppingsInput);
            $(".toppings").append(newPizza.toppings + '<br>');
            $(".size").text(newPizza.pizzaSize);
            $(".cheese").text(newPizza.cheese);
            $(".price").text('$' + totalCost);
            $(".price-test").text(newPizza.totalPrice);
        });
    });
});
