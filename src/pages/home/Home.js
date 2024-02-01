import React, { useEffect } from "react";
import "./Home.css"; // Assuming you have a Home.css for your styling
import Hero from "../../components/sections/hero/Hero";
import Logos from "../../components/sections/logos/Logos";
import CTA from "../../components/elements/cta/CTA";
import FAQ from "../../components/sections/faq/FAQ";
import WhyMe from "../../components/sections/why-me/WhyMe";
import SingleTestimonial from "../../components/elements/SingleTestimonial";
import Portfolio from "../../components/sections/portfolio/Portfolio";
import TechStack from "../../components/sections/tech-stack/TechStack";
import Contact from "../../components/sections/contact/Contact";
import Section from "../../components/elements/section/Section";
import { useLocation } from "react-router-dom";
import CustomButton from "../../components/elements/custom-button/CustomButton";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // Function to scroll to a given element ID
    const scrollToElement = (id) => {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    // If there's a hash in the URL (e.g., '#about'), scroll to the element with that ID
    if (location.hash) {
      scrollToElement(location.hash);
    }
  }, [location]);

  return (
    <main className="max-w-7xl mx-auto px-6 md:px-0">
      <Hero />
      <div className="h-screen"></div>
      <Logos />
      <Section id="whyus">
        <WhyMe />
      </Section>
      <TechStack />
      <Section id="testimonials">
        <SingleTestimonial
          imageSrc="images/testimonials/rishi.jpeg"
          altText="Rishi's testimonial"
          testimony="Swami is exceptional at what he does. He’s ultra detail-oriented, making sure everything is perfect. Beyond coding, he also drives product development and meticulously fine-tunes the user experience. Plus, he’s an awesome photographer, which explains where his design sense comes from."
          name="Rishi Sargar"
          role="CTO at QTR.AI"
          reverse={true}
        />

        <SingleTestimonial
          imageSrc="images/testimonials/carlos.jpeg"
          altText="Carlos's testimonial"
          testimony="Swami is one of the most inspiring people I've worked with. From building elegant software, to creating amazing photography, hosting podcasts, and everything else in between, Swami is truly a force of nature. Simply being a part of his team inspires you to also want to reach your full potential."
          name="Carlos Rivera"
          role="Product at CreditSights"
          reverse={false}
        />

        <CustomButton label="Let's discuss your project" sectionId="#contact" />
      </Section>

      <Section id="examples" topBorder={true}>
        <Portfolio />
      </Section>

      <Section id="faq" topBorder={true}>
        <FAQ />
      </Section>

      <Section id="contact" topBorder={true}>
        <Contact />
      </Section>
    </main>
  );
};

export default Home;
