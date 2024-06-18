'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BuildingOfficeIcon, DocumentTextIcon } from '@heroicons/react/24/outline'
import { DocumentTextIcon as DocumentTextIconSolid, BuildingOfficeIcon as BuildingOfficeIconSolid } from '@heroicons/react/24/solid'

const links = [
  { labelName: 'Company', icon: BuildingOfficeIcon, activeIcon: BuildingOfficeIconSolid, href: '#' },
  { labelName: 'Invoices', icon: DocumentTextIcon, activeIcon: DocumentTextIconSolid, href: '/' }
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <nav 
      className='border-r w-64'
    >
      <ul className='flex flex-col gap-2 py-2 px-4'>
        {links.map((link, i) => (
          <Link key={i} href={link.href}>
            <li 
              className={`${pathname === link.href 
                ? 'text-[#212121] bg-[#f0f1f4]' 
                : 'text-[#6D6D6D] hover:text-[#212121] hover:bg-[#F5F6F7]'
              } flex items-center gap-3 py-[10px] px-3 rounded-[5px]`}
            >
              {pathname === link.href 
                ? <link.activeIcon className='h-5 stroke-2'/> 
                : <link.icon className='h-5 stroke-2'/>
              }
              <span className='font-semibold text-sm'>{link.labelName}</span>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  )
}