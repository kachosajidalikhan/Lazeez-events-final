import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ScrollAnimatedSection from "../scrollsection";

export default function PopupModal({ onClose, item }) {
    const [showAnimation, setShowAnimation] = useState(false);
    const nav = useNavigate();

    useEffect(() => {
        if (item) {
            // Trigger animation when modal mounts
            setTimeout(() => setShowAnimation(true), 50); // Delay needed for animation
        }
    }, [item]);

    if (!item) return null;

    return (
        <>
            <div className={`fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-5000 transition-all duration-500 ease-in-out
                ${showAnimation ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
            `}>
                <div className="bg-white rounded-lg w-full max-w-4xl overflow-hidden flex flex-col md:flex-row relative transition-all duration-500 ease-in-out">
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 p-1 rounded-full bg-white text-rose-600 hover:bg-gray-100 transition-colors z-10"
                        aria-label="Close"
                    >
                        <X className="h-6 w-6" />
                    </button>

                    {/* Image */}
                    <div className="w-full md:w-2/5 h-40 sm:h-48 md:h-auto">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-3/5 p-4 sm:p-6 md:p-8">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-rose-600 mb-4">{item.title}</h2>

                        <p className="text-gray-800 text-sm sm:text-base mb-4">{item.description}</p>

                        <div className="space-y-1 text-sm sm:text-base mb-4">
                            <p><span className="text-rose-600 font-medium">Vendor Name:</span> {item.vendor}</p>
                            <p><span className="text-rose-600 font-medium">Food Item:</span> {item.ingredients}</p>
                        </div>

                        <div className="flex mb-6">
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-current"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                        fill={i < item.rating ? "currentColor" : "#e5e7eb"}
                                    />
                                </svg>
                            ))}
                        </div>

                        <button
                            onClick={() => nav('/App-Download-Section')}
                            className="w-full md:w-auto px-6 py-3 bg-rose-600 text-white font-bold rounded-md hover:bg-rose-700 transition-colors"
                        >
                            Order Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
