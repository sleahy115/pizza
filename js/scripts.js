function Pizza(size, toppings, cheese,totalPrice) {
    this.pizzaSize = size;
    this.toppings = toppings;
    console.log(this.toppings)
    this.cheese = cheese;
    this.totalPrice= 15;
    console.log(this.totalPrice)
}


Pizza.prototype.pizzaCost = function() {
  console.log(this.toppings)
  for (i = 0; i<=this.toppings.length; i++) {
      this.totalPrice + .50;
      console.log(this.totalPrice)
  }
  return this.totalPrice;
  console.log(this.totalPrice)

   if (this.pizzaSize === "xl") {
      return this.totalPrice + 2;
  } else if (this.pizzaSize === "large") {
      return this.totalPrice + 1;
  } else if (this.pizzaSize === "small") {
      return this.totalPrice - 1;
  } else {
      return this.totalPrice;
      console.log(this.totalPrice)
  }

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
        var totalPrice =0;
        var toppingsInput = [];
         $("input:checkbox[name=toppings]:checked").each(function() {
            toppingsInput.push($(this).val());
            });
        var newPizza = new Pizza(sizeInput, toppingsInput, cheeseInput, 15);
            newPizza.toppings = toppingsInput;
            console.log(newPizza)
            totalPrice = newPizza.pizzaCost();
            console.log(totalPrice)
            $(".toppings").append(newPizza.toppings + '<br>');
            $(".size").text(newPizza.pizzaSize);
            $(".cheese").text(newPizza.cheese);
            $(".price-test").text(totalPrice);
    });
});
