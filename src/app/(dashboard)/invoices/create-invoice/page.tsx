import { Input } from "@/components/ui/input";

export default function CreateInvoice() {
  return (
    <div className="h-full">
      <div className="flex h-full">
        <div className="w-1/2 flex flex-col">
          <div className="bg-gray-50 h-full px-6 pt-6 flex items-center justify-center">
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
          </div>
        </div>
        <div className="flex-1 border-l flex justify-center px-14 py-6">
          <form className="max-w-xl w-full">
            <h1 className="text-xl font-semibold text-spaceblack pb-6">Invoice details</h1>
            <div className="flex flex-col gap-4">
              <label className="flex flex-col gap-2 font-medium text-spaceblack">
                <span className="text-sm font-medium text-gray-500">Client name</span>
                <Input type="text" placeholder="Amazon, Inc."/>
              </label>
              <label className="flex flex-col gap-2 font-medium">
              <span className="text-sm font-medium text-gray-500">Invoice number</span>
                <Input type="text" placeholder="e.g. #0001" />
              </label>
              <div className="flex w-full gap-4 justify-between">
                <label className="flex flex-col w-full gap-2 font-medium">
                <span className="text-sm font-medium text-gray-500">Invoice date</span>
                  <Input type="date" placeholder="Amazon, Inc." />
                </label>
                <label className="flex flex-col w-full gap-2 font-medium">
                <span className="text-sm font-medium text-gray-500">Due date</span>
                  <Input type="date" />
                </label>
              </div>
              <label className="flex flex-col gap-2 font-medium">
              <span className="text-sm font-medium text-gray-500">Amount</span>
                <Input type="number" />
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}