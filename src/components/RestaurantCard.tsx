
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';

export interface Restaurant {
  id: number;
  name: string;
  cuisine: string;
  rating: number;
  priceRange: string;
  imageUrl: string;
  location: string;
  isAvailable: boolean;
}

interface RestaurantCardProps {
  restaurant: Restaurant;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  return (
    <Card className="overflow-hidden restaurant-card">
      <div className="relative">
        <AspectRatio ratio={16/9}>
          <img 
            src={restaurant.imageUrl} 
            alt={restaurant.name}
            className="object-cover w-full h-full"
          />
        </AspectRatio>
        <div className="absolute top-2 right-2">
          <Badge className={restaurant.isAvailable ? "bg-green-500" : "bg-red-500"}>
            {restaurant.isAvailable ? "Available Now" : "Fully Booked"}
          </Badge>
        </div>
      </div>
      
      <CardContent className="pt-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold font-serif">{restaurant.name}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
            <span className="text-sm font-medium">{restaurant.rating}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-600">{restaurant.cuisine}</span>
          <span className="text-gray-600">{restaurant.priceRange}</span>
        </div>
        
        <p className="text-sm text-gray-500 mt-2">{restaurant.location}</p>
      </CardContent>
      
      <CardFooter className="pt-2">
        <a 
          href={`/restaurants/${restaurant.id}`}
          className="text-restaurant-600 text-sm font-medium hover:text-restaurant-800 transition-colors"
        >
          View Details →
        </a>
      </CardFooter>
    </Card>
  );
};

export default RestaurantCard;
