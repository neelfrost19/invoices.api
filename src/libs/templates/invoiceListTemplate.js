import {DateTime} from 'luxon';

export class InvoiceListTemplate {

    static InvoiceListRender(generatedInvoices, userName, pathId, baseUrl){
        return `
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Invoice List</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 60px;
                    }
                    table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-bottom: 20px;
                    }
                    th, td {
                        padding: 8px 12px;
                    }
                    th {
                        background-color: #f9f9f9;
                        text-align: left;
                        border-bottom: 1px solid #949090;
                    }
                    .qty a {
                        color: #3e549b;
                        text-align: justify;
                        text-decoration: none;
                    }
                    .total-section {
                        width: 300px;
                        float: right;
                    }
                    .total-section th, .total-section td {
                        padding: 8px 12px;
                        border: none;
                    }
                    .total-section .line {
                        border-top: 1px solid #949090;
                        margin-top: 20px;
                    }
                    .grand-total {
                        font-weight: bold;
                        color: #543e9b;
                    }
                    .grand-total-line-top {
                        border-top: 2px solid #ccc;
                        margin-top: 8px;
                    }
                    .grand-total-line-bottom {
                        border-bottom: 2px solid #ccc;
                        margin-bottom: 8px;
                    }
                    .header {
                        margin-bottom: 10px;
                        clear: both;
                    }
                    .header .userName {
                        float: left;
                    }
                    .invoiceButton {
                        padding: 10px 20px;
                        font-size: 16px;
                        color: white;
                        background-color: #cc662c;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                        margin: 5px;
                        transition: background-color 0.3s;
                    }
                    .invoiceButton:hover {
                        background-color: #fd5a00;
                    }
                </style>
            </head>
            <body>            
            <div class="header">
                <div class="userName">
                    Generated by: ${userName}
                </div>
            </div>       
            </br>
            </br>
            </br>     
            <table>
                <thead>
                    <tr>
                        <th>Invoice File</th>
                        <th>Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    ${generatedInvoices.map((invoice, index) => `
                         <tr>
                           <td className="qty"><a href="#">${invoice.documentName}</td>
                           <td>${DateTime.fromJSDate(invoice.createdAt).toLocaleString(DateTime.DATE_FULL)}</td>
                           <td>
                               <a href=${baseUrl+"/download/"+pathId+"/"+invoice.documentName}>
                                    <button id= {"invoiceButton" ""+index}>Download</button>
                               </a>
                           </td>
                         </tr>
                       `).join('')}
                </tbody>
            </table>                     
            </body>
        </html>
         `;
    }
}