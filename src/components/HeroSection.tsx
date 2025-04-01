
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="relative h-[80vh] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        }}
      >
        <div className="absolute inset-0 hero-gradient" />
      </div>
      
      <div className="relative h-full container mx-auto flex flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl animate-fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Reserve Your Perfect Dining Experience
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Discover and book the finest restaurants for your special occasions
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-restaurant-600 hover:bg-restaurant-700 text-white"
              onClick={() => navigate('/restaurants')}
            >
              Find Restaurants
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20"
              onClick={() => navigate('/special-offers')}
            >
              View Special Offers
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
