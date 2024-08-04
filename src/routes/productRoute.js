import express from "express";
import {
    createProduct,
    getAllProduct
} from "../controllers/product/productController.js";

const router = express.Router();

router.route("/product").get(getAllProduct).post(createProduct);

export default router