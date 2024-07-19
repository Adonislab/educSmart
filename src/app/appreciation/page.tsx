'use client'
import React, { useState, FormEvent } from 'react';
import { toast, Toaster } from 'react-hot-toast';

const CreerAppreciation: React.FC = () => {
  const [notes, setNotes] = useState<string>('');
  const [appreciation, setAppreciation] = useState<string>('');
  const [nom, setNom] = useState<string>('');
  const [cours, setCours] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const token = localStorage.getItem('authToken');

    if (!token) {
      toast.error('Aucun jeton trouvé dans le localStorage');
      return;
    }

    fetch('http://localhost:3001/appreciations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        appreciation: {
          notes: parseInt(notes, 10),
          appreciation,
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
      toast.success('Appréciation créée avec succès');
      console.log('Succès:', data);
      setTimeout(() => {
            window.location.href = '/dashboard';
        }, 2000);
    })
    .catch(error => {
      toast.error('Erreur lors de la création de l\'appréciation');
      console.error('Erreur:', error);
    });
  };

  return (
    <div className="min-h-screen bg-blue-500 flex flex-col items-center justify-center">
      <Toaster />
      <h1 className="text-2xl font-bold text-orange-500 mb-6">Créer Appréciation</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="notes">Notes</label>
          <input 
            type="number" 
            id="notes" 
            value={notes} 
            onChange={(e) => setNotes(e.target.value)} 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="appreciation">Appréciation</label>
          <input 
            type="text" 
            id="appreciation" 
            value={appreciation} 
            onChange={(e) => setAppreciation(e.target.value)} 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nom">Etudiant</label>
          <input 
            type="text" 
            id="nom" 
            value={nom} 
            onChange={(e) => setNom(e.target.value)} 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cours">Cours</label>
          <input 
            type="text" 
            id="cours" 
            value={cours} 
            onChange={(e) => setCours(e.target.value)} 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            required 
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Soumettre</button>
      </form>
    </div>
  );
};

export default CreerAppreciation;
