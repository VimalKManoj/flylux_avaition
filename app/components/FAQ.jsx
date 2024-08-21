"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Urbanist } from "next/font/google";


const font = Urbanist({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b">
      <div
        className="cursor-pointer flex justify-between items-center py-4"
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-medium">{question}</h3>
        <motion.div
          className="relative"
          animate={{ rotate: isOpen ? -180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-4 h-0.5 bg-black"></div>
          <div
            className={`w-4 h-0.5 bg-black absolute top-0 transition-transform ${
              isOpen ? "rotate-0" : "rotate-90"
            }`}
          ></div>
        </motion.div>
      </div>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="py-4">{answer}</p>
      </motion.div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "What types of aircraft are available for charter?",
      answer:
        "Fly Lux provides a selection of light, midsize, heavy, and ultra-long-range jets, each offering luxury and comfort for various travel needs.",
    },
    {
      question: "What is the cancellation policy?",
      answer:
        "Cancellation terms vary by aircraft and timing. Fees may apply for last-minute changes. Contact our team for detailed information regarding your specific booking.",
    },
    {
      question: "What destinations does Fly Lux serve?",
      answer:
        "Fly Lux offers worldwide connectivity, flying to major international hubs and remote destinations alike. We tailor your journey to reach any destination you desire.",
    },
    {
      question: "How does Fly Lux ensure passenger privacy?",
      answer:
        "We guarantee privacy with secure bookings, discreet operations, and private terminal access, ensuring your travel details remain confidential.",
    },
    {
      question:
        "Are there any membership or loyalty programs available with Fly Lux?",
      answer:
        "Yes, Fly Lux offers an exclusive membership program with benefits like priority booking, special rates, and personalized services. Contact us for more details.",
    },
    {
      question: "What payment methods does Fly Lux accept?",
      answer:
        "Fly Lux accepts all major credit cards, bank transfers, and select digital payment methods. For large transactions, we also accommodate wire transfers.",
    },
  ];

  return (
    <div className="w-screen min-h-screen py-16 flex justify-around p-10  ">
      <h2 className={`text-6xl ${font.className} font-extrabold mb-8 flex-1 mt-8`}>
        Your answers to popular questions
      </h2>
      <div className="min-h-full flex flex-1 justify-around flex-col  select-none">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
