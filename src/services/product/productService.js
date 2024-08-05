import fs from "fs";
import { DateTime } from "luxon";

import { GenerateDoc } from "../../libs/generateDoc.js";
import { Logger } from "../../libs/logger.js";

import ProductModel from "../../models/product/productModel.js";
import DataroomModel from "../../models/invoice/invoiceModel.js";

class ProductService {
    static async getAllProducts(req, res) {
        const {userId} = req.user;
        return ProductModel.find({userId}, undefined, undefined);
    }

    static async createProduct(body, user) {
        const { userId } = user;
        const productData = [];
        const formattedDate = DateTime.now().toFormat('MM-dd-yyyy');
        const {products, invoiceType} = body;

        products.forEach((product) => {
            const { name, quantity, rate } = product;
            const gstRate = rate + (rate * 0.18);
            productData.push({ name, quantity, rate, userId, gstRate, date: formattedDate });
        });

        await ProductModel.insertMany(productData);

        const fileData = await GenerateDoc.generateDoc(productData, userId, invoiceType);

        if (!fileData) {
            Logger.error('Document generation failed');
            throw new Error('Document generation failed');
        }

        const { docPath, fileName } = fileData;
        await DataroomModel.create({ userId, documentName: fileName,  docType: invoiceType}, undefined);
        return fs.createReadStream(docPath);
    }
}

export default ProductService;
