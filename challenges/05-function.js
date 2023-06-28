const calculateTotal = function (subTotal, tax){
    return subTotal + tax;
}
var order1 = calculateTotal(50, 50);
var order2 = calculateTotal(10, 30);
var order3 = calculateTotal(25, 25);

console.log(order1, order2,order3);