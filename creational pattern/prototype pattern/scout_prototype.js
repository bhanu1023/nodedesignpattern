const Shopper = require("./Shopper")

const scout_prototype = new Shopper();

scout_prototype.addItemToList('camping knife');
scout_prototype.addItemToList('tent');
scout_prototype.addItemToList('backpack');
scout_prototype.addItemToList('map');

module.exports = scout_prototype