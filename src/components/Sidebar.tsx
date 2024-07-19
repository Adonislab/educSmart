// components/NavLinks.tsx
import React from 'react';
import Link from 'next/link';

interface NavLinksProps {
  userRole: string;
}

const NavLinks: React.FC<NavLinksProps> = ({ userRole }) => {
  const links = [
    { href: 'courses', label: 'Création de  cours', roles: ['Eleve'] },
    { href: 'cours', label: 'Cours', roles: ['Eleve'] },
    { href: 'gestioncours', label: 'Gestion des cours', roles: ['Eleve'] },
    { href: 'appreciation', label: 'Création Apppréciation', roles: ['Eleve'] },
    { href: 'evaluation', label: 'Appréciations', roles: ['Eleve'] },
    { href: 'gestionevaluation', label: 'Gestion des appréciations', roles: ['Eleve'] },
    { href: 'reclamations', label: 'Faire des réclamations', roles: ['Eleve'] },
    { href: 'consultationreclam', label: 'Consultation des réclamations', roles: ['Eleve'] },
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
