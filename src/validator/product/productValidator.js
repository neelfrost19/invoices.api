import Joi from 'joi';

const productElementSchema = Joi.object({
    name: Joi.string().required(),
    quantity: Joi.number().integer().min(1).required(),
    rate: Joi.number().min(0).required()
});

const productSchema = Joi.object({
    products: Joi.array().items(productElementSchema).min(1),
    invoiceType: Joi.string().valid('pdf', 'img').optional(),
});

class ProductValidator {
    static validate(data) {
        return productSchema.validate(data);
    }
}

export default ProductValidator;