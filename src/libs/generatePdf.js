import path from 'path';
import puppeteer from 'puppeteer';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import {InvoiceTemplate} from "./templates/invoiceTemplate.js";
import { DateTime } from 'luxon';
import {Logger} from "./logger.js";
import fs from "fs";
import {v4 as uuidv4} from 'uuid';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const __srcDir=dirname(__dirname);
const __parentDir = dirname(__srcDir);

export class GeneratePdf {
     static async generatePdf(product, userId) {
        try {
           const formattedDate = DateTime.now().toFormat('MM-dd-yyyy');
           const content = InvoiceTemplate.invoicePdf(product);
           const browser = await puppeteer.launch();
           const page = await browser.newPage();
           await page.setContent(content);
           const fileName = `${uuidv4()}_invoices_${formattedDate}.pdf`;
           const dirPath = path.join(__parentDir, 'download', `${userId}`);

           if (!fs.existsSync(dirPath)) {
              fs.mkdirSync(dirPath, { recursive: true });
           }

           const pdfPath = path.join(dirPath, fileName);

           await page.pdf({path: pdfPath, format: 'A4'});

           await browser.close();
           return {pdfPath, fileName};
        }
        catch(err) {
           Logger.error('pdf generation failed ' +err.message);
        }
    }
}
