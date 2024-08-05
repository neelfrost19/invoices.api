import InvoiceModel from "../../models/invoice/invoiceModel.js";

class InvoiceService {
    static async getAllInvoices(req, res) {
        const {userId} = req.user;
        return InvoiceModel.find({userId}, {createdAt: 0, updatedAt: 0}, undefined);
    }
}

export default InvoiceService;
