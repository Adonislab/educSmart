'use client'
import React, { useEffect, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';

interface Appreciation {
  id: number;
  notes: number;
  appreciation: string;
  nom: string;
  cours: string;
}

const ListeAppreciations: React.FC = () => {
  const [appreciations, setAppreciations] = useState<Appreciation[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Récupérer le token depuis le localStorage
    const token = localStorage.getItem('authToken');

    if (!token) {
      toast.error('Aucun jeton trouvé dans le localStorage');
      return;
    }

    fetch('http://localhost:3001/appreciations', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        setAppreciations(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des appréciations:', error);
        toast.error('Erreur lors de la récupération des appréciations.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="min-h-screen bg-blue-500 flex flex-col items-center justify-start pt-8">
      <Toaster />
      <h1 className="text-2xl font-bold text-orange-500 mb-6">Liste des Appréciations</h1>
      <div className="w-full max-w-4xl">
        <table className="min-w-full bg-white shadow-md rounded">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200">Notes</th>
              <th className="py-2 px-4 border-b border-gray-200">Appréciation</th>
              <th className="py-2 px-4 border-b border-gray-200">Nom</th>
              <th className="py-2 px-4 border-b border-gray-200">Cours</th>
            </tr>
          </thead>
          <tbody>
            {appreciations.map((appreciation) => (
              <tr key={appreciation.id}>
                <td className="py-2 px-4 border-b border-gray-200">{appreciation.notes}</td>
                <td className="py-2 px-4 border-b border-gray-200">{appreciation.appreciation}</td>
                <td className="py-2 px-4 border-b border-gray-200">{appreciation.nom}</td>
                <td className="py-2 px-4 border-b border-gray-200">{appreciation.cours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListeAppreciations;
