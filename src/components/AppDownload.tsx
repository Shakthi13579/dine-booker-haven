
import React from 'react';
import { Button } from '@/components/ui/button';

const AppDownload: React.FC = () => {
  return (
    <div className="bg-restaurant-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-md mb-8 md:mb-0">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Get the DineBooker App
            </h2>
            <p className="text-gray-600 mb-6">
              Manage your reservations, discover new restaurants, and receive exclusive offers directly on your phone. Download our app today!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" className="border-gray-300 hover:bg-gray-100 text-gray-800 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm-1-5a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zm-3-4a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z" />
                </svg>
                App Store
              </Button>
              <Button variant="outline" className="border-gray-300 hover:bg-gray-100 text-gray-800 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.94 5.5c.944-.945 2.56-.276 2.56 1.06V15a1 1 0 01-2 0V5.5zm5.59-1.06a1 1 0 10-2 0V15a1 1 0 102 0V4.44z" clipRule="evenodd" />
                </svg>
                Google Play
              </Button>
            </div>
          </div>
          
          <div className="relative md:-mr-10">
            <div className="bg-white p-2 rounded-3xl shadow-xl">
              <img 
                src="https://plus.unsplash.com/premium_photo-1683311938684-17947cda769d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
                alt="DineBooker App Screenshot" 
                className="w-60 h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
