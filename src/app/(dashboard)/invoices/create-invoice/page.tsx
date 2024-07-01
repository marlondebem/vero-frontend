import { Input } from '@/components/ui/input'
import { InvoicePreview } from './invoice-preview'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

export default function CreateInvoice() {
  const today = new Date().toISOString().split('T')[0]

  return (
    <div className='h-full'>
      <div className='flex h-full'>
        <div className='hidden lg:w-1/2 lg:flex flex-col bg-gray-100 h-full px-6 pt-6 items-center justify-center'>
          <InvoicePreview />
        </div>

        <div className='w-1/2 border-l flex justify-center py-6'>
          <form className='max-w-xl w-full flex flex-col'>
            <h1 className='text-xl font-semibold text-spaceblack pb-6'>
              Invoice details
            </h1>
            <div className='flex flex-col gap-4 h-full'>
              <div className='flex flex-col gap-2 font-medium text-spaceblack'>
                <Label htmlFor='client'>Client name</Label>
                <Input type='text' id='client' />
              </div>
              <div className='flex flex-col gap-2 font-medium'>
                <Label htmlFor='invoice-number'>Invoice number</Label>
                <Input type='text' id='invoice-number' />
              </div>
              <div className='flex justify-between gap-4'>
                <div className='flex flex-col gap-2 font-medium w-full'>
                  <Label htmlFor='issue-date'>Invoice date</Label>
                  <Input type='date' id='issue-date' defaultValue={today} />
                </div>
                <div className='flex flex-col gap-2 font-medium w-full'>
                  <Label htmlFor='due-date'>Due date</Label>
                  <Input type='date' id='due-date' defaultValue={today} />
                </div>
              </div>
              <div className='flex flex-col gap-2 font-medium text-spaceblack'>
                <Label htmlFor='amount'>Amount</Label>
                <Input type='number' id='amount' />
              </div>
            </div>
            <div className='flex justify-end gap-6'>
              <Link href={'/invoices'}>
                <Button color='ghost'>Cancel</Button>
              </Link>
              <Button>
                Continue
                <ChevronRightIcon className='ml-2 h-4 w-4 stroke-2' />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
