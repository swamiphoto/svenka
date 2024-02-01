import React from "react";
import SectionHeader from "../section-header/SectionHeader";

const FAQ = () => {
  const faqs = [
    {
      question: "How do you differentiate from other web agencies?",
      answer: "We are an intentionally small team of seasoned engineers and designers, focusing on delivering exceptional user experiences. Unlike larger firms, we prioritize quality over quantity, ensuring each project receives our full attention and expertise.",
    },
    {
      question: "What type of projects do you specialize in?",
      answer: "Web and mobile apps, from basic landing pages to advanced applications with intricate business logic. Our portfolio includes collaborations with Fortune 500 companies, governments, startups, banks, hospitals, and educational institutions.",
    },
    {
      question: "Do you offer fixed pricing or hourly rates?",
      answer: "We lean towards fixed pricing, as it aligns with our commitment to quality without the constraints of time tracking. After a thorough analysis of your requirements, we provide a clear, fixed quote. However, we're open to hourly arrangements if that better suits your needs.",
    },
    {
      question: "Who does the work?",
      answer: "The four of us will do most of the work. We occasionally delegate specific work to a select group of trusted engineers to ensure timely delivery. We maintain full control and oversight, ensuring top-notch quality without resorting to outsourcing.",
    },
    {
      question: "Do you offer a satisfaction guarantee?",
      answer:
        "Absolutely. We'd hate to take your money if you don't absolutely love what we build for you. We'll show you Figma mockups and also build a preliminary version of the app for a small deposit. If you like the direction we're going in, we proceed. Otherwise, we'll refund you the deposit and give you the option to terminate the contract, no strings attached.",
    },
    {
      question: "Can you assist with post-launch support?",
      answer: "Post-launch, we offer ongoing support and maintenance to ensure smooth operation. From bug fixes to feature enhancements, we're here to assist in your project's continual evolution and success.",
    },
    {
      question: "How do you approach project security?",
      answer: "Security is a paramount concern. We implement best practices in data protection and cybersecurity from the outset, ensuring your project is robust against digital threats.",
    },
  ];

  return (
    <div>
      <SectionHeader title="FAQ" description="" />

      <div className="max-w-4xl mx-auto divide-y divide-gray-300 rounded-xl border border-gray-300 bg-white">
        {faqs.map((faq, index) => (
          <details key={index} className="group p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
              <h2 className="text-lg font-medium text-left">{faq.question}</h2>
              <span className="relative h-5 w-5 shrink-0">
                {/* SVG icons for expand/collapse */}
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
            </summary>
            <p className="mt-4 leading-relaxed text-gray-700 text-left">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
