const fs = require("fs");

function updateProduct(id, newName, newPrice) {
    const data = fs.readFileSync("products.json", "utf8");

    const products = JSON.parse(data);

    const index = products.findIndex(product => product.id === id);

    if (index === -1) {
        return null;
    }

    products[index].name = newName;
    products[index].price = newPrice;

    fs.writeFileSync(
        "products.json",
        JSON.stringify(products, null, 2)
    );

    return products[index];
}

module.exports = updateProduct;