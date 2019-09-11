var x = 0;

//function that displays equations and the solutions of percent and squareroot equations
function dis(val)
         {
           //exponents
           if (val == "^")
           {
             let a = "^"
             document.getElementById("calc__display").value+=a
             x = x + "**"
             console.log(x)
           }
           //squroot
           else if (val == "√")
           {
             let c = sqroot()
             document.getElementById("calc__display").value = c
             x = c
             console.log(x)
           }
           //percent
           else if (val == "%")
           {
             let p = percent()
             document.getElementById("calc__display").value = p
             x = p
             console.log(x)
           }
           //displaying equation
           else
           {
             document.getElementById("calc__display").value+=val
             x = x + val
             console.log(x)
           }
         }

//function that deletes one number/operator from the display
function del()
{
    var value = document.getElementById("calc__display").value
    document.getElementById("calc__display").value = value.substr(0, value.length - 1)
    x = x.substr(0, x.length - 1)
    console.log(x)
}

//function that finds the square root of the number
function sqroot()
{
  var value = document.getElementById("calc__display").value
  let c = Math.sqrt(value)
  return c
}

//function that converts the number to a percent
function percent()
{
  var value = document.getElementById("calc__display").value
  let p = value/100
  return p
}

//function that clears the display
function clr()
        {
            let d = " "
            document.getElementById("calc__display").value = d
            x = 0
            console.log(x)
        }

//function that evaluates the equation and displays the solution
function solve()
        {
            let y = eval(x)
            document.getElementById("calc__display").value = y
            x = eval(x)
            console.log(x)
        }
