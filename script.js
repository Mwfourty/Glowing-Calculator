const input = document.getElementById("input");

function appendToDisplay(display)
{
    input.value += display;
}

function clearDisplay()
{
    input.value = "";
}

function calculate()
{
    try
    {
        input.value = eval(input.value);
    }
    catch (error)
    {
        input.value = "Error";
    }
}
