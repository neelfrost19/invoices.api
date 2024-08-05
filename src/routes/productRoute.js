import express from "express";
import ProductController from "../controllers/product/productController.js";

const router = express.Router();

router.route("/product").get(ProductController.getAllProducts).post(ProductController.createProduct);

export default router