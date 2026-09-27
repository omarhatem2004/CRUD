const express = require("express");

const addProduct = require("./addProduct");
const readProducts = require("./read");
const updateProduct = require("./update");
const deleteProduct = require("./deleteProduct");

const app = express();

app.use(express.json());


app.post("/products", (req, res) => {
    const product = req.body;

    const newProduct = addProduct(product);

    res.status(201).json({
        message: "Product added successfully",
        product: newProduct
    });
});


app.get("/products", (req, res) => {
    const products = readProducts();

    res.json(products);
});


app.put("/products/:id", (req, res) => {
    const id = Number(req.params.id);

    const newName = req.body.name;
    const newPrice = req.body.price;

    const product = updateProduct(id, newName, newPrice);

    if (product === null) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    res.json({
        message: "Product updated successfully",
        product: product
    });
});


app.delete("/products/:id", (req, res) => {
    const id = Number(req.params.id);

    const deleted = deleteProduct(id);

    if (!deleted) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    res.json({
        message: "Product deleted successfully"
    });
});


app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});