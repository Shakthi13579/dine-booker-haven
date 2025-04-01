
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';

export interface Dish {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  isSpecial: boolean;
  restaurantId: number;
  restaurantName: string;
}

interface FeaturedDishProps {
  dish: Dish;
}

const FeaturedDish: React.FC<FeaturedDishProps> = ({ dish }) => {
  return (
    <Card className="overflow-hidden restaurant-card h-full">
      <div className="relative">
        <AspectRatio ratio={1/1}>
          <img 
            src={dish.imageUrl} 
            alt={dish.name}
            className="object-cover w-full h-full"
          />
        </AspectRatio>
        {dish.isSpecial && (
          <div className="absolute top-2 right-2">
            <Badge className="bg-restaurant-600">Chef's Special</Badge>
          </div>
        )}
      </div>
      
      <CardContent className="pt-4">
        <h3 className="text-lg font-bold font-serif mb-1">{dish.name}</h3>
        <p className="text-gray-500 text-sm mb-2 line-clamp-2">{dish.description}</p>
        
        <div className="flex justify-between items-center mt-2">
          <span className="text-restaurant-800 font-semibold">₹{dish.price}</span>
          <span className="text-xs text-gray-500">{dish.restaurantName}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeaturedDish;
