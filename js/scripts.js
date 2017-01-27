var pizzaPrice = 15;

function Pizza(size, toppings, price) {
    this.pizzaSize = size;
    this.toppings = [];
    this.numOfToppings = 0;
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
    // this.numOfToppings.each(function() {
    // pizzaPrice += .50;
  // });

// function toppingsPrice(toppings) {
//    var toppingsCost = (toppings * .50);
//    return toppingsCost;
// }



// Pizza.prototype.toppingsPrice = function(toppings) {
// }
// Pizza.prototype.totalPrice = function(toppingsPrice, sizePrice) {
// }

$(function() {
  $("#begin-order").click(function(){
    $("#order").show();
  });
 $("form.order-form").submit(function(event) {
     event.preventDefault();
     var sizeInput = $("#pizza-size option:selected").val();
     var cheeseInput = $("#cheese-choices option:selected").val();
     $("input:checkbox[name=toppings]:checked").each(function() {
     var toppingsInput = $(this).val();
     var countToppings = $("[type='checkbox']:checked").length;

     var sCost = sizeCost(sizeInput);

     var tCost = toppingsPrice(countToppings);

     var totalCost = tCost + sCost;

     $("#order-submit").click(function(){
       $("#order").hide();
       $(".output-stream").append('<h2>' + "Your pizza order" + sizeInput + cheeseInput + toppingsInput +'</h2>')
       $(".output-stream").append('<h2>' + "Price:" + '</h2>' +'<p>' + "Your pizza is $" + totalCost + '</p>');
      });
      });
    });
  });
