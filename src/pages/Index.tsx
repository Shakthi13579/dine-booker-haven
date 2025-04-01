
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturedSection from '@/components/FeaturedSection';
import ReservationSection from '@/components/ReservationSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import AppDownload from '@/components/AppDownload';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/sonner';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Toaster />
      <Navbar />
      <HeroSection />
      <FeaturedSection />
      <ReservationSection />
      <TestimonialsSection />
      <AppDownload />
      <Footer />
    </div>
  );
};

export default Index;
