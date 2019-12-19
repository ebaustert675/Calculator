var x = 0;
let y = true;

//function that displays equations and the solutions of percent and squareroot equations
function dis(val)
         {
           //exponents
           if (val == "^")
           {
             let a = "^";
             document.getElementById("calc__display").value+=a;
             x = x + "**";
             console.log(x);
           }
           //squareroot
           else if (val == "√")
           {
             let c = sqroot();
             document.getElementById("calc__display").value = c;
             x = c;
             console.log(x);
           }
           //percent
           else if (val == "%")
           {
             let p = percent();
             document.getElementById("calc__display").value = p;
             x = p;
             console.log(x);
           }
           //factorial
           else if (val == "!")
           {
             let r = document.getElementById("calc__display").value;
             let f = factorial(r);
             document.getElementById("calc__display").value = f;
             x = f;
             console.log(x);
           }
           //log10
           else if (val == "log10")
           {
             let l = document.getElementById("calc__display").value;
             let t = Math.log10(l);
             document.getElementById("calc__display").value = t;
             x = t;
             console.log(x);
           }
           //parenthesis
           else if (val == '()')
           {
             let z = '(';
             let s = ')';
             if (y == true)
             {
               document.getElementById("calc__display").value+=z;
               x = x + z;
               console.log(x);
               y = false;
             }
             else if (y == false)
             {
               document.getElementById("calc__display").value+=s;
               x = x + s;
               console.log(x);
               y = true;
             }
           }
           //pi
           else if (val == 'π')
           {
             var pi = 3.14159;
             var pi2 = pi.toFixed(2);
             document.getElementById("calc__display").value+=pi2;
             x = x + pi;
             console.log(x);
           }
           //displaying equation
           else
           {
             document.getElementById("calc__display").value+=val;
             x = x + val;
             console.log(x);
           }
         }

//function that deletes one number/operator from the display
function del()
{
  var value = document.getElementById("calc__display").value;
  document.getElementById("calc__display").value = value.substr(0, value.length - 1);
  x = x.substr(0, x.length - 1);
  console.log(x);
}

//function that finds the square root of the number
function sqroot()
{
  var value = document.getElementById("calc__display").value;
  let c = Math.sqrt(value);
  return c;
}

//function that converts the number to a percent
function percent()
{
  var value = document.getElementById("calc__display").value;
  let p = value/100;
  return p;
}
 //function that finds the factorial of the number
function factorial(f)
{
  if(f == 0)
  {
    return 1;
  }
  return f * factorial(f-1);
}

//function that clears the display
function clr()
{
  let d = " ";
  document.getElementById("calc__display").value = d;
  x = " ";
  console.log(x);
}

//function that evaluates the equation and displays the solution
function solve()
{
  let z = x.toString();
  let y = eval(z);
  document.getElementById("calc__display").value = y;
  x = eval(z);
  console.log(x);
}
