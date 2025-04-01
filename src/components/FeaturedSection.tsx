
import React from 'react';
import RestaurantCard, { Restaurant } from './RestaurantCard';
import FeaturedDish, { Dish } from './FeaturedDish';

// Sample data
const featuredRestaurants: Restaurant[] = [
  {
    id: 1,
    name: "The Grand Spice",
    cuisine: "North Indian",
    rating: 4.8,
    priceRange: "₹₹₹",
    imageUrl: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    location: "Connaught Place, New Delhi",
    isAvailable: true
  },
  {
    id: 2,
    name: "Coastal Flavors",
    cuisine: "South Indian",
    rating: 4.6,
    priceRange: "₹₹",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    location: "Malviya Nagar, Bengaluru",
    isAvailable: true
  },
  {
    id: 3,
    name: "Fusion Bistro",
    cuisine: "Continental",
    rating: 4.5,
    priceRange: "₹₹₹₹",
    imageUrl: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    location: "Bandra, Mumbai",
    isAvailable: false
  },
  {
    id: 4,
    name: "Oriental Express",
    cuisine: "Chinese & Thai",
    rating: 4.7,
    priceRange: "₹₹₹",
    imageUrl: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    location: "Salt Lake, Kolkata",
    isAvailable: true
  }
];

const popularDishes: Dish[] = [
  {
    id: 1,
    name: "Butter Chicken",
    description: "Tender chicken cooked in a rich tomato and butter gravy",
    price: 350,
    imageUrl: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    isSpecial: true,
    restaurantId: 1,
    restaurantName: "The Grand Spice"
  },
  {
    id: 2,
    name: "Masala Dosa",
    description: "Crispy rice crepe filled with spiced potatoes, served with chutney and sambar",
    price: 180,
    imageUrl: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    isSpecial: false,
    restaurantId: 2,
    restaurantName: "Coastal Flavors"
  },
  {
    id: 3,
    name: "Truffle Pasta",
    description: "Handmade pasta tossed in a creamy truffle sauce with wild mushrooms",
    price: 450,
    imageUrl: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    isSpecial: true,
    restaurantId: 3,
    restaurantName: "Fusion Bistro"
  },
  {
    id: 4,
    name: "Dim Sum Platter",
    description: "Assorted steamed dumplings filled with vegetables, chicken, and prawns",
    price: 380,
    imageUrl: "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1129&q=80",
    isSpecial: false,
    restaurantId: 4,
    restaurantName: "Oriental Express"
  }
];

const FeaturedSection: React.FC = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Featured Restaurants</h2>
          <p className="text-gray-600 max-w-3xl">Discover our handpicked selection of the finest dining establishments, each offering a unique culinary experience.</p>
          
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredRestaurants.map(restaurant => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Popular Dishes</h2>
          <p className="text-gray-600 max-w-3xl">Explore signature dishes from top restaurants that our customers love.</p>
          
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDishes.map(dish => (
              <FeaturedDish key={dish.id} dish={dish} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
