"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Óticas Personallite"
              height={100}
              width={100}
            />
          </Link>

          <button
            className="md:hidden text-gray-700"
            onClick={toggleMenu}
            aria-label="Abrir menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <nav className="hidden md:flex space-x-8">
            <Link
              href="/unidades"
              className="text-gray-700 hover:text-[#0b4d4c] transition-colors"
            >
              Unidades
            </Link>
            <Link
              href="/marcas"
              className="text-gray-700 hover:text-[#0b4d4c] transition-colors"
            >
              Marcas
            </Link>
            <Link
              href="/tecnologia"
              className="text-gray-700 hover:text-[#0b4d4c] transition-colors"
            >
              Tecnologia
            </Link>
            <Link
              href="/contato"
              className="text-gray-700 hover:text-[#0b4d4c] transition-colors"
            >
              Contato
            </Link>
          </nav>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-md border-t z-40">
          <nav className="flex flex-col items-center gap-4 py-4">
            <Link href="/unidades" onClick={toggleMenu}>
              Unidades
            </Link>
            <Link href="/marcas" onClick={toggleMenu}>
              Marcas
            </Link>
            <Link href="/tecnologia" onClick={toggleMenu}>
              Tecnologia
            </Link>
            <Link href="/contato" onClick={toggleMenu}>
              Contato
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
