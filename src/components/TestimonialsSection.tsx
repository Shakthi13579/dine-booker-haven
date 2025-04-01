
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { StarIcon } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  restaurant: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 5,
    text: "The booking process was so easy, and the restaurant staff were expecting us when we arrived. Our table was ready and the service was impeccable!",
    restaurant: "The Grand Spice"
  },
  {
    id: 2,
    name: "Rahul Mehta",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4,
    text: "I was able to book a last-minute table for my anniversary. The advance payment option actually worked in our favor as we got a better table.",
    restaurant: "Fusion Bistro"
  },
  {
    id: 3,
    name: "Ananya Gupta",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    rating: 5,
    text: "The platform recommended dishes that were absolutely spectacular. We would have missed them otherwise. Great experience overall!",
    restaurant: "Coastal Flavors"
  }
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <StarIcon 
          key={i} 
          className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
        />
      ))}
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">What Our Users Say</h2>
          <p className="text-gray-600">
            Discover why thousands of diners trust us for their restaurant reservations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="h-12 w-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.restaurant}</p>
                    <div className="mt-1">
                      <StarRating rating={testimonial.rating} />
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
