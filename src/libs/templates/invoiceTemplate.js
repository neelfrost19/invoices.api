import product from "jsonwebtoken/lib/NotBeforeError.js";

export class InvoiceTemplate {

    static invoicePdf(products){
        let total=0, grandTotal=0;
        products.forEach(product => {
            total+=(product.rate * product.quantity);
            grandTotal+=(product.gstRate * product.quantity);
        })

        return `
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Invoice Table</title>
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
                        color: #543e9b;
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
                    .footer {
                        margin-top: 500px;
                        clear: both;
                    }
                    .footer .date {
                        float: left;
                    }
                </style>
            </head>
            <body>
            
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Qty</th>
                        <th>Rate</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    ${products.map(product => `
                         <tr>
                           <td>${product.name}</td>
                           <td class="qty"><a href="#">${product.quantity}</td>
                           <td>${product.rate}</td>
                           <td>INR ${product.rate * product.quantity}</td>
                         </tr>
                       `).join('')}
                </tbody>
            </table>
            
            <div class="total-section">
                <div class="line"></div>
                <table>
                    <tbody>
                        <tr>
                            <td>Total</td>
                            <td>INR ${total}</td>
                        </tr>
                        <tr>
                            <td>GST</td>
                            <td>18%</td>
                        </tr>
                    </tbody>
                </table>
                <div class="grand-total-line-top"></div>
                <table>
                    <tbody>
                        <tr class="grand-total">
                            <td>Grand Total</td>
                            <td>₹ ${grandTotal.toFixed(2)}</td>
                        </tr>
                    </tbody>
                </table>
                <div class="grand-total-line-bottom"></div>
            </div>
            
            <div class="footer">
                <div class="date">
                    Date: ${products[0].date}
                </div>
            </div>
            
            </body>
        </html>
         `;
    }
}
