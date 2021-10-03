const Person = require("./Person");

class PersonBuilder{
    constructor(name){
        this.name = name
    }
    makeEmployee(){
        this.isEmployee = true;
        return this;
    }
    makeManger(hours=0){
        this.isManager = true;
        this.hours = hours
        return this
    }
    makePartTime(){
        return this
    }
    withMoney(money=0){
        this.money = money
        return this
    }
    withList(list=[]){
        this.shoppingList = [...list]
        return this
    }
    build(){
        return new Person(this)
    }
}

module.exports = PersonBuilder