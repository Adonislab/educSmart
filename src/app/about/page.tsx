import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import bg from '../../../public/educationbanniere.png'
import eleve from '../../../public/about-banner.png'
import maps from '../../../public/maps.png'
import etp4 from '../../../public/etp4africa_logo.jpeg'

const companies = [
    { name: 'Company 1', logo: etp4 },
    { name: 'Company 2', logo: etp4 },
    { name: 'Company 3', logo: etp4 },
    { name: 'Company 4', logo: etp4 },
    { name: 'Company 5', logo: etp4 },
    { name: 'Company 6', logo: etp4 },
    { name: 'Company 7', logo: etp4 },
    { name: 'Company 8', logo: etp4 },
  ];

function AboutSection() {
  return (
    <>
      {/* Section avec l'image en background */}
      <section className="relative py-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bg.src})`,
            opacity: '1',
            height: 500,
          }}
        ></div>
        <div className="container mx-auto bg-opacity-75 p-8 rounded relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">À propos</h1>
          <p className="text-lg md:text-xl text-white mb-4">
            Bienvenue sur notre plateforme ÉducSmart, où nous nous efforçons de révolutionner la gestion scolaire et le suivi parental.
            Notre mission est de fournir des outils innovants et accessibles pour améliorer l&apos;expérience éducative pour tous.
          </p>
          <p className="text-lg md:text-xl text-white mb-4">
            Notre logiciel de gestion des écoles est conçu pour être utilisé par les administrateurs, les enseignants, les parents, et les élèves,
            offrant une solution complète et intégrée pour une éducation moderne et efficace.
          </p>
          <div className="mt-6">
            <Link href="/" className="text-white hover:underline mr-4">
              Accueil
            </Link>
            <Link href="/about" className="text-white hover:underline">
              À propos
            </Link>
          </div>
        </div>
      </section>

      {/* Section avec l'image à gauche et texte à droite */}
      <section className="bg-white py-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          {/* Image à gauche */}
          <div className="md:w-1/2 mb-6 md:mb-0">
            <Image
              src={eleve}
              width={500}
              height={500}
              alt="Image d'étudiant"
            />
          </div>
          {/* Texte à droite */}
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-lg md:text-xl text-gray-700 mb-4">
              EDUCSMART est une plateforme tout-en-un pour l&apos;apprentissage et 
              l&apos;enseignement à distance, ainsi qu&apos;un carnet de notes en ligne 
              pour les élèves. Avec des cours de répétition à la demande, 
              les élèves peuvent demander une formation en direct avec les 
              enseignants pour améliorer leur compréhension des sujets étudiés. 
              Grâce à EDUCSMART, les élèves ont accès à un outil éducatif complet 
              pour améliorer leur performance scolaire. 
            </p>  
          </div>
        </div>
      </section>

      <section className="bg-white py-8 md:py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Texte à gauche */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-500 mb-4">
            Nombre de pays connectés
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            EducSmart est utilisé dans plus de 50 pays à travers le monde, offrant une solution intégrée pour l&apos;éducation moderne et efficace.
            Notre plateforme aide les écoles, les enseignants, les parents et les élèves à améliorer l&apos;expérience éducative à chaque étape du chemin.
          </p>
        </div>
        {/* Image à droite */}
        <div className="md:w-1/2">
          <div className="relative h-full">
            <Image
              src={maps} 
              alt="Image illustrative"
              height={500}
              width={500}
            />
          </div>
        </div>
      </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-8">
            Des entreprises et organisations de premier plan croient en notre vision.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {companies.map((company, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-white shadow rounded">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={150}
                  height={150}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutSection;
