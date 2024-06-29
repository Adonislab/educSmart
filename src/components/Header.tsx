
import Link from 'next/link';

const Header = () => {


  return (
    <header className="bg-white text-black shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4">
        {/* Logo ou titre */}
        <div>
          <Link href="/" className="text-2xl font-bold">Votre Logo ou Titre</Link>
        </div>
        
        {/* Menu de navigation */}
        <nav className="space-x-4">
          <Link href="/" className="hover:text-black">Accueil</Link>    
          <Link href="/feature" className="hover:text-black">Mon SAAS</Link>
          <Link href="/about" className="hover:text-black">A propos</Link>
          <Link href="/contact" className="hover:text-black">Contact</Link>
        </nav>

        {/* Bouton de connexion */}
        <div>
          <Link href="/login" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
            Connexion
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;


