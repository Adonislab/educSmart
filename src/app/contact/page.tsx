import React from 'react';
import Link from 'next/link';
import bg from '../../../public/educationbanniere.png';


function Index() {
  return (
    <>
      <section className="relative py-10 mb-80">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bg.src})`,
            opacity: '1',
            height: 500,
          }}
        ></div>
        <div className="container mx-auto bg-opacity-75 p-8 rounded relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Contact</h1>
          <div className="mt-6">
            <Link href="/" className="text-white hover:underline mr-4">
              Accueil
            </Link>
            <Link href="/contact" className="text-white hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </section>

     
      {/* Section Contact Form and Map */}
      <section className="bg-white py-10 md:py-16 mt-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Formulaire de contact */}
          <div className="p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">Contactez-nous</h2>
            <form className="w-full max-w-lg mx-auto">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Nom
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Votre nom"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Votre email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  placeholder="Votre message"
                  rows={4}
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
          {/* Carte Google Maps */}
          <div className="h-96 md:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.3689375308734!2d-17.47396598469531!3d14.69212398973427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec1729367cf1c83%3A0xf2ef18d6e36eb31c!2sDakar%2C%20Senegal!5e0!3m2!1sen!2s!4v1615360414256!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export default Index;

