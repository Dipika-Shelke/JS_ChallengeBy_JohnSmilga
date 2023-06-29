const person1 = {
    name: "John",
    age: 15,
    status: "Resident"
}
const person2 = {
    name: "Jane",
    age: 23,
    status: "Resident"
}
if(person1.age >= 18 && person1.status == "Resident"){
    console.log(person1.name);
}
// if(person2.age >= 18 && person2.status == "Resident"){
//     console.log(person2.name);
// }
else{
    console.log("No Record Found");
}