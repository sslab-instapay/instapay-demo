$(".order-amount").ready(function(event){
  var temp = location.href.split("?");
  var data = temp[1].split("=");
  var productValue = data[1];
  $(".order-amount").text(productValue + "ETH");
});

$("#copy_button").on("click", function(event){
  console.log("hihi");
  console.log($(".order-pr--value").text());
  $("#copy_button").val($(".order-pr--value").text());
  $("#copy_button").select();
  document.execCommand("copy");
});

$("#home-button").on("click", function(event){
  location.href = "instapay_demo.html";
});

var qrcode = new QRCode(document.getElementById("qrcode"), {
	text: "baseurl" + "walletaddress",
	width: 300,
	height: 300,
	colorDark : "#000000",
	colorLight : "#ffffff",
	correctLevel : QRCode.CorrectLevel.H
});
