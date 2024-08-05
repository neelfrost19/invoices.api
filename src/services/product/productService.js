import fs from "fs";
import { DateTime } from "luxon";

import { GeneratePdf } from "../../libs/generatePdf.js";
import { Logger } from "../../libs/logger.js";

import ProductModel from "../../models/product/productModel.js";
import DataroomModel from "../../models/dataroom/dataroomModel.js";

class ProductService {
    static async getAllProducts(req, res) {
        console.log(req.user);
        const id = req.user.id; // Ensure id is fetched from the user object
        return ProductModel.find(id, undefined, undefined);
    }

    static async createProduct(body, user) {
        const { userId } = user;
        const productData = [];
        const formattedDate = DateTime.now().toFormat('MM-dd-yyyy');

        body.forEach((product) => {
            const { name, quantity, rate } = product;
            const gstRate = rate + (rate * 0.18);
            productData.push({ name, quantity, rate, userId, gstRate, date: formattedDate });
        });

        await ProductModel.insertMany(productData);

        const fileData = await GeneratePdf.generatePdf(productData, userId);
        if (!fileData) {
            Logger.error('PDF generation failed');
            throw new Error('PDF generation failed');
        }

        const { pdfPath, fileName } = fileData;
        await DataroomModel.create({ userId, documentName: fileName }, undefined);
        return fs.createReadStream(pdfPath);
    }
}

export default ProductService;
