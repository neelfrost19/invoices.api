import fs from "fs";
import ProductModel from "../../models/product/productModel.js";
import {GeneratePdf} from "../../libs/generatePdf.js";
import {DateTime} from "luxon";

const getAllProduct = async (req, res) => {
    console.log(req.user);
    return ProductModel.find(id, undefined, undefined);
};

const createProduct = async (body, user) => {
    const{userId} = user;
    const productData = [];
    const formattedDate = DateTime.now().toFormat('MM-dd-yyyy');
    body.forEach((product)=>{
        const {name, quantity, rate} = product;
        const gstRate = rate+(rate*0.18);
        productData.push({name, quantity, rate, userId, gstRate, date: formattedDate});
    });
    await ProductModel.insertMany(productData);

    const pdfPath = await GeneratePdf.generatePdf(productData, userId);
    return fs.createReadStream(pdfPath);
};

export default {getAllProduct, createProduct}
