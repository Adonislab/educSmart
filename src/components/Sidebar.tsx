// components/NavLinks.tsx
import React from 'react';
import Link from 'next/link';

interface NavLinksProps {
  userRole: string;
}

const NavLinks: React.FC<NavLinksProps> = ({ userRole }) => {
  const links = [
    { href: '/dashboard/home', label: 'Accueil', roles: ['admin', 'user'] },
    { href: '/dashboard/features', label: 'Fonctionnalités', roles: ['admin', 'user'] },
    { href: '/dashboard/contents', label: 'Contenus', roles: ['admin', 'user'] },
    { href: '/dashboard/about', label: 'À propos', roles: ['admin', 'user'] },
    { href: '/dashboard/contact', label: 'Contact', roles: ['admin', 'user'] },
    // Ajoutez plus de liens ici selon les rôles
  ];

  return (
    <nav>
      <ul>
        {links.map((link) => 
          link.roles.includes(userRole) && (
            <li className="mb-4" key={link.href}>
              <Link href={link.href} className="text-black-700 hover:text-orange-500">
                {link.label}
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default NavLinks;
