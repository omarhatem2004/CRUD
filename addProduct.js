const fs = require("fs");

function addProduct(product) {
    const data = fs.readFileSync("products.json", "utf8");

    const products = JSON.parse(data);

    products.push(product);

    fs.writeFileSync(
        "products.json",
        JSON.stringify(products, null, 2)
    );

    return product;
}

module.exports = addProduct;