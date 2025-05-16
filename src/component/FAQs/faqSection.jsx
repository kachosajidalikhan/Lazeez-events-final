import React, { useState } from "react";
import { Plus } from "lucide-react";
import ScrollAnimatedSection from "../scrollsection";
import ScrollAnimatedRight from "../scrollright";

export default function FAQSection() {
    const [openItem, setOpenItem] = useState(null);

    const faqs = [
        {
            id: "item-1",
            question: "How do I customize a package?",
            answer:
                "You can customize your package by selecting your preferred options during the ordering process. We offer various customization options including size, contents, presentation, and more. For special requests, please contact our customer service team.",
        },
        {
            id: "item-2",
            question: "What is the delivery process?",
            answer:
                "Our delivery process includes order confirmation, preparation, quality check, and scheduled delivery. You'll receive tracking information and updates throughout the process. We ensure timely delivery within the specified timeframe.",
        },
        {
            id: "item-3",
            question: "How do vendors join Lazeez Events?",
            answer:
                "Vendors can join Lazeez Events by completing our vendor application form on the website. We review all applications and contact qualified vendors for further steps. We look for quality products, reliability, and excellent customer service.",
        },
        {
            id: "item-4",
            question: "Is there a minimum order limit?",
            answer:
                "Yes, we have a minimum order limit that varies depending on the type of event and package selected. This ensures we can provide the best quality service and products for your event. Please check specific package details for minimum order requirements.",
        },
    ];

    const toggleItem = (id) => {
        setOpenItem(openItem === id ? null : id);
    };

    return (
        <div className="bg-white mx-auto px-4 py-12 text-center flex flex-col justify-center items-center">
            <ScrollAnimatedSection>

            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-[#e91e63] Poppins-bold">FAQs</h1>

            <p className="max-w-4xl Poppins text-center text-base md:text-lg lg:text-xl">
                Have questions about how Lazeez Events works? We've got you covered! Explore our frequently asked questions to
                find answers about placing orders, becoming a vendor, and everything in between.
            </p>
            </ScrollAnimatedSection>

            <div className="space-y-3 text-left md:w-1/2">
                {faqs.map((faq) => (
                    <ScrollAnimatedRight>
                    <div
                    
                    key={faq.id}
                    className="bg-[#ffd0d7] rounded-lg overflow-hidden transition-all duration-200"
                    >
                        <button
                            onClick={() => toggleItem(faq.id)}
                            className="w-full flex justify-between items-center px-4 py-3 focus:outline-none"
                            >
                            <span className="text-base font-medium Poppins">{faq.question}</span>
                            <Plus
                                className={`h-5 w-5 text-[#e91e63] transition-transform duration-200 ${openItem === faq.id ? "rotate-45" : ""
                                    }`}
                                    />
                        </button>

                        {openItem === faq.id && (
                            <div className="px-4 pb-3 text-sm text-gray-700 Poppins">{faq.answer}</div>
                        )}
                    </div>
                        </ScrollAnimatedRight>
                ))}
            </div>
        </div>
    );
}
