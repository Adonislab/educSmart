'use client';

import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';

const CreateReclamation: React.FC = () => {
  const [object, setObject] = useState('');
  const [description, setDescription] = useState('');
  const [nom, setNom] = useState('');
  const [cours, setCours] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const token = localStorage.getItem('authToken');

    if (!token) {
      toast.error('Aucun jeton trouvé dans le localStorage');
      return;
    }

    fetch('http://localhost:3001/reclamations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        reclamation: {
          object,
          description,
          nom,
          cours
        }
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('La réponse du réseau n\'était pas correcte');
      }
      return response.json();
    })
    .then(data => {
      toast.success('Réclamation créée avec succès');
      setTimeout(() => {
            window.location.href = '/dashboard';
        }, 2000);
      console.log('Succès:', data);
    })
    .catch(error => {
      toast.error('Erreur lors de la création de la réclamation');
      console.error('Erreur:', error);
    });
  };

  return (
    <div className="min-h-screen bg-blue-500 flex flex-col items-center justify-center">
      <Toaster />
      <h1 className="text-2xl font-bold text-orange-500 mb-6">Créer une Réclamation</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="object">Objet</label>
          <input type="text" id="object" value={object} onChange={(e) => setObject(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">Description</label>
          <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nom">Nom</label>
          <input type="text" id="nom" value={nom} onChange={(e) => setNom(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cours">Cours</label>
          <input type="text" id="cours" value={cours} onChange={(e) => setCours(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Soumettre</button>
      </form>
    </div>
  );
};

export default CreateReclamation;

