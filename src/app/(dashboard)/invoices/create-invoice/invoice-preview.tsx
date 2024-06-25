export function InvoicePreview() {
  return (
    <div className="border p-14 rounded-t-xl bg-white drop-shadow-xl w-full h-full">
      <h2 className="text-2xl font-bold mb-6 text-spaceblack">Invoice</h2>
      <div className="mb-6">
        <p className="text-sm text-gray-500">Client name</p>
        <p className="text-md text-spaceblack">Amazon, Inc.</p>
      </div>
      <div className="mb-6">
        <p className="text-sm text-gray-500">Invoice number</p>
        <p className="text-md text-spaceblack">#0001</p>
      </div>
      <div className="flex justify-between mb-6">
        <div>
          <p className="text-sm text-gray-500">Invoice date</p>
          <p className="text-md text-spaceblack">06/23/2024</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Due date</p>
          <p className="text-md text-spaceblack">07/22/2024</p>
        </div>
      </div>
      <div className="mb-6">
        <p className="text-sm text-gray-500">Amount</p>
        <p className="text-md text-spaceblack">$200.00</p>
      </div>
      <div className="mb-6">
        <p className="text-sm text-gray-500">Items</p>
        <table className="w-full text-left text-sm border-collapse">
          <thead>
            <tr>
              <th className="border-b pb-2">Item</th>
              <th className="border-b pb-2">Description</th>
              <th className="border-b pb-2">Quantity</th>
              <th className="border-b pb-2">Price</th>
              <th className="border-b pb-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="pt-2 pb-2 border-b">Plumber</td>
              <td className="pt-2 pb-2 border-b">A good service done</td>
              <td className="pt-2 pb-2 border-b">2</td>
              <td className="pt-2 pb-2 border-b">$50.00</td>
              <td className="pt-2 pb-2 border-b">$100.00</td>
            </tr>
            <tr>
              <td className="pt-2 pb-2 border-b">Support</td>
              <td className="pt-2 pb-2 border-b">Great job</td>
              <td className="pt-2 pb-2 border-b">1</td>
              <td className="pt-2 pb-2 border-b">$100.00</td>
              <td className="pt-2 pb-2 border-b">$100.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}