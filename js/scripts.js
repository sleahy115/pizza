var pizzaPrice = 15;

function Pizza(size, toppings, cheese) {
    this.pizzaSize = size;
    this.toppings = [];
    this.cheese = cheese;
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
    $("#begin-order").hide();
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


    var newPizza = new Pizza (sizeInput, toppingsInput, cheeseInput);
    newPizza.toppings.push(toppingsInput);

      //  $("#order").hide();
      //  $(".output-stream").show();
       $(".toppings").append(newPizza.toppings + '<br>');
       $(".size").text(newPizza.pizzaSize);
       $(".cheese").text(newPizza.cheese);


      //  ('<h2>' + "Your pizza order " +  newPizza.pizzaSize + "pizza" + " with " + newPizza.toppings + " and " + newPizza.cheese + '</h2>');
      // //   + sizeInput + " pizza" + " with " + cheeseInput + " cheese" + " and " + toppingsInput + " on top " +'</h2>');
      //  $(".output-stream").append('<h2>' + "Price:" + '</h2>' +'<p>' + "Your pizza is $" + totalCost + '</p>');
      });
    });
  });
