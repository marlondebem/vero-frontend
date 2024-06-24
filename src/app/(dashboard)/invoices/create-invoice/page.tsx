import { Input } from "@/components/ui/input";

export default function CreateInvoice() {
  return (
    <div className="h-full">
      <div className="flex h-full">
        <div className="w-1/2 flex flex-col">
          <div className="bg-gray-50 h-full px-6 flex items-center justify-center"></div>
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