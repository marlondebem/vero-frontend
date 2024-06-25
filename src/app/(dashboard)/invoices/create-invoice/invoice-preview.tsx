export function InvoicePreview() {
  return (
    <div className="border p-14 rounded-t-xl bg-white drop-shadow-xl w-full h-full">
      <h2 className="text-2xl font-bold mb-6 text-spaceblack">Invoice</h2>
      <div className="mb-6">
        <p className="text-sm text-gray-500">Client name</p>
        <div className="bg-gray-100 h-6 animate-pulse rounded-md"></div>
      </div>
      <div className="mb-6">
        <p className="text-sm text-gray-500">Invoice number</p>
        <div className="bg-gray-100 h-6 animate-pulse rounded-md"></div>
      </div>
      <div className="mb-6">
        <p className="text-sm text-gray-500">Amount</p>
        <div className="bg-gray-100 h-6 animate-pulse rounded-md"></div>
      </div>
    </div>
  )
}