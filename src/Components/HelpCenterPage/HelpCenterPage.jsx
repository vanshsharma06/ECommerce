"use client";

import { HelpCircle, FileText, MessageSquare, Phone, Mail } from "lucide-react";

const faqs = [
  {
    question: "How do I track my order?",
    answer:
      "You can track your order by clicking on the 'Order Tracking' link at the top of the page and entering your order number and email address.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for most items. Products must be in their original condition with tags attached.",
  },
];

export default function HelpCenter() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-[1200px]">
      <div className="flex items-center gap-3 mb-8">
        <HelpCircle className="h-8 w-8 text-red-500" />
        <h1 className="text-3xl font-bold">Help Center</h1>
      </div>

      <p className="text-lg text-gray-500 mb-8">
        Welcome to our Help Center. Find answers to common questions.
      </p>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-medium">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <div className="p-6 border rounded-lg shadow-md">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <Phone className="h-5 w-5 text-red-500" />
            Phone Support
          </h3>
          <p className="mt-2">Call us at <strong>+1 (800) 123-4567</strong></p>
        </div>

        <div className="p-6 border rounded-lg shadow-md">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <Mail className="h-5 w-5 text-red-500" />
            Email Support
          </h3>
          <p className="mt-2">Email us at <strong>support@classyshop.com</strong></p>
        </div>
      </div>
    </div>
  );
}
