import InvoiceService from "../../services/invoice/invoiceService.js";

class InvoiceController {
    static async getAllInvoices(req, res) {
        try {
            const htmlStream = await InvoiceService.getAllInvoices(req, res);
            res.setHeader('Content-Type', 'text/html');
            htmlStream.pipe(res);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    static async getInvoiceById(req, res) {
        try {
            const invoices = await InvoiceService.getInvoiceById(req, res);
            res.json({ data: invoices, status: "success" });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

export default InvoiceController;
