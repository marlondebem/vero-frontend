import { Input } from "@/components/ui/input";
import { InvoicePreview } from "./invoice-preview";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function CreateInvoice() {
  return (
    <div className="h-full">
      <div className="flex h-full">
        <div className="w-1/2 flex flex-col bg-gray-100 h-full px-6 pt-6 items-center justify-center">
          <InvoicePreview />
        </div>

        <div className="flex-1 border-l flex justify-center px-14 py-6">
          <form className="max-w-xl w-full flex flex-col">
            <h1 className="text-xl font-semibold text-spaceblack pb-6">Invoice details</h1>
            <div className="flex flex-col gap-4 h-full">
              <div className="flex flex-col gap-2 font-medium text-spaceblack">
                <Label htmlFor="client">Client name</Label>
                <Input type="text" id="client" />
              </div>
              <div className="flex flex-col gap-2 font-medium">
                <Label htmlFor="invoice-number">Invoice number</Label>
                <Input type="text" id="invoice-number" />
              </div>
              <div className="flex flex-col gap-2 font-medium">
                <Label htmlFor="amount">Amount</Label>
                <Input type="number" id="amount" />
              </div>
            </div>
            <div className="flex justify-end gap-6">
              <Link href={'/invoices'}>
                <Button color="ghost">
                  Cancel
                </Button>
              </Link>
              <Button>
                Continue
                <ChevronRightIcon className="ml-2 h-4 w-4 stroke-2" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}