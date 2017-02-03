function Pizza(size, toppings, cheese) {
    this.pizzaSize = size;
    console.log(this.size)
    this.toppings = [];
    console.log(this.toppings)
    this.cheese = cheese;
}


Pizza.prototype.totalPrice = function() {
  var pizzaPrice = 15;
   if (this.pizzaSizesize === "xl") {
      return pizzaPrice + 2;
  } else if (this.pizzaSize === "large") {
      return pizzaPrice + 1;
  } else if (this.pizzaSize === "small") {
      return pizzaPrice - 1;
  } else {
      return pizzaPrice;
      console.log(pizzaPrice)
  }
  for (i = 0; i<=toppings.length; i++) {
      pizzaPrice + .50;
  }
  return pizzaPrice;
  console.log(pizzaPrice)
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

        var toppingsInput = [];
        var toppingsString = "";
         $("input:checkbox[name=toppings]:checked").each(function() {
            toppingsInput.push($(this).val());
            console.log(toppingsInput)
            });
        var newPizza = new Pizza(sizeInput, toppingsInput, cheeseInput);
            newPizza.toppings = toppingsInput;
            console.log(newPizza.toppings)
            $(".toppings").append(newPizza.toppings + '<br>');
            $(".size").text(newPizza.pizzaSize);
            $(".cheese").text(newPizza.cheese);
            $(".price-test").text(newPizza.totalPrice);
    });
});
