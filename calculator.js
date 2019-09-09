var x = 0;
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
