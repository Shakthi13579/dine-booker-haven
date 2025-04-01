
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';

const SpecialOffersPage: React.FC = () => {
  const offers = [
    {
      id: 1,
      title: 'Early Bird Special',
      description: 'Get 20% off when you book between 5PM and 7PM any weekday',
      validUntil: 'December 31, 2023',
      code: 'EARLYBIRD20'
    },
    {
      id: 2,
      title: 'Weekend Brunch Deal',
      description: 'Free mimosa with any brunch entree on Saturday and Sunday',
      validUntil: 'January 15, 2024',
      code: 'BRUNCHFUN'
    },
    {
      id: 3,
      title: 'Family Dinner Package',
      description: 'Order for 4+ people and get a free appetizer and dessert',
      validUntil: 'November 30, 2023',
      code: 'FAMILY4'
    },
    {
      id: 4,
      title: 'Anniversary Special',
      description: 'Complimentary champagne toast for couples celebrating anniversaries',
      validUntil: 'Ongoing',
      code: 'CELEBRATE'
    }
  ];

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast.success('Promo code copied to clipboard!');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Toaster />
      <Navbar />
      
      <main className="flex-grow container mx-auto py-8 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Special Offers</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take advantage of these limited-time offers at our partner restaurants
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <Card key={offer.id} className="border-2 border-gray-100 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-bold">{offer.title}</CardTitle>
                  <Badge variant="outline" className="bg-restaurant-50 text-restaurant-700 border-restaurant-200">
                    Limited Time
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{offer.description}</p>
                <p className="text-sm text-gray-500">Valid until: {offer.validUntil}</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-mono bg-gray-100 px-2 py-1 rounded text-sm">{offer.code}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyCode(offer.code)}
                    className="text-restaurant-600 hover:text-restaurant-800"
                  >
                    Copy
                  </Button>
                </div>
                <Button className="bg-restaurant-600 hover:bg-restaurant-700">
                  Use Offer
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SpecialOffersPage;
