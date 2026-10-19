import React from "react";
import Hero from "@/components/site/Hero";
import KnowsSection from "@/components/site/KnowsSection";
import ProductTour from "@/components/site/ProductTour";
import WhySection from "@/components/site/WhySection";
import FeaturedTours from "@/components/site/FeaturedTours";
import CreatorTeaser from "@/components/site/CreatorTeaser";
import PricingSection from "@/components/site/PricingSection";
import Testimonials from "@/components/site/Testimonials";
import FaqAccordion from "@/components/site/FaqAccordion";
import FinalCta from "@/components/site/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <KnowsSection />
      <ProductTour />
      <WhySection />
      <FeaturedTours />
      <CreatorTeaser />
      <PricingSection />
      <Testimonials />
      <FaqAccordion />
      <FinalCta />
    </>
  );
}