
import React from 'react';
import { Button } from '@/components/ui/button';
import { CalendarIcon, Clock, Users, Search } from 'lucide-react';

const ReservationSection: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Quick Table Reservation</h2>
          <p className="text-gray-600">
            Find and book your table in just a few clicks. Secure your spot at the best restaurants.
          </p>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Restaurant or cuisine"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-restaurant-500 focus:border-transparent"
              />
            </div>
            
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <CalendarIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="date"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-restaurant-500 focus:border-transparent"
              />
            </div>
            
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Clock className="h-5 w-5 text-gray-400" />
              </div>
              <select className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-restaurant-500 focus:border-transparent appearance-none">
                <option value="">Select time</option>
                <option value="12:00">12:00 PM</option>
                <option value="12:30">12:30 PM</option>
                <option value="13:00">1:00 PM</option>
                <option value="13:30">1:30 PM</option>
                <option value="19:00">7:00 PM</option>
                <option value="19:30">7:30 PM</option>
                <option value="20:00">8:00 PM</option>
                <option value="20:30">8:30 PM</option>
                <option value="21:00">9:00 PM</option>
              </select>
            </div>
            
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Users className="h-5 w-5 text-gray-400" />
              </div>
              <select className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-restaurant-500 focus:border-transparent appearance-none">
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
                <option value="5">5 People</option>
                <option value="6">6 People</option>
                <option value="7+">7+ People</option>
              </select>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <Button 
              size="lg" 
              className="bg-restaurant-600 hover:bg-restaurant-700 w-full md:w-auto min-w-[200px]"
            >
              Find a Table
            </Button>
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-4">
            <div className="w-12 h-12 rounded-full bg-restaurant-100 flex items-center justify-center mx-auto mb-4">
              <CalendarIcon className="h-6 w-6 text-restaurant-600" />
            </div>
            <h3 className="text-xl font-serif font-bold mb-2">Quick Booking</h3>
            <p className="text-gray-600">Book your table in under a minute with our streamlined reservation process.</p>
          </div>
          
          <div className="p-4">
            <div className="w-12 h-12 rounded-full bg-restaurant-100 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-restaurant-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-bold mb-2">Secure Confirmation</h3>
            <p className="text-gray-600">Receive instant confirmation with all the details you need for your reservation.</p>
          </div>
          
          <div className="p-4">
            <div className="w-12 h-12 rounded-full bg-restaurant-100 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-restaurant-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-bold mb-2">Reminder Service</h3>
            <p className="text-gray-600">We'll send you timely reminders so you never miss your reservation.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationSection;
