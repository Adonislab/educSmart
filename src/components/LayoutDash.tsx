// components/Dashboard.tsx
'use client'
import React, { useEffect, useState } from 'react';
import NavLinks from './Sidebar';

const Dashboard: React.FC = () => {
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    // Remplacez ceci par la méthode réelle pour obtenir les informations de l'utilisateur
    fetch('/api/user')
      .then(response => response.json())
      .then(data => setUserRole(data.role))
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  if (!userRole) {
    return <div>Un peu de patience...</div>; // Afficher un état de chargement ou une redirection
  }

  return (
    <div className="min-h-screen bg-blue-500 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white p-4 shadow-lg">
        <h2 className="text-2xl text-orange-500 font-bold mb-6">EducSmart</h2>
        <NavLinks userRole={userRole} />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6 text-white">Bienvenue sur le Tableau de bord</h1>
        <div>
          <p className="mb-4">Voici votre tableau de bord où vous pouvez naviguer entre les différentes sections.</p>
          {/* Ajoute ici le contenu spécifique à chaque section */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

