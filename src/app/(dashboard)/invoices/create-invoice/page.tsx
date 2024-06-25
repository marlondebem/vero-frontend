'use client'

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { InvoicePreview } from "./invoice-preview";
import { Label } from "@/components/ui/label";
import { Datepicker } from "@/components/ui/datepicker";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRightIcon, PlusIcon } from "@heroicons/react/24/outline";

export default function CreateInvoice() {
  const [items, setItems] = useState([])

  const addItem = () => {
    setItems([...items, ''])
  }

  const handleItemChange = ({index, value}: any) => {
    const newItems = [...items];
    newItems[index] = value;
    setItems(newItems);
  }

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
                <Input type="text" id="client"/>
              </div>
              <div className="flex flex-col gap-2 font-medium">
                <Label htmlFor="invoice-number">Invoice number</Label>
                <Input type="text" id="invoice-number" />
              </div>
              <div className="flex w-full gap-4 justify-between">
                <div className="flex flex-col w-full gap-2 font-medium">
                  <Label htmlFor="invoice-date">Invoice date</Label>
                  <Datepicker />
                </div>
                <div className="flex flex-col w-full gap-2 font-medium">
                  <Label htmlFor="due-date">Due date</Label>
                  <Datepicker />
                </div>
              </div>
              <div className="flex flex-col gap-2 font-medium">
                <Label htmlFor="amount">Amount</Label>
                <Input type="number" id="amount" />
              </div>
              <div className="flex flex-col gap-2 font-medium">
                <Label>Products and services</Label>
                {items.map((item, index) => (
                  <Input
                    key={index}
                    type="text"
                    value={item}
                    onChange={(e) => handleItemChange(index, e.target.value)}
                    className="mb-2"
                  />
                ))}
                <Button color="ghost" type="button" onClick={addItem}>
                  <PlusIcon className="mr-2 h-4 w-4 stroke-2" />
                  Add an item
                </Button>
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