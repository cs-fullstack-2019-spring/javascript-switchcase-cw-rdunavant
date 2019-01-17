let ages = [12, 24, 50, 39, 90];

function filterSenior(age)
{
    return(age >= 50);
}
let over50 = ages.filter(filterSenior);
//////
var numbers = [65,44,12,4];
function getSum(total,num){
    return total + num;
}
let grandTotal = numbers.reduce(getSum);