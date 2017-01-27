var pizzaPrice = 15;

function Pizza(size, toppings) {
    this.pizzaSize = size;
    this.toppings = [];
}

function sizeCost(size) {
  if  (size === "xl") {
      return pizzaPrice + 2;
    } else if  (size === "large") {
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

function totalPrice(tcost,scost) {
  var total = toppingsPrice + sizeCost;
  return total;
}

// Pizza.prototype.totalPrice = function() {
//
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

    var sCost = sizeCost(sizeInput);

    var tCost = toppingsPrice(countToppings);

    var totalCost = totalPrice(tCost,sCost);
    alert(totalCost);
    //
    // var newPizza = new Pizza(sizeInput, 0);
    // // alert(newPizza);
    // newPizza.toppings.push(countToppings);
    // newPizza.pizzaSize = sizeInput;
    //
    //
    // // $(".output-stream").empty();
    // $(".output-stream").append("<p>" + sizeInput + " " + toppingsInput + " " + countToppings + totalPrice + "</p>");
    });
  });
});
