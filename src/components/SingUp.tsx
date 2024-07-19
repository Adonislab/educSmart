'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { toast, Toaster } from 'react-hot-toast';

interface FormData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  role: string; // Ajoutez le champ rôle ici
}

const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    role: '', // Initialisez le rôle ici
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const signup = async (userData: FormData) => {
    try {
      const response = await fetch('http://localhost:3001/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: userData }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      toast.success('Inscription réussie!');
      // Redirection à l'aide de window.location
      window.location.href = '/login';
    } catch (error) {
      toast.error('Erreur lors de l\'inscription.');
      console.error('Error:', error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = (type: 'password' | 'password_confirmation') => {
    if (type === 'password') {
      setShowPassword(!showPassword);
    } else if (type === 'password_confirmation') {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.password_confirmation) {
      toast.error('Les mots de passe ne correspondent pas!');
      return;
    }
    await signup(formData);
  };

  return (
    <div className="relative flex flex-col items-center justify-center bg-orange-100 py-16 md:py-24">
      <Toaster />
      <div className="max-w-md w-full md:w-auto md:mx-auto md:bg-white md:p-6 md:rounded-md md:shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-orange-500">Inscription</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nom d&apos;utilisateur
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={formData.email}
              onChange={handleChange}
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
              required
              value={formData.role}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="" disabled>Choisissez un rôle</option>
              <option value="directeur">Directeur</option>
              <option value="parent">Parent</option>
              <option value="eleve">Élève</option>
            </select>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Mot de passe
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="new-password"
                required
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility('password')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  className="text-gray-400 h-5 w-5 cursor-pointer"
                />
              </button>
            </div>
          </div>
          <div>
            <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700">
              Confirmer le mot de passe
            </label>
            <div className="relative">
              <input
                id="password_confirmation"
                name="password_confirmation"
                type={showConfirmPassword ? 'text' : 'password'}
                autoComplete="new-password"
                required
                value={formData.password_confirmation}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility('password_confirmation')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <FontAwesomeIcon
                  icon={showConfirmPassword ? faEyeSlash : faEye}
                  className="text-gray-400 h-5 w-5 cursor-pointer"
                />
              </button>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Demande d&apos;inscription
            </button>
          </div>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Déjà inscrit ?{' '}
          <Link href="/login" passHref className="text-blue-500 hover:underline">
            Connectez-vous ici
          </Link>{' '}
          pour accéder à votre compte.
        </p>
      </div>
    </div>
  );
};

export default SignupForm;




