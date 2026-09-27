const fs = require("fs");

function readProducts() {
    const data = fs.readFileSync("products.json", "utf8");

    const products = JSON.parse(data);

    return products;
}

module.exports = readProducts;