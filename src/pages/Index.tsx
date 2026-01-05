import { useEffect } from "react";
import Hero from "@/components/sections/Hero";
import TrustedCompanies from "@/components/sections/TrustedCompanies";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
// import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import WorkProcess from "@/components/sections/WorkProcess";
import Testimonials from "@/components/sections/Testimonials";
import Blogs from "@/components/sections/Blogs";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import json from '@/jsons/home.json';

const Index = () => {
  
  useEffect(() => {
    if(typeof window !== "undefined"){

      if(window.location.href.includes('contact')){
        window.location.replace(window.location.origin + "/#contact")
      }
    }
  }, [])
  
 
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Hero {...json.hero} />
      <TrustedCompanies {...json.trusted_companies} />
      <About {...json.about} />
      {/* <Skills {...json.skills} /> */}
      {/* <Projects /> */}
      <Services {...json.services} />
      <WhyUs {...json.whyus} />
      <WorkProcess {...json.work_process} />
      <Testimonials {...json.testimonials} />
      <Blogs {...json.blogs} />
      <FAQ {...json.faq} />
      <Contact {...json?.contact} />
      
    </main>
  );
};

export default Index;
