// components/Dashboard.tsx
'use client'
import React, { useEffect, useState } from 'react';
import NavLinks from './Sidebar';
import Image from 'next/image';
import img from '../../public/kid.png';

const Dashboard: React.FC = () => {
  const [userRole, setUserRole] = useState<string>('Directeur'); //Parent - Eleve - Directeur 

  useEffect(() => {
    // Obtenez le token depuis le localStorage
    const token = localStorage.getItem('authToken');

    if (token) {
      // Faire une requête pour obtenir les informations de l'utilisateur
      fetch('http://localhost:3001/login', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => response.json())
      .then(data => {
        if (data.role) {
          setUserRole(data.role);
        }
      })
      .catch(error => console.error('Error fetching user data:', error));
    } else {
      console.error('No token found in localStorage');
    }
  }, []);

  return (
    <div className="min-h-screen bg-blue-500 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white p-4 shadow-lg">
        <h2 className="text-2xl text-orange-500 font-bold mb-6">EducSmart</h2>
        <NavLinks userRole={userRole} />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div>
            <Image
                src={img}
                width={1500}
                height={1500}
                alt="Picture of the author"
            />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


