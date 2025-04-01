
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RestaurantCard, { Restaurant } from '@/components/RestaurantCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Toaster } from '@/components/ui/sonner';

// Sample restaurants data
const allRestaurants: Restaurant[] = [
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
  },
  {
    id: 5,
    name: "Tandoori Nights",
    cuisine: "Mughlai",
    rating: 4.4,
    priceRange: "₹₹",
    imageUrl: "https://images.unsplash.com/photo-1600891964599-f61f4a00fb01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    location: "Jubilee Hills, Hyderabad",
    isAvailable: true
  },
  {
    id: 6,
    name: "Green Gardens",
    cuisine: "Vegetarian",
    rating: 4.2,
    priceRange: "₹₹",
    imageUrl: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    location: "Vijay Nagar, Indore",
    isAvailable: true
  },
  {
    id: 7,
    name: "Spice Route",
    cuisine: "Kerala",
    rating: 4.6,
    priceRange: "₹₹₹",
    imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    location: "Fort Kochi, Kochi",
    isAvailable: true
  },
  {
    id: 8,
    name: "Royal Feast",
    cuisine: "Rajasthani",
    rating: 4.3,
    priceRange: "₹₹₹",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    location: "C-Scheme, Jaipur",
    isAvailable: false
  }
];

const RestaurantsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>(allRestaurants);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchTerm.trim()) {
      setFilteredRestaurants(allRestaurants);
      return;
    }
    
    const filtered = allRestaurants.filter(restaurant => 
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase()) ||
      restaurant.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setFilteredRestaurants(filtered);
  };

  const filterByAvailability = (available: boolean | null) => {
    if (available === null) {
      setFilteredRestaurants(allRestaurants);
    } else {
      const filtered = allRestaurants.filter(restaurant => restaurant.isAvailable === available);
      setFilteredRestaurants(filtered);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Toaster />
      <Navbar />
      
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Restaurants</h1>
          <p className="text-gray-600 mb-8">Discover and book tables at the best restaurants</p>
          
          <form onSubmit={handleSearch} className="flex gap-2 mb-8">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                type="text"
                placeholder="Search by name, cuisine, or location"
                className="w-full pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button type="submit" className="bg-restaurant-600 hover:bg-restaurant-700">
              Search
            </Button>
          </form>
          
          <Tabs defaultValue="all" className="mb-8">
            <TabsList>
              <TabsTrigger value="all" onClick={() => filterByAvailability(null)}>All</TabsTrigger>
              <TabsTrigger value="available" onClick={() => filterByAvailability(true)}>Available Now</TabsTrigger>
              <TabsTrigger value="booked" onClick={() => filterByAvailability(false)}>Fully Booked</TabsTrigger>
            </TabsList>
          </Tabs>
          
          <Separator className="mb-8" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredRestaurants.length > 0 ? (
              filteredRestaurants.map(restaurant => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <h3 className="text-xl font-medium text-gray-700 mb-2">No restaurants found</h3>
                <p className="text-gray-500">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default RestaurantsPage;
