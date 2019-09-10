var x = 0;
function percent()
{
  var value = document.getElementById("calc__display").value
  let p = value/100
  document.getElementById("calc__display").value = p
  x = p
  console.log(x)
}

function del()
{
  var value = document.getElementById("calc__display").value
  document.getElementById("calc__display").value = value.substr(0, value.length - 1)
  x = x.substr(0, x.length - 1)
  console.log(x)
}

function sqroot()
{
  var value = document.getElementById("calc__display").value
  let c = Math.sqrt(value)
  document.getElementById("calc__display").value = c
  x = c
  console.log(x)
}

function dis(val)
         {
           if (val == "^")
           {
             let a = "^"
             document.getElementById("calc__display").value+=a
             x = x + "**"
             console.log(x)
           }
           else
           {
             document.getElementById("calc__display").value+=val
             x = x + val
             console.log(x)
           }
         }

//function that evaluates the digit and return result
function solve()
        {
            let y = eval(x)
            document.getElementById("calc__display").value = y
            x = eval(x)
            console.log(x)
        }

//function that clear the display
function clr()
        {
            let d = " "
            document.getElementById("calc__display").value = d
            x = 0
            console.log(x)
        }
