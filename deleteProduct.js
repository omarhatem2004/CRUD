const fs = require("fs");

function deleteProduct(id) {
    const data = fs.readFileSync("products.json", "utf8");

    const products = JSON.parse(data);

    const index = products.findIndex(product => product.id === id);

    if (index === -1) {
        return false;
    }

    products.splice(index, 1);

    fs.writeFileSync(
        "products.json",
        JSON.stringify(products, null, 2)
    );

    return true;
}

module.exports = deleteProduct;