import express from "express";
import InvoiceController from "../controllers/invoice/invoiceController.js";

const router = express.Router();

router.route("/invoice").get(InvoiceController.getAllInvoices);
router.route("/invoice/:id").get(InvoiceController.getInvoiceById);

export default router