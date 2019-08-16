// Write your JavaScript here
let dollars = 0;
document.getElementById('dollars-output').innerHTML = dollars;
let quarters = 0;
document.getElementById('quarters-output').innerHTML = quarters;
let dimes = 0;
document.getElementById('dimes-output').innerHTML = dimes;
let nickels = 0;
document.getElementById('nickels-output').innerHTML = nickels;
let pennies = 0;
document.getElementById('pennies-output').innerHTML = pennies;



function calculateChange(){
    let paid = (document.getElementById('amount-received').value * 100);
    let due = (document.getElementById('amount-due').value * 100);
   // var paid = document.getElementById('amount-received');
   // var due = document.getElementById('amount-due');
    let difference = (paid - due);
    //change[0] = math.Floor(difference);
//function splitChange(){
   // var change = [];
   // let change = [0];
   // let cents = (difference - difference.toFixed(0));
    /*change[1] = math.Floor(cents/'25');
    change[2] = math.Floor(cents-(change[1]*25)/'10');*/
    let dollars = Math.floor((difference) / 100);
    document.getElementById('dollars-output').innerHTML = dollars;              //returns whole dollar amount
    let quarters = Math.floor((difference % 100) / 25);    
    document.getElementById('quarters-output').innerHTML = quarters;                   // returns quarters
    let dimes = Math.floor((difference % 25) / 10);        //returns amount of dimes
    document.getElementById('dimes-output').innerHTML = dimes;
    let nickels = Math.floor((difference - dollars * 100 - quarters * 25 - dimes * 10) / 5);
    document.getElementById('nickels-output').innerHTML = nickels;
    let pennies = Math.ceil((difference % 5) / 1);
    document.getElementById('pennies-output').innerHTML = pennies;
    //return whole, quarters, dimes, nickels, pennies;
}

function handleClickEvent(){
    //var interim = calculateDifference();
    //var result = splitChange();
    /*let result = */return calculateChange();
    /*document.getElementById('dollars-output').innerHTML = result[0].value;
    document.getElementById('quarters-output').innerHTML = result[1].value;
    document.getElementById('dimes-output').innerHTML = result[2].value;
    document.getElementById('nickels-output').innerHTML = result[3].value;
    document.getElementById('pennies-output').innerHTML = result[4].value;*/
}

   