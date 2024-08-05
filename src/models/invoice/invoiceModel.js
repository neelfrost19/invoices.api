import mongoose from 'mongoose';
const {Schema} = mongoose;

const InvoiceSchema = new Schema(
    {
        documentName:{
            type: String,
            unique: true,
            required: true,
        },
        userId: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        docType:{
            type: String,
            enum: ['pdf', 'img'],
            required: true,
        }
    },
    {timestamps: true}
);

const Invoice = mongoose.model('invoice', InvoiceSchema);

export default Invoice;
