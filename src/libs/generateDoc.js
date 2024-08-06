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

export class GenerateDoc {
     static async generateDoc(product, userId, docType) {
        try {
           const formattedDate = DateTime.now().toFormat('MM-dd-yyyy');
           const content = InvoiceTemplate.invoicePdf(product);
           const browser = await puppeteer.launch({
              args: ['--no-sandbox', '--disable-setuid-sandbox']
           });
           const page = await browser.newPage();
           await page.setContent(content);
           const dirPath = path.join(__parentDir, 'download', `${userId}`);

           if (!fs.existsSync(dirPath)) {
              fs.mkdirSync(dirPath, { recursive: true });
           }

           if(!docType){
              docType = 'pdf';
           }

           let fileName, docPath;

           switch (docType) {
              case 'pdf':

                 fileName = `${uuidv4()}_invoices_${formattedDate}.pdf`;
                 docPath = path.join(dirPath, fileName);
                 await page.pdf({path: docPath, format: 'A4'});
                 break;

              case 'img':

                 fileName = `${uuidv4()}_invoices_${formattedDate}.png`;
                 docPath = path.join(dirPath, fileName);
                 await page.setViewport({ width: 1200, height: 800 });
                 await page.screenshot({ path: docPath, type: 'png' })
                 break;

              default:
                 Logger.error(`Invalid file type: ${docType}`);
                 break;
           }

           await browser.close();
           return {docPath, fileName};
        }
        catch(err) {
           Logger.error('document generation failed ' +err.message);
        }
    }
}
