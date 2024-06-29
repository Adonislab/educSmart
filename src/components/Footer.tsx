import Link from "next/link"

function Footer() {
  return (
      <footer>
      {/* Section pour les trois blocs de contenu essentiels */}
      <section className="bg-black p-8 text-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Bloc pour la démonstration */}
          <div>
            <h3 className="text-xl font-bold mb-4">Demander une démonstration</h3>
            <p className="mb-6">
              Découvrez par vous-même comment notre produit peut 
              résoudre vos besoins spécifiques en demandant dès maintenant 
              une démo personnalisée pour une expérience captivante et 
              concrète. 
            </p>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-orange-500 text-white font-semibold py-2 px-4 rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                Envoyer
              </button>
            </form>
          </div>
          {/* Bloc pour les liens de la plateforme */}
          <div>
            <h3 className="text-xl font-bold mb-4">Plateforme</h3>
            <ul>
              <li className="mb-2">
                <Link href="#" className="text-gray-400 hover:text-white">
                  Condition d&apos;utilisation
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-gray-400 hover:text-white">
                  Politique
                </Link>
              </li>
            </ul>
            <div className="mt-6">
              <h3 className="text-xl font-bold mb-4">Abonnez-vous à notre newsletter</h3>
              <form>
                <div className="mb-4">
                  <label htmlFor="newsletter-email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="newsletter-email"
                    name="newsletter-email"
                    className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-orange-500 text-white font-semibold py-2 px-4 rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  S&apos;abonner
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <hr className="border-gray-700" />

      {/* Section pour les réseaux sociaux et le copyright */}
      <section className="bg-black p-8 text-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="mb-2">Suivez-nous :</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">Facebook</Link>
              <Link href="#" className="text-gray-400 hover:text-white">Twitter</Link>
              <Link href="#" className="text-gray-400 hover:text-white">LinkedIn</Link>
              <Link href="#" className="text-gray-400 hover:text-white">Instagram</Link>
            </div>
          </div>
          <p className="text-gray-400 text-center md:text-left">
            © 2024 Schoolap, All Rights Reserved. Powered By EDUCSMART
          </p>
        </div>
      </section>
    </footer>
  )
}

export default Footer