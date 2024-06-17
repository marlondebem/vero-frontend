'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  DocumentTextIcon, 
  HomeIcon 
} from '@heroicons/react/24/outline'
import { 
  DocumentTextIcon as DocumentTextIconSolid,
  HomeIcon as HomeIconSolid 
} from '@heroicons/react/24/solid'

const links = [
  { labelName: 'Home', icon: HomeIcon, activeIcon: HomeIconSolid, href: '/' },
  { labelName: 'Invoices', icon: DocumentTextIcon, activeIcon: DocumentTextIconSolid, href: '#' }
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <nav 
      className='border-r border-[#E6E6E6]'
    >
      <ul className='flex flex-col px-2 py-2 gap-2'>
        {links.map((link, i) => (
          <Link key={i} href={link.href}>
            <li 
              className={`${pathname === link.href 
                ? 'text-[#212121] bg-[#F0F1F4]' 
                : 'text-[#757575] hover:text-[#212121] hover:bg-[#F5F6F7]'
              } flex p-[10px] rounded-md`}
            >
              {pathname === link.href 
                ? <link.activeIcon className='h-5 w-5'/> 
                : <link.icon className='h-5 w-5'/>
              }
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  )
}