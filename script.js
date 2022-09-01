
/* 
    Following function is called on button click event
    It validates the value of an element having id 'principal' as well as 
    performs the interest calculation according to given values.
*/
function compute()
{
    // Fetching the value of html input element having id 'principal' and assigning to variable principal
    var principal = document.getElementById("principal").value;
    
    // Checking for positive value
    // If condition passes then program executes the given statements inside the brackets and doesn't proceed because of return false statement
    // If condition fails, the statements after if block are executed
    if(principal <= 0)
    {
        alert("Enter a positive number");
        document.getElementById('principal').focus(); 
        return false;
    }
    
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    var resultText = "If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>"

    document.getElementById("result").innerHTML = resultText;
}

/* 
    This following function is called on range slider change event.
    The new value of slider is assigned to span element having id 'rate_val'.
*/
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

Git token: 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
https://github.com/ibm-developer-skills-network/gkpbt-css-circle/pull/1487