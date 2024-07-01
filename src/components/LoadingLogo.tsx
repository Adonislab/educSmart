'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Logo from '../../public/logo-removebg.png'; 

const LoadingLogo = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <Image src={Logo} alt="Logo" width={200} height={200} />
      </div>
    );
  }

  return <>{children}</>;
};

export default LoadingLogo;
