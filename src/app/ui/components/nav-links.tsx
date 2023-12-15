'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'Home', href: '/' },
  {
    name: 'About',
    href: '/about',
  },
  { name: 'Contact', href: '/contact' },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <li key={link.name}>
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                'block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:p-0',
                {
                    'text-teal dark:text-mint': pathname === link.href,
                    'text-gray-700 dark:text-white': pathname !== link.href,
                }
              )}
            >
              {link.name}
            </Link>
          </li>
        );
      })}
    </>
  );
}
