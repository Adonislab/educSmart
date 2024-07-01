'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const SigninForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative flex flex-col items-center justify-center bg-orange-100 py-16 md:py-24">
      
      {/* Formulaire en bas */}
      <div className="max-w-md w-full md:w-auto md:mx-auto md:bg-white md:p-6 md:rounded-md md:shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-orange-500">Connexion</h2>
        
        <form className="space-y-4">
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
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Mot de passe
            </label>
            <div className="flex items-center border border-gray-300 rounded-md shadow-sm mt-1">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                className="block w-full px-3 py-2 text-gray-700 focus:outline-none"
              />
              <button
                type="button"
                className="px-3 py-2 text-gray-600 focus:outline-none"
                onClick={togglePasswordVisibility}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Se connecter
            </button>
          </div>
        </form>
        <p className="text-center text-gray-600 mb-4">
         Pas encore de compte ?{' '}
          <Link href="/signin" className="text-blue-500 hover:underline">
            Inscrivez-vous ici
          </Link>{' '}
          pour accéder à votre compte.
        </p>
      </div>
    </div>
  );
};

export default SigninForm;

