
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold text-restaurant-800">DineBooker</Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="navlink">Home</Link>
          <Link to="/restaurants" className="navlink">Restaurants</Link>
          
          <div className="flex space-x-3">
            <Button 
              variant="outline" 
              className="border-restaurant-500 text-restaurant-600 hover:bg-restaurant-50"
            >
              Login
            </Button>
            <Button className="bg-restaurant-600 hover:bg-restaurant-700">
              Sign Up
            </Button>
          </div>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-500 hover:text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 border-t animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="navlink">Home</Link>
            <Link to="/restaurants" className="navlink">Restaurants</Link>
            
            <div className="flex space-x-3 pt-2">
              <Button 
                variant="outline" 
                className="border-restaurant-500 text-restaurant-600 hover:bg-restaurant-50 w-full"
              >
                Login
              </Button>
              <Button 
                className="bg-restaurant-600 hover:bg-restaurant-700 w-full"
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
