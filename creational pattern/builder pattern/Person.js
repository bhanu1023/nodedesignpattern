class Person {

    constructor({name, isEmployee, isManager, hours, money, shoppingList}) {
        this.name = name
        this.isEmployee = isEmployee || false;
        this.isManager = isManager || false;
        this.hours = hours || 0;
        this.money = money || 0;
        this.shoppingList = shoppingList || [];
    }

    toString() {
        return JSON.stringify(this);
    }

}

module.exports = Person;
