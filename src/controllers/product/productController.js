import ProductService from "../../services/product/productService.js";
import ProductValidator from "../../validator/product/productValidator.js";

class ProductController {
    static async getAllProducts(req, res) {
        try {
            const products = await ProductService.getAllProducts(req, res);
            res.json({ data: products, status: "success" });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    static async createProduct(req, res) {
        try {
            const { error } = ProductValidator.validate(req.body);
            if (error) {
                return res.status(400).json({ error: error.details[0].message });
            }
            const pdfBuffer = await ProductService.createProduct(req.body, req.user);
            pdfBuffer.pipe(res);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

export default ProductController;
