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
  const [editAppreciation, setEditAppreciation] = useState<Appreciation | null>(null);

  useEffect(() => {
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

  const handleEdit = (appreciation: Appreciation) => {
    setEditAppreciation(appreciation);
  };

  const handleUpdate = () => {
    if (!editAppreciation) return;

    const token = localStorage.getItem('authToken');
    if (!token) {
      toast.error('Aucun jeton trouvé dans le localStorage');
      return;
    }

    fetch(`http://localhost:3001/appreciations/${editAppreciation.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ appreciation: editAppreciation })
    })
      .then(response => {
        if (response.ok) {
          toast.success('Appréciation modifiée avec succès');
          setAppreciations(appreciations.map(app => app.id === editAppreciation.id ? editAppreciation : app));
          setEditAppreciation(null);
        } else {
          return response.json().then((error) => {
            throw new Error(error.message);
          });
        }
      })
      .catch(error => {
        console.error('Erreur lors de la modification de l\'appréciation:', error);
        toast.error('Erreur lors de la modification de l\'appréciation.');
      });
  };

  const handleDelete = (appreciationId: number) => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      toast.error('Aucun jeton trouvé dans le localStorage');
      return;
    }

    fetch(`http://localhost:3001/appreciations/${appreciationId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        if (response.ok) {
          toast.success('Appréciation supprimée avec succès');
          setAppreciations(appreciations.filter(app => app.id !== appreciationId));
        } else {
          throw new Error('Erreur lors de la suppression de l\'appréciation');
        }
      })
      .catch(error => {
        console.error('Erreur lors de la suppression de l\'appréciation:', error);
        toast.error('Erreur lors de la suppression de l\'appréciation.');
      });
  };

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
              <th className="py-2 px-4 border-b border-gray-200">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appreciations.map((appreciation) => (
              <tr key={appreciation.id}>
                <td className="py-2 px-4 border-b border-gray-200">{appreciation.notes}</td>
                <td className="py-2 px-4 border-b border-gray-200">{appreciation.appreciation}</td>
                <td className="py-2 px-4 border-b border-gray-200">{appreciation.nom}</td>
                <td className="py-2 px-4 border-b border-gray-200">{appreciation.cours}</td>
                <td className="py-2 px-4 border-b border-gray-200 flex space-x-2">
                  <button
                    onClick={() => handleEdit(appreciation)}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
                  >
                    Modifier
                  </button>
                  <button
                    onClick={() => handleDelete(appreciation.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editAppreciation && (
        <div className="mt-6 bg-white shadow-md rounded p-4 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Modifier l&apos;Appréciation</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Notes</label>
            <input
              type="number"
              value={editAppreciation.notes}
              onChange={(e) => setEditAppreciation({ ...editAppreciation, notes: Number(e.target.value) })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Appréciation</label>
            <input
              type="text"
              value={editAppreciation.appreciation}
              onChange={(e) => setEditAppreciation({ ...editAppreciation, appreciation: e.target.value })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Nom</label>
            <input
              type="text"
              value={editAppreciation.nom}
              onChange={(e) => setEditAppreciation({ ...editAppreciation, nom: e.target.value })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Cours</label>
            <input
              type="text"
              value={editAppreciation.cours}
              onChange={(e) => setEditAppreciation({ ...editAppreciation, cours: e.target.value })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            onClick={handleUpdate}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Enregistrer les modifications
          </button>
        </div>
      )}
    </div>
  );
};

export default ListeAppreciations;
