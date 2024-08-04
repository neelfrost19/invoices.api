import path from 'path';
import puppeteer from 'puppeteer';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import {InvoiceTemplate} from "./templates/invoiceTemplate.js";
import { DateTime } from 'luxon';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const __srcDir=dirname(__dirname);
const __parentDir = dirname(__srcDir);

export class GeneratePdf {
     static async generatePdf(product, userId) {
        const formattedDate = DateTime.now().toFormat('MM-dd-yyyy');

        const content = InvoiceTemplate.invoicePdf(product);
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setContent(content);
        const pdfPath = path.join(__parentDir,'download', `${userId}_quotation_${formattedDate}.pdf`);
        await page.pdf({path: pdfPath, format: 'A4'});

        await browser.close();
        return pdfPath;
    }
}
