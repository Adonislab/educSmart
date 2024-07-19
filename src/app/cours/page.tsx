'use client'
import React, { useEffect, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';

const CoursesList: React.FC = () => {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Récupérer le token depuis le localStorage
    const token = localStorage.getItem('authToken');

    if (!token) {
      toast.error('No token found in localStorage');
      return;
    }

    fetch('http://localhost:3001/courses', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        setCourses(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
        toast.error('Erreur lors de la récupération des cours.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Chargement...</div>;
  }

  return (
    <div className="min-h-screen bg-blue-500 flex flex-col items-center justify-start p-4">
      <Toaster />
      <h1 className="text-3xl font-bold mb-6 text-orange-500">Liste des cours</h1>
      <div className="overflow-x-auto w-full">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Nom du cours</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Date de début</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Date de fin</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Catégorie</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {courses.map((course) => (
              <tr key={course.id} className="hover:bg-gray-100">
                <td className="py-4 px-6 text-sm font-medium text-gray-900">{course.name}</td>
                <td className="py-4 px-6 text-sm text-gray-500">{course.start_date}</td>
                <td className="py-4 px-6 text-sm text-gray-500">{course.end_date}</td>
                <td className="py-4 px-6 text-sm text-gray-500">Science Sociale</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoursesList;
