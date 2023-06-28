const car = {
    make: "Dodge",
    model: "ford SUV",
    year: 2023,
    color: [
        "red", "gold", "white", "black", "grey"
    ],
    hybrid: true,
    drive: function(){
        console.log('Driving....');
    },
    stop(){
        console.log('....STOP');
    }
}
console.log(car.make);
console.log(car.color[0]);
car.drive();
car.stop();