import Image from "next/image";
import education from '../../public/erp_home.png'
import enseigne from '../../public/archive.png'
import teacher from '../../public/home_teacher_fr.png'
import student from '../../public/article_2.png'
import tablette from '../../public/tablette.svg'
import Kid from '../../public/kid.png'
import Link from 'next/link'

const cards = [
  {
    img: education,
    descriptif: 'Administrateurs et directeurs',
    link : '',
    texte: 'Simplifiez-vous la vie avec une gestion digitale de votre établissement. Tous vos rapports administratifs en un clique.',
  },
  {
    img: education,
    descriptif: 'Enseignants',
    link : '',
    texte: 'Passez vers une gestion moderne de vos classes et vos élèves. Postez et réutilisez vos contenus éducatifs et économisez votre énergie.',
  },
  {
    img: education,
    descriptif: 'Parents et élèves',
    link : '',
    texte: 'Suivez le parcours scolaire de vos enfants en temps réel. Accédez aux contenus pédagogiques et aux résultats scolaires de vos enfants.',
  }
];



export default function Home() {
  return (
   
  <>
    <section className="bg-blue-500 p-8 flex items-center justify-center">
      <div className="flex justify-between items-center max-w-6xl w-full">
        <div className="text-white max-w-md">
          <h1 className="text-4xl font-bold mb-4">TOUT-EN-UN</h1>
          <p className="text-xl mb-6">
            La plateforme pour une gestion administrative et pédagogique 
            des établissements éducatifs !
          </p> 
          <div>
            <button className="bg-orange-500 text-white font-semibold py-2 px-4 mr-4 rounded">
              Tester gratuitement
            </button> 
            <button className="border border-white text-white font-semibold py-2 px-4 rounded">
              Demander une démo
            </button> 
          </div>
        </div>
        <div>
          <Image src={education} alt="Education" className="w-full h-auto" width={500} height={500} />
        </div>
      </div>
    </section>

    <section className="bg-white p-8">
      <p className="text-blue-500 text-2xl md:text-3xl mb-6 text-center">
        EducSmart offre une diversité de services aux managers d&apos;écoles, 
        enseignants, parents et élèves
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between">
            <div>
              <Image src={card.img} alt={card.descriptif} className="w-full h-48 object-cover" width={500} height={500} />
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold mb-2 text-blue-500">{card.descriptif}</h3>
                <p className="text-gray-700">{card.texte}</p>
              </div>
            </div>
            <div className="p-4 text-center">
              <Link href={card.link}>
                <button className="bg-orange-500 text-white font-semibold py-2 px-4 rounded">
                  Explorez
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section> 

    <section className="bg-blue-500 p-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Découvrez EducSmart
          </h1>
          <p className="text-xl md:text-2xl text-white">
            Une application utilisable sur ordinateur, tablette ou téléphone, offrant une expérience fluide en ligne ou hors ligne, garantissant ainsi un accès constant à l&apos;éducation, où que vous soyez.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image src={education} alt="EducSmart" className="w-full h-auto" width={500} height={500} />
        </div>
      </div>
    </section>

    <section className="bg-white p-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-500 mb-4">
            Administration et directeurs d&apos;établissements scolaires
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            Avec des fonctionnalités complètes accessibles en ligne et hors ligne, vous pouvez générer 
            des rapports, communiquer facilement avec les parents et le personnel, archiver les documents 
            officiels.
          </p>
          <Link href="./">
            <button className="bg-orange-500 text-white font-semibold py-2 px-4 rounded">
              Maximiser l&apos;efficacité de votre école
            </button>
          </Link>
        </div>
        <div className="md:w-1/2">
          <Image src={enseigne} alt="EducSmart" className="w-full h-auto" width={500} height={500} />
        </div>
      </div>
    </section>

    <section className="bg-white p-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <Image src={teacher} alt="EducSmart" className="w-full h-auto" width={500} height={500} />
        </div>
        <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-500 mb-4">
            Les enseignants du primaire, du secondaire et les Universitaires
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            Une application utilisable sur ordinateur, tablette ou téléphone, offrant une expérience fluide en ligne ou hors ligne, garantissant ainsi un accès constant à l&apos;éducation, où que vous soyez.
          </p>
          <Link href="./">
            <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded">
              Tester votre allié pédagogique 
            </button>
          </Link>
        </div>
      </div>
    </section>

    <section className="bg-white p-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-500 mb-4">
            Les apprenants et leurs parents se retrouvent !
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            Découvrez EduSmart, votre portail éducatif complet. Recevez facilement les communications 
            de l&apos;école, accédez à des ressources académiques ainsi qu&apos;aux devoirs et exercices. 
          </p>
          <Link href="./">
            <button className="bg-orange-500 text-white font-semibold py-2 px-4 rounded">
              Avancons vers la réussite scolaire
            </button>
          </Link>
        </div>
        <div className="md:w-1/2">
          <Image src={student} alt="EducSmart" className="w-full h-auto" width={500} height={500} />
        </div>
      </div>
    </section>    

    <section className="bg-white p-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <Image src={tablette} alt="EducSmart" className="w-full h-auto" width={500} height={500} />
        </div>
        <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-500 mb-4">
            Découvrez notre offre unique à partir de 5000 F/année
          </h1>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Caractéristiques de l&apos;offre :</h2>
            <ul className="list-disc list-inside">
              <li>Nombre d’utilisateurs illimités (enseignants, élèves et parents)</li>
              <li>350 Gigaoctets d’espace de stockage</li>
              <li>Compte disponible sur tous les supports : ordinateur, téléphone et tablette</li>
            </ul>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Avantages inclus :</h2>
            <ul className="list-disc list-inside">
              <li>Accès à tous les contenus pédagogiques de la librairie</li>
              <li>350 SMS disponibles</li>
              <li>Application téléphone et tablette accessible sans connexion internet</li>
            </ul>
          </div>
          <Link href="./">
            <button className="border border-blue-500 text-blue-500 font-semibold py-2 px-4 rounded hover:bg-blue-500 hover:text-white">
              Souscrire à un abonnement
            </button>
          </Link>
        </div>  
      </div>
    </section>


    <section className="bg-blue-500 p-8 flex items-center justify-center">
      <div className="flex justify-between items-center max-w-6xl w-full">
        <div className="text-white max-w-md">
          <h1 className="text-4xl font-bold mb-4">
            Accédez à des cours et exercices conforme à l&apos;enseignement
          </h1>
          <p className="text-xl mb-6">
            Accédez à une vaste bibliothèque de cours et de ressources pédagogiques de qualité. 
            Discutez avec un assistant pédagogique pour toute préocupation.
          </p> 
          <div>
            <button className="bg-white text-blue-500 font-semibold py-2 px-4 mr-4 rounded">
              Consultez nos contenus
            </button> 
          </div>
        </div>
        <div>
          <Image src={Kid} alt="Education" className="w-full h-auto" width={500} height={500} />
        </div>
      </div>
    </section>

  </>
   
  );
}
