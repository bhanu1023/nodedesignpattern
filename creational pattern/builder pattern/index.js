var PersonBuilder = require('./PersonBuilder');

// Employees
var sue = new PersonBuilder('Sue').makeEmployee().makeManger(60).build();
var bill = new PersonBuilder('Bill').makeEmployee().makePartTime().build();
var phil = new PersonBuilder('Phil').makeEmployee().build();

// Shoppers
var charles = new PersonBuilder('Charles')
    .withMoney(500)
    .withList(['jeans', 'sunglasses'])
    .build();

var tabbitha = new PersonBuilder('Tabbitha').withMoney(1000).build();


console.log(charles.toString())
console.log(tabbitha)
