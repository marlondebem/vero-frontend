'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  BuildingOfficeIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline'

const links = [
  { labelName: 'Home', icon: BuildingOfficeIcon, href: '/' },
  { labelName: 'Invoices', icon: DocumentTextIcon, href: '/invoices' },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <nav className='border-r hidden lg:flex'>
      <ul className='flex flex-col gap-2 py-3 px-3'>
        {links.map((link, i) => (
          <Link key={i} href={link.href}>
            <li
              className={`${
                (link.href === '/' && pathname === '/') ||
                (link.href !== '/' && pathname.startsWith(link.href))
                  ? 'text-spaceblack bg-gray-50'
                  : 'text-gray-500 hover:text-spaceblack hover:bg-gray-100 border-transparent hover:border-gray-100'
              } flex items-center gap-3 rounded-[10px] p-[10px] border transition-colors`}
            >
              <link.icon className='h-5 stroke-2' />
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  )
}
