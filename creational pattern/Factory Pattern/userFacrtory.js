var Employee = require("./Employee")
var Shopper = require("./Shopper")

var userFacrtory = (name,money=0,type,employer) => {
    if(type === "employee") return new Employee(name.money,employer)
    return new Shopper(name,money)
}

module.exports = userFacrtory