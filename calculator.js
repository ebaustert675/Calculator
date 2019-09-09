function dis(val)
         {
             document.getElementById("calc__display").value+=val
         }

//function that evaluates the digit and return result
function solve()
        {
            let x = document.getElementById("calc__display").value
            let y = eval(x)
            document.getElementById("calc__display").value = y
        }

//function that clear the display
function clr()
        {
            let d = " "
            document.getElementById("calc__display").value = d
        }
