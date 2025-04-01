
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Star, MapPin, Clock, Phone, Calendar, Users, CreditCard, AlertCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';

// Restaurant data
const restaurantData = {
  id: 1,
  name: "The Grand Spice",
  cuisine: "North Indian",
  rating: 4.8,
  priceRange: "₹₹₹",
  imageUrl: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
  galleryImages: [
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1600891964599-f61f4a00fb01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  ],
  location: "Connaught Place, New Delhi",
  fullAddress: "42, Connaught Place, New Delhi - 110001",
  phone: "+91 11 2345 6789",
  openingHours: "12:00 PM - 11:00 PM",
  description: "The Grand Spice offers an exquisite dining experience with authentic North Indian cuisine. Our master chefs prepare dishes using traditional recipes and premium ingredients to deliver exceptional flavors. The luxurious ambiance and impeccable service make it perfect for both casual dining and special occasions.",
  facilities: ["Valet Parking", "Outdoor Seating", "Full Bar", "Private Dining", "Wheelchair Accessible", "WiFi"],
  isAvailable: true,
  menu: [
    {
      category: "Starters",
      items: [
        { id: 1, name: "Paneer Tikka", description: "Cottage cheese marinated in spices and grilled in tandoor", price: 280, imageUrl: "https://images.unsplash.com/photo-1567188040759-fb8a6987bbc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=917&q=80", isVeg: true, isRecommended: true },
        { id: 2, name: "Chicken Seekh Kebab", description: "Minced chicken with herbs and spices cooked on skewers", price: 320, imageUrl: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80", isVeg: false, isRecommended: false },
        { id: 3, name: "Dahi Ke Kebab", description: "Shallow fried hung curd patties with mild spices", price: 250, imageUrl: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", isVeg: true, isRecommended: false }
      ]
    },
    {
      category: "Main Course",
      items: [
        { id: 4, name: "Butter Chicken", description: "Tender chicken cooked in a rich tomato and butter gravy", price: 350, imageUrl: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", isVeg: false, isRecommended: true },
        { id: 5, name: "Paneer Butter Masala", description: "Cottage cheese cubes in a creamy tomato gravy", price: 320, imageUrl: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", isVeg: true, isRecommended: false },
        { id: 6, name: "Dal Makhani", description: "Black lentils slow cooked with butter and cream", price: 290, imageUrl: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", isVeg: true, isRecommended: true }
      ]
    },
    {
      category: "Breads",
      items: [
        { id: 7, name: "Butter Naan", description: "Leavened bread baked in tandoor and brushed with butter", price: 60, imageUrl: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1071&q=80", isVeg: true, isRecommended: false },
        { id: 8, name: "Garlic Naan", description: "Naan topped with garlic and coriander", price: 70, imageUrl: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80", isVeg: true, isRecommended: true },
        { id: 9, name: "Laccha Paratha", description: "Flaky, multi-layered whole wheat bread", price: 65, imageUrl: "https://images.unsplash.com/photo-1619055532487-01015668dbff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", isVeg: true, isRecommended: false }
      ]
    },
    {
      category: "Desserts",
      items: [
        { id: 10, name: "Gulab Jamun", description: "Deep-fried milk solid balls soaked in sugar syrup", price: 150, imageUrl: "https://images.unsplash.com/photo-1546865899-b947e94d7ac4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", isVeg: true, isRecommended: false },
        { id: 11, name: "Rasmalai", description: "Soft cottage cheese patties in sweetened, thickened milk", price: 180, imageUrl: "https://images.unsplash.com/photo-1589269511878-b2e2830f6832?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", isVeg: true, isRecommended: true },
        { id: 12, name: "Kulfi", description: "Traditional Indian ice cream with pistachios and cardamom", price: 160, imageUrl: "https://images.unsplash.com/photo-1628094095352-556e6d03c018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", isVeg: true, isRecommended: false }
      ]
    }
  ],
  availableTables: [
    { id: 1, size: 2, time: "12:30 PM", area: "Indoor" },
    { id: 2, size: 2, time: "1:00 PM", area: "Outdoor" },
    { id: 3, size: 4, time: "1:30 PM", area: "Indoor" },
    { id: 4, size: 6, time: "7:00 PM", area: "Indoor" },
    { id: 5, size: 2, time: "7:30 PM", area: "Outdoor" },
    { id: 6, size: 4, time: "8:00 PM", area: "Indoor" }
  ]
};

const RestaurantDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedTable, setSelectedTable] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [bookingDialogOpen, setBookingDialogOpen] = useState(false);
  const [paymentOption, setPaymentOption] = useState<string>("full");
  const [selectedDishes, setSelectedDishes] = useState<number[]>([]);
  
  // Get today's date in the required format for the date input
  const today = new Date();
  const formattedDate = today.toISOString().split('T')[0];

  const handleReservation = () => {
    const advanceAmount = paymentOption === "full" ? 
      "₹1500 (Full Payment)" : 
      "₹500 (30% Advance)";
    
    toast.success("Reservation Confirmed!", {
      description: `Table for ${
        restaurantData.availableTables.find(table => table.id === selectedTable)?.size
      } at ${
        restaurantData.availableTables.find(table => table.id === selectedTable)?.time
      } on ${selectedDate}. ${advanceAmount} has been processed.`,
      duration: 5000,
    });
    
    setBookingDialogOpen(false);
  };

  const toggleDishSelection = (dishId: number) => {
    if (selectedDishes.includes(dishId)) {
      setSelectedDishes(selectedDishes.filter(id => id !== dishId));
    } else {
      setSelectedDishes([...selectedDishes, dishId]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Toaster />
      <Navbar />
      
      <div className="py-6 bg-gray-50 flex-grow">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <a href="/restaurants" className="inline-flex items-center text-restaurant-600 hover:text-restaurant-800">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Restaurants
            </a>
          </div>
          
          {/* Hero Section */}
          <div className="relative rounded-xl overflow-hidden h-96 mb-8">
            <img 
              src={restaurantData.imageUrl} 
              alt={restaurantData.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-6 w-full">
                <div className="flex justify-between items-end">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">
                      {restaurantData.name}
                    </h1>
                    <div className="flex items-center mb-2">
                      <Badge className="bg-white/20 text-white mr-2">{restaurantData.cuisine}</Badge>
                      <Badge className="bg-white/20 text-white mr-2">{restaurantData.priceRange}</Badge>
                      <div className="flex items-center text-white">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span>{restaurantData.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-200">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{restaurantData.fullAddress}</span>
                    </div>
                  </div>
                  
                  <Dialog open={bookingDialogOpen} onOpenChange={setBookingDialogOpen}>
                    <DialogTrigger asChild>
                      <Button className="bg-restaurant-600 hover:bg-restaurant-700">
                        Reserve a Table
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px]">
                      <DialogHeader>
                        <DialogTitle>Reserve Your Table</DialogTitle>
                        <DialogDescription>
                          Choose your preferred date, time, and table at {restaurantData.name}.
                        </DialogDescription>
                      </DialogHeader>
                      
                      {selectedTable ? (
                        <div className="grid gap-4 py-4">
                          <div className="space-y-2">
                            <h3 className="font-medium">Selected Table</h3>
                            <Card>
                              <CardContent className="p-4">
                                <div className="flex justify-between items-center">
                                  <div>
                                    <p className="font-medium">Table for {
                                      restaurantData.availableTables.find(table => table.id === selectedTable)?.size
                                    }</p>
                                    <p className="text-sm text-gray-500">
                                      {restaurantData.availableTables.find(table => table.id === selectedTable)?.time} • {
                                        restaurantData.availableTables.find(table => table.id === selectedTable)?.area
                                      }
                                    </p>
                                  </div>
                                  <Button 
                                    variant="outline" 
                                    size="sm"
                                    onClick={() => setSelectedTable(null)}
                                  >
                                    Change
                                  </Button>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="booking-date">Select Date</Label>
                            <Input 
                              id="booking-date" 
                              type="date" 
                              min={formattedDate}
                              value={selectedDate}
                              onChange={(e) => setSelectedDate(e.target.value)}
                              required
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <h3 className="font-medium">Pre-order Food (Optional)</h3>
                            <p className="text-sm text-gray-500 mb-2">Select dishes you'd like to pre-order</p>
                            
                            <div className="max-h-40 overflow-y-auto space-y-2 pr-2">
                              {restaurantData.menu.flatMap(category => 
                                category.items.filter(item => item.isRecommended).map(dish => (
                                  <div 
                                    key={dish.id} 
                                    className={`p-2 border rounded-md cursor-pointer ${
                                      selectedDishes.includes(dish.id) ? 'border-restaurant-500 bg-restaurant-50' : 'border-gray-200'
                                    }`}
                                    onClick={() => toggleDishSelection(dish.id)}
                                  >
                                    <div className="flex justify-between">
                                      <div>
                                        <p className="font-medium">{dish.name}</p>
                                        <p className="text-sm text-gray-500">₹{dish.price}</p>
                                      </div>
                                      {dish.isVeg ? (
                                        <Badge className="bg-green-100 text-green-800 h-fit">Veg</Badge>
                                      ) : (
                                        <Badge className="bg-red-100 text-red-800 h-fit">Non-veg</Badge>
                                      )}
                                    </div>
                                  </div>
                                ))
                              )}
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <h3 className="font-medium">Payment Options</h3>
                            <p className="text-sm text-gray-500 flex items-center mb-2">
                              <AlertCircle className="h-4 w-4 mr-1 text-amber-500" />
                              Advance payment is non-refundable
                            </p>
                            
                            <RadioGroup value={paymentOption} onValueChange={setPaymentOption}>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="advance" id="advance" />
                                <Label htmlFor="advance">30% Advance (₹500)</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="full" id="full" />
                                <Label htmlFor="full">Full Payment (₹1500)</Label>
                              </div>
                            </RadioGroup>
                          </div>
                        </div>
                      ) : (
                        <div className="py-4">
                          <h3 className="font-medium mb-3">Available Tables for Today</h3>
                          <div className="grid grid-cols-2 gap-3">
                            {restaurantData.availableTables.map(table => (
                              <Button
                                key={table.id}
                                variant="outline"
                                className={`border-gray-200 justify-start text-left h-auto py-3`}
                                onClick={() => setSelectedTable(table.id)}
                              >
                                <div>
                                  <p className="font-medium">Table for {table.size}</p>
                                  <p className="text-sm text-gray-500">{table.time} • {table.area}</p>
                                </div>
                              </Button>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <DialogFooter>
                        <Button 
                          variant="outline" 
                          onClick={() => setBookingDialogOpen(false)}
                        >
                          Cancel
                        </Button>
                        <Button 
                          disabled={!selectedTable || !selectedDate}
                          onClick={handleReservation}
                          className="bg-restaurant-600 hover:bg-restaurant-700"
                        >
                          Confirm & Pay
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
          
          {/* Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card>
              <CardContent className="flex items-center p-4">
                <Clock className="h-5 w-5 text-gray-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Opening Hours</p>
                  <p className="font-medium">{restaurantData.openingHours}</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="flex items-center p-4">
                <Phone className="h-5 w-5 text-gray-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium">{restaurantData.phone}</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="flex items-center p-4">
                <MapPin className="h-5 w-5 text-gray-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="font-medium">{restaurantData.fullAddress}</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Tabs defaultValue="menu">
                <TabsList className="mb-6">
                  <TabsTrigger value="menu">Menu</TabsTrigger>
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="photos">Photos</TabsTrigger>
                </TabsList>
                
                <TabsContent value="menu" className="space-y-8">
                  {restaurantData.menu.map((category, index) => (
                    <div key={index}>
                      <h2 className="text-2xl font-serif font-bold mb-4">{category.category}</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {category.items.map((item) => (
                          <Card key={item.id} className="overflow-hidden">
                            <div className="flex">
                              <div className="w-24 h-24 shrink-0">
                                <img 
                                  src={item.imageUrl} 
                                  alt={item.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <CardContent className="p-4 flex-1">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <h3 className="font-medium">
                                      {item.name}
                                      {item.isVeg ? (
                                        <span className="inline-block w-4 h-4 ml-1">
                                          <span className="block w-3 h-3 border border-green-500 bg-white relative">
                                            <span className="absolute inset-0.5 bg-green-500 block"></span>
                                          </span>
                                        </span>
                                      ) : (
                                        <span className="inline-block w-4 h-4 ml-1">
                                          <span className="block w-3 h-3 border border-red-500 bg-white relative">
                                            <span className="absolute inset-0.5 bg-red-500 block"></span>
                                          </span>
                                        </span>
                                      )}
                                    </h3>
                                    <p className="text-sm text-gray-500 line-clamp-2">{item.description}</p>
                                  </div>
                                  <p className="font-medium">₹{item.price}</p>
                                </div>
                                {item.isRecommended && (
                                  <Badge className="mt-2 bg-restaurant-100 text-restaurant-800 hover:bg-restaurant-200">
                                    Chef's Choice
                                  </Badge>
                                )}
                              </CardContent>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  ))}
                </TabsContent>
                
                <TabsContent value="about">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-serif font-bold mb-3">About the Restaurant</h2>
                      <p className="text-gray-700">{restaurantData.description}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-serif font-bold mb-3">Facilities</h3>
                      <div className="flex flex-wrap gap-2">
                        {restaurantData.facilities.map((facility, index) => (
                          <Badge 
                            key={index} 
                            variant="outline"
                            className="bg-white"
                          >
                            {facility}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="photos">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <img 
                        src={restaurantData.imageUrl} 
                        alt="Main restaurant view"
                        className="w-full h-60 object-cover rounded-md"
                      />
                    </div>
                    {restaurantData.galleryImages.map((image, index) => (
                      <img 
                        key={index}
                        src={image} 
                        alt={`Restaurant gallery ${index + 1}`}
                        className="w-full h-48 object-cover rounded-md"
                      />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <div>
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h2 className="text-xl font-serif font-bold mb-4">Make a Reservation</h2>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="date">Date</Label>
                        <div className="relative mt-1">
                          <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
                          <Input
                            id="date"
                            type="date"
                            className="pl-9"
                            min={formattedDate}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="time">Time</Label>
                        <div className="relative mt-1">
                          <Clock className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
                          <select
                            id="time"
                            className="w-full h-10 pl-9 pr-4 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-input"
                          >
                            <option value="">Select time</option>
                            {['12:30 PM', '1:00 PM', '1:30 PM', '7:00 PM', '7:30 PM', '8:00 PM'].map(time => (
                              <option key={time} value={time}>{time}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="guests">Number of Guests</Label>
                      <div className="relative mt-1">
                        <Users className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
                        <select
                          id="guests"
                          className="w-full h-10 pl-9 pr-4 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-input"
                        >
                          {[1, 2, 3, 4, 5, 6, '7+'].map(num => (
                            <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-restaurant-600 hover:bg-restaurant-700">
                      Check Availability
                    </Button>
                  </div>
                  
                  <Separator className="my-6" />
                  
                  <div className="space-y-3">
                    <h3 className="font-medium text-gray-900">Reservation Policy</h3>
                    <div className="flex items-start text-sm text-gray-500">
                      <CreditCard className="h-4 w-4 mt-0.5 mr-2 text-gray-400" />
                      <p>Non-refundable 20-40% deposit required</p>
                    </div>
                    <div className="flex items-start text-sm text-gray-500">
                      <AlertCircle className="h-4 w-4 mt-0.5 mr-2 text-gray-400" />
                      <p>Cancellations with less than 24 hours notice will not be refunded</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default RestaurantDetail;
