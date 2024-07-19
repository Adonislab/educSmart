'use client'
import React, { useEffect, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';

interface Reclamation {
  id: number;
  object: string;
  description: string;
  nom: string;
  cours: string;
}

const ReclamationList: React.FC = () => {
  const [reclamations, setReclamations] = useState<Reclamation[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReclamations = async () => {
      try {
        const response = await fetch('http://localhost:3001/reclamations');
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des réclamations');
        }
        const data: Reclamation[] = await response.json();
        setReclamations(data);
      } catch (error) {
        setError('Erreur lors de la récupération des réclamations');
        toast.error('Erreur lors de la récupération des réclamations');
        console.error('Erreur:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReclamations();
  }, []);

  return (
    <div className="min-h-screen bg-blue-500 flex flex-col items-center p-6">
      <Toaster />
      <h1 className="text-2xl font-bold text-orange-500 mb-6">Liste des Réclamations</h1>
      {loading ? (
        <p>Chargement...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="overflow-x-auto w-full max-w-6xl">
          <table className="min-w-full bg-white shadow-md rounded">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4 border-b text-left">Objet</th>
                <th className="py-2 px-4 border-b text-left">Description</th>
                <th className="py-2 px-4 border-b text-left">Nom</th>
                <th className="py-2 px-4 border-b text-left">Cours</th>
              </tr>
            </thead>
            <tbody>
              {reclamations.map((reclamation) => (
                <tr key={reclamation.id} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b text-center">{reclamation.object}</td>
                  <td className="py-2 px-4 border-b text-center">{reclamation.description}</td>
                  <td className="py-2 px-4 border-b text-center">{reclamation.nom}</td>
                  <td className="py-2 px-4 border-b text-center">{reclamation.cours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ReclamationList;
