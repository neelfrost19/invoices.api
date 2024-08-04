import productService from "../../services/product/productService.js";

const getAllProduct = async (req, res) => {
    try {
        const product = await productService.getAllProduct(req, res);
        res.json({ data: product, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const createProduct = async (req, res) => {
    try {
        const product = await productService.createProduct(req.body, req.user);
        res.json({ data: product, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export {getAllProduct, createProduct};


