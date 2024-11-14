import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import SecuritySection from '../components/SecuritySection';
import ProductSection from '../components/ProductSection';
import ResourcesSection from '../components/ResourcesSection';
import CustomersSection from '../components/CustomersSection';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import ContactForm from '../components/ContactForm';

export default function PublicHome() {
  return (
    <div className="max-w-7xl mx-auto relative pt-20">
      <main className="px-6">
        <Hero />
        <Stats />
        <SecuritySection />
        <ProductSection />
        <ResourcesSection />
        <CustomersSection />
        <Features />
        <Testimonials />
        <CTA />
        <ContactForm />
      </main>
    </div>
  );
}