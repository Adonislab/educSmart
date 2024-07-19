'use client'
import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';

const CreateCourse: React.FC = () => {
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Récupérer le token depuis le localStorage
    const token = localStorage.getItem('authToken');

    if (!token) {
      toast.error('No token found in localStorage');
      return;
    }

    const courseData = {
      name,
      start_date: startDate,
      end_date: endDate,
    };

    try {
      const response = await fetch('http://localhost:3001/courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ course: courseData }),
      });

      if (response.ok) {
        setMessage('Cours créé avec succès!');
        setName('');
        setStartDate('');
        setEndDate('');
        toast.success('Cours créé avec succès!');
        setTimeout(() => {
            window.location.href = '/dashboard';
        }, 2000);
      } else {
        const errorData = await response.json();
        setMessage(`Erreur: ${errorData.message}`);
        toast.error(`Erreur: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Erreur lors de la création du cours.');
      toast.error('Erreur lors de la création du cours.');
    }
  };

  return (
    <div className="min-h-screen bg-blue-500 flex flex-col items-center justify-center">
      <Toaster />
      <h1 className="text-2xl font-bold text-orange-500 mb-6">Créer un nouveau cours</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-1/3">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Nom du cours</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="startDate" className="block text-gray-700 font-bold mb-2">Date de début</label>
          <input
            id="startDate"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="endDate" className="block text-gray-700 font-bold mb-2">Date de fin</label>
          <input
            id="endDate"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Créer le cours</button>
        {message && <p className="mt-4 text-red-500">{message}</p>}
      </form>
    </div>
  );
};

export default CreateCourse;
