import mongoose from 'mongoose';
const {Schema} = mongoose;

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true,
        },
        rate: {
            type: Number,
            required: true,
        },
        gstRate: {
            type: Number,
            required: true,
        },
        userId: {
            type: Schema.Types.ObjectId,
            required: true
        },
        date:{
            type: Date,
            required: true,
        },
        __v: {
            type: Number,
            select: false,
        },
    },
    {timestamps: true}
);

const Product = mongoose.model('product', productSchema);

export default Product;
