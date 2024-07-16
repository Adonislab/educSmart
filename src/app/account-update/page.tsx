'use client'
import React, { useState, useEffect } from 'react';
import { toast, Toaster } from 'react-hot-toast';

const EditAccountPage: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [role, setRole] = useState<string>('');

  useEffect(() => {
    // Vous pouvez charger les données existantes de l'utilisateur ici
    // Exemple :
    const loadUserData = async () => { 
      try {
        const response = await fetch('http://localhost:3001//signup', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setName(data.name);
        setRole(data.role);
      } catch (error) {
        console.error('Error loading user data:', error);
      }
    };

    loadUserData();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/signup', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
        body: JSON.stringify({
          user: {
            name: name,
            role: role,
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      toast.success('Compte mis à jour avec succès!');
    } catch (error) {
      console.error('Error updating user:', error);
      toast.error('Erreur lors de la mise à jour du compte.');
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center bg-orange-100 py-16 md:py-24">
      <div className="max-w-md w-full md:w-auto md:mx-auto md:bg-white md:p-6 md:rounded-md md:shadow-md">
        <Toaster />
        <h2 className="text-2xl font-bold mb-6 text-center text-orange-500">Éditer le Compte</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">
              Rôle
            </label>
            <select
              id="role"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="Eleve">Eleve</option>
              <option value="Ecole">Ecole</option>
              <option value="Parent">Parent</option>      
            </select>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Mettre à jour
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditAccountPage;
