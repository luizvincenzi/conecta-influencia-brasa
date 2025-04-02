
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import LoginForm from "./LoginForm";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200 py-4">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <div className="flex items-center">
          <h1 className="text-xl font-semibold">conecta-influência</h1>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#como-funciona" className="font-medium hover:text-[#0071e3] transition-colors">
            Como Funciona
          </a>
          <a href="#planos" className="font-medium hover:text-[#0071e3] transition-colors">
            Planos
          </a>
          <a href="#depoimentos" className="font-medium hover:text-[#0071e3] transition-colors">
            Depoimentos
          </a>
          <a href="#faq" className="font-medium hover:text-[#0071e3] transition-colors">
            FAQ
          </a>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button className="apple-button">Login</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <LoginForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 py-2 px-4 bg-white">
          <div className="flex flex-col space-y-3">
            <a 
              href="#como-funciona" 
              className="font-medium py-2 hover:text-[#0071e3] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Como Funciona
            </a>
            <a 
              href="#planos" 
              className="font-medium py-2 hover:text-[#0071e3] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Planos
            </a>
            <a 
              href="#depoimentos" 
              className="font-medium py-2 hover:text-[#0071e3] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Depoimentos
            </a>
            <a 
              href="#faq" 
              className="font-medium py-2 hover:text-[#0071e3] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button className="apple-button w-full mt-2">Login</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <LoginForm />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
