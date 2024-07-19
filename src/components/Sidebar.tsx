// components/NavLinks.tsx
import React from 'react';
import Link from 'next/link';

interface NavLinksProps {
  userRole: string;
}

const NavLinks: React.FC<NavLinksProps> = ({ userRole }) => {
  const links = [
    { href: 'courses', label: 'Création de  cours', roles: ['Directeur'] },
    { href: 'cours', label: 'Cours', roles: ['Eleve'] },
     { href: 'cours', label: 'Cours', roles: ['Parent'] },
    { href: 'gestioncours', label: 'Gestion des cours', roles: ['Directeur'] },
    { href: 'appreciation', label: 'Création Apppréciation', roles: ['Directeur'] },
    { href: 'evaluation', label: 'Appréciations', roles: ['Eleve'] },
    { href: 'evaluation', label: 'Appréciations', roles: ['Parent'] },
    { href: 'gestionevaluation', label: 'Gestion des appréciations', roles: ['Directeur'] },
    { href: 'reclamations', label: 'Faire des réclamations', roles: ['Parent'] },
    { href: 'consultationreclam', label: 'Consultation des réclamations', roles: ['Directeur'] },
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
