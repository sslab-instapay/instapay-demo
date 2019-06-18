var productPrices = [0.015, 0.017, 0.019, 0.012]


$('.product-action').find("button").on('click', function(event){

  var cartValueObject = $(".cart").find(".cart-amount").find(".cart-amount--value");
  var cartValue = parseFloat(cartValueObject.text());
  var addValue = parseFloat(event.target.parentElement.parentElement.firstElementChild.lastElementChild.getAttribute("value"));

  // add CartValue
  cartValue += addValue;
  cartValueObject.text(cartValue.toFixed(3).toString());

  if (cartValue != 0.00) {
    $("#checkout_button").attr("disabled", false);
    $("#empty_cart_button").attr("disabled", false);
  }
});

$("#empty_cart_button").on("click", function(event){
  var cartValueObject = $(".cart").find(".cart-amount").find(".cart-amount--value");
  cartValueObject.text("0.00");
  $("#checkout_button").attr("disabled", true);
  $("#empty_cart_button").attr("disabled", true);
})

$("#checkout_button").on("click", function(event){
  var cartValueObject = $(".cart").find(".cart-amount").find(".cart-amount--value");
  var cartValue = parseFloat(cartValueObject.text());

  // order.html로 cartValue 보냄
  location.href="order.html" + "?productValue=" + cartValue;
})
