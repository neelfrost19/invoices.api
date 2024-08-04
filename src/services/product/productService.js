import ProductModel from "../../models/product/productModel.js";

const getAllProduct = async (req, res) => {
    console.log(req.user);
    return ProductModel.find(id, undefined, undefined);
};

const createProduct = async (body, user) => {
    const{userId} = user;
    const productData = [];
    body.forEach((product)=>{
        const {name, quantity, rate} = product;
        const gstRate = rate+(rate*0.18);
        productData.push({name, quantity, rate, userId, gstRate});
    });
    return ProductModel.insertMany(productData);
};

export default {getAllProduct, createProduct}
