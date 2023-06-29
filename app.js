// let firstName = "Jane";
// let last_name = "Doe"
// console.log("Hello there ! your full name is :" + firstName + " " + last_name);

//Array and for loop
// const names =['John', 'Jane', 'Anna', 'Susy', 'Bob'];
// const lastName = 'Doe';
// let newArray = [];

// for(let i = 0; i < names.length; i++){
//     console.log(i);
//     console.log(names[i]);
//     newArray.push(`${names[i]} ${lastName}`);
// }
// console.log(names);
// console.log(newArray);

//Excercise - calculate total

const gas = [100, 50, 80 ,60];
const food = [30, 40, 50];
function calculateTotal(arr){
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    return total;
}
const gasTotal =  calculateTotal(gas);
const foodTotal =  calculateTotal(food);
const randomTotal = calculateTotal([100, 456, 34, 56, 8]);
console.log({
    gas: gasTotal,
    food: foodTotal,
    random: randomTotal,
})