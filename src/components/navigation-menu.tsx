'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { labelName: 'Overview', href: '/invoices' },
  { labelName: 'Pending', href: '#' },
  { labelName: 'Sent', href: '#' },
  { labelName: 'Overdue', href: '#' },
  { labelName: 'Paid', href: '#' },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav>
      <ul className='flex gap-6 text-sm font-medium'>
        {links.map((link, i) => (
          <Link key={i} href={link.href}>
            <li
              className={`${
                pathname === link.href
                  ? 'text-spaceblack border-spaceblack'
                  : 'text-gray-500 border-transparent'
              } py-2 border-b-2`}
            >
              {link.labelName}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  )
}
