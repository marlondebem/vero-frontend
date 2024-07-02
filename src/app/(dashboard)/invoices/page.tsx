import { Navigation } from '@/components/navigation-menu'
import { Button } from '@/components/ui/button'
import { PlusIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function Invoices() {
  return (
    <div className='px-6 border-b'>
      <div className='flex h-20 items-center justify-between'>
        <h1 className='text-xl font-semibold text-spaceblack'>Invoices</h1>
        <div>
          <Link href={'#'}>
            <Button>
              <PlusIcon className='mr-2 h-4 w-4 stroke-2' />
              New invoice
            </Button>
          </Link>
        </div>
      </div>

      <Navigation />
    </div>
  )
}
