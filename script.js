let display=document.getElementById('display');
function appendToDisplay(value)
{
    if(display.innerText === '0' || display.innerText === 'Error')
    {
        display.innerText=value;
    }
    else
    {
        display.innerText+=value;
    }
}
function clearDisplay()
{
    display.innerText='0';
}
function deleteLast()
{
    let text = display.innerText;
    display.innerText = text.length > 1 ? text.slice(0,-1):'0';
}
function calculate()
{
    try
    {
        let result = Function('"use strict";return(' + display.innerText + ')')();
        display.innerText = result;
    }
    catch
    {
       display.innerText =  'Error';
    }
}
