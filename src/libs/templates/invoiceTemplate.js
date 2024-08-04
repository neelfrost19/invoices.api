export class InvoiceTemplate {
    static invoicePdf(products){
         return `
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
        }
        table {
          width: 100%;
          border-collapse: collapse;
        }
        th, td {
          padding: 8px;
          text-align: left;
          border-bottom: 1px solid #ddd;
        }
        th {
          background-color: #f2f2f2;
        }
        .total, .gst, .grand-total {
          text-align: right;
          margin-top: 20px;
        }
        .grand-total {
          font-size: 1.2em;
          font-weight: bold;
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
              <td>${product.quantity}</td>
              <td>${product.rate}</td>
              <td>${product.rate * product.quantity}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      <div class="total">Total: ${''}</div>
      <div class="gst">GST: ${'18%'}</div>
      <div class="grand-total">Grand Total: ${''}</div>
    </body>
    </html>
  `;
    }
}
