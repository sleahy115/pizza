
function Pizza(size, toppings, price) {
    this.pizzaSize = size;
    this.toppings = 0;
    this.price = [];
}

Pizza.prototype.totalPrice = function() {

var pizzaPrice = 15;

  if  (this.pizzaSize === "xl") {
       pizzaPrice + 2;
    } else if  (this.pizzaSize === "large") {
       pizzaPrice + 1;
    } else if (this.pizzaSize === "small") {
      pizzaPrice - 1;
    } else {
     pizzaPrice;
    }
    this.toppings.forEach(function() {
    pizzaPrice += .50;
    });
    this.pizzaPrice = price;
    return price;
}

// function toppingsPrice(toppings) {
//    var toppingsCost = (toppings * .50);
//    return toppingsCost;
// }



// Pizza.prototype.toppingsPrice = function(toppings) {
// }
// Pizza.prototype.totalPrice = function(toppingsPrice, sizePrice) {
// }

$(function() {
  $("form.order-form").submit(function(event) {
    event.preventDefault();
    var sizeInput = $("#pizza-size option:selected").val();

    $("input:checkbox[name=toppings]:checked").each(function() {
    var toppingsInput = $(this).val();
    var countToppings = $("[type='checkbox']:checked").length;

    var newPizza = new Pizza(sizeInput, 0);
    newPizza.toppings = countToppings;

    newPizza.pizzaSize = sizeInput;

    // var sCost = parseInt(sizeCost(sizeInput));
    //
    // var tCost = parseInt(toppingsPrice(countToppings));

    var totalCost = newPizza.totalPrice();
    alert(totalCost);

    // var totalCost = totalPrice(tCost,sCost);
    // alert(totalCost);
    //
    // alert(newPizza);

    //
    // // $(".output-stream").empty();
    // $(".output-stream").append("<p>" + sizeInput + " " + toppingsInput + " " + countToppings + totalPrice + "</p>");
    });
  });
});
