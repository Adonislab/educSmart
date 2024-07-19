'use client'
import React, { useEffect, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';

interface Course {
  id: number;
  name: string;
  start_date: string;
  end_date: string;
}

const CoursesGestion: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [editCourse, setEditCourse] = useState<Course | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');

    if (!token) {
      toast.error('No token found in localStorage');
      setLoading(false);
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

  const handleEdit = (course: Course) => {
    setEditCourse(course);
  };

  const handleUpdate = () => {
    if (!editCourse) return;

    const token = localStorage.getItem('authToken');
    if (!token) {
      toast.error('No token found in localStorage');
      return;
    }

    fetch(`http://localhost:3001/courses/${editCourse.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(editCourse)
    })
      .then(response => {
        if (response.ok) {
          toast.success('Cours modifié avec succès');
          setCourses(courses.map(course => course.id === editCourse.id ? editCourse : course));
          setEditCourse(null);
        } else {
          throw new Error('Erreur lors de la modification du cours');
        }
      })
      .catch(error => {
        console.error('Error updating course:', error);
        toast.error('Erreur lors de la modification du cours.');
      });
  };

  const handleDelete = (courseId: number) => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      toast.error('No token found in localStorage');
      return;
    }

    fetch(`http://localhost:3001/courses/${courseId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        if (response.ok) {
          toast.success('Cours supprimé avec succès');
          setCourses(courses.filter(course => course.id !== courseId));
        } else {
          throw new Error('Erreur lors de la suppression du cours');
        }
      })
      .catch(error => {
        console.error('Error deleting course:', error);
        toast.error('Erreur lors de la suppression du cours.');
      });
  };

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
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {courses.map((course) => (
              <tr key={course.id} className="hover:bg-gray-100">
                <td className="py-4 px-6 text-sm font-medium text-gray-900">{course.name}</td>
                <td className="py-4 px-6 text-sm text-gray-500">{course.start_date}</td>
                <td className="py-4 px-6 text-sm text-gray-500">{course.end_date}</td>
                <td className="py-4 px-6 text-sm text-gray-500">Science Sociale</td>
                <td className="py-4 px-6 text-sm text-gray-500 flex space-x-4">
                  <button
                    onClick={() => handleEdit(course)}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Modifier
                  </button>
                  <button
                    onClick={() => handleDelete(course.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editCourse && (
        <div className="mt-6 bg-white shadow-md rounded-lg p-4 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Modifier le cours</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Nom du cours</label>
            <input
              type="text"
              value={editCourse.name}
              onChange={(e) => setEditCourse({ ...editCourse, name: e.target.value })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Date de début</label>
            <input
              type="date"
              value={editCourse.start_date}
              onChange={(e) => setEditCourse({ ...editCourse, start_date: e.target.value })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Date de fin</label>
            <input
              type="date"
              value={editCourse.end_date}
              onChange={(e) => setEditCourse({ ...editCourse, end_date: e.target.value })}
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

export default CoursesGestion;
