import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';

export class GeneratePdf {
    static async generatePDF(userId, content) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(content);

    const userPdfDirectory = path.join(__dirname, 'pdfs', userId.toString());
    if (!fs.existsSync(userPdfDirectory)) {
        fs.mkdirSync(userPdfDirectory, { recursive: true });
    }

    const fileName = `quotation_${Date.now()}.pdf`;
    const filePath = path.join(userPdfDirectory, fileName);
    await page.pdf({ path: filePath, format: 'A4' });

    await browser.close();
    return filePath;
}}
