import { Button } from "@/components/ui/Button/button";
import { PlusIcon } from "@heroicons/react/24/outline";

export default function Invoices() {
  return (
    <div className="px-6 border-b">
      <div className="flex h-24 items-center justify-between">
        <h1 className="text-xl font-semibold text-spaceblack">Invoices</h1>
        <div>
          <Button>
            <PlusIcon className="mr-2 h-4 w-4 stroke-2" />
            New invoice
          </Button>
        </div>
      </div>
    </div>
  )
}