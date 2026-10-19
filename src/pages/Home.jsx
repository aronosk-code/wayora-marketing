import React from "react";
import Hero from "@/components/site/Hero";
import ProductTour from "@/components/site/ProductTour";
import WhySection from "@/components/site/WhySection";
import FeaturedTours from "@/components/site/FeaturedTours";
import CreatorTeaser from "@/components/site/CreatorTeaser";
import PricingSection from "@/components/site/PricingSection";
import FaqAccordion from "@/components/site/FaqAccordion";
import FinalCta from "@/components/site/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductTour />
      <WhySection />
      <FeaturedTours />
      <CreatorTeaser />
      <PricingSection />
      <FaqAccordion />
      <FinalCta />
    </>
  );
}