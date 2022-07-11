//a function that calcualte the total amount enter in the fileds by user
var calcBtn = document.getElementById("calcBtn");
calcBtn.onclick = function () {
  var field100 = parseFloat(document.getElementById("field100").value * 100);
  var field50 = parseFloat(document.getElementById("field50").value * 50);
  var field20 = parseFloat(document.getElementById("field20").value * 20);
  var field10 = parseFloat(document.getElementById("field10").value * 10);
  var field5 = parseFloat(document.getElementById("field5").value * 5);
  var field1 = parseFloat(document.getElementById("field1").value * 1);
  var field25c = parseFloat(document.getElementById("field25c").value * 0.25);
  var field10c = parseFloat(document.getElementById("field10c").value * 0.1);
  var field5c = parseFloat(document.getElementById("field5c").value * 0.05);
  var field1c = parseFloat(document.getElementById("field1c").value * 0.01);
  //   to sum the user input
  var sumresult =
    field100 +
    field50 +
    field20 +
    field10 +
    field5 +
    field1 +
    field25c +
    field10c +
    field5c +
    field1c;
  //to round up to 2 decimal places only
  sumresult = "" + Math.round(sumresult * 100) / 100;
  document.getElementById("total").innerHTML =
    "Total Money: " + sumresult + "$";
};

//a function that clears the fileds and the p element in the index.html
var clearBtn = document.getElementById("clearBtn");
clearBtn.onclick = function () {
  document.getElementById("field100").value = "";
  document.getElementById("field50").value = "";
  document.getElementById("field20").value = "";
  document.getElementById("field10").value = "";
  document.getElementById("field5").value = "";
  document.getElementById("field1").value = "";
  document.getElementById("field25c").value = "";
  document.getElementById("field10c").value = "";
  document.getElementById("field5c").value = "";
  document.getElementById("field1c").value = "";
  document.getElementById("total").innerHTML = "Total Money: 0$";
};
