function Pizza(size, toppings, cheese, totalPrice) {
    this.pizzaSize = size;
    this.toppings = toppings;
    this.cheese = cheese;
    this.totalPrice = 15;
}


Pizza.prototype.pizzaCost = function() {
    var sizePrice = 0;
    var toppingsPrice = 0;
    if (this.pizzaSize === "xl") {
        sizePrice = this.totalPrice + 2;
    } else if (this.pizzaSize === "large") {
        sizePrice =this.totalPrice + 1;
    } else if (this.pizzaSize === "small") {
        sizePrice = this.totalPrice - 1;
    } else if (this.pizzaSize === "medium") {
        sizePrice = this.totalPrice
    }
    console.log(sizePrice)
    for (i = 0; i <= this.toppings.length; i++) {
        this.totalPrice = i + 1;
        toppingsPrice = this.totalPrice
        console.log(toppingsPrice)
    }
    this.totalPrice = toppingsPrice + sizePrice;
    return this.totalPrice
    console.log(this.totalPrice)
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
        var totalPrice = 0;
        var toppingsInput = [];
        $("input:checkbox[name=toppings]:checked").each(function() {
            toppingsInput.push($(this).val());
        });
        var newPizza = new Pizza(sizeInput, toppingsInput, cheeseInput, 15);
        newPizza.toppings = toppingsInput;
        total = newPizza.pizzaCost();
        console.log(total)
        $(".toppings").append(newPizza.toppings + '<br>');
        $(".size").text(newPizza.pizzaSize);
        $(".cheese").text(newPizza.cheese);
        $(".price-test").text(total);
    });
});
