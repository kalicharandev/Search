function add() {

    var p1 = parseInt(document.getElementById("num1").value);
    var p2 = parseInt(document.getElementById("num2").value);
  
    var p3 = p1+p2;
  
    document.getElementById("demo").innerHTML = p3;
    }
    function sub() {
  
    var p1 = parseInt(document.getElementById("num1").value);
    var p2 = parseInt(document.getElementById("num2").value);
  
    var p3 = p1-p2;
  
    document.getElementById("demo").innerHTML = p3;
  }
  function multiply() {
  
    var p1 = parseInt(document.getElementById("num1").value);
    var p2 = parseInt(document.getElementById("num2").value);
  
    var p3 = p1*p2;
  
    document.getElementById("demo").innerHTML = p3;
    }
    function divide() {
  
    var p1 = parseInt(document.getElementById("num1").value);
    var p2 = parseInt(document.getElementById("num2").value);
  
    var p3 = p1/p2;
  
    document.getElementById("demo").innerHTML = p3;
    }