import { useState, useEffect } from "react";
import { X } from "lucide-react";
import files from "../../../constants/index";
import { Link } from "react-router-dom";

export default function VendorPopup({ isOpen = true, onClose }) {
    const [isVisible, setIsVisible] = useState(isOpen);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            setTimeout(() => setAnimate(true), 50); // Delay for transition
        } else {
            setAnimate(false);
            setTimeout(() => setIsVisible(false), 300); // Delay to allow fade out
        }
    }, [isOpen]);

    const handleClose = () => {
        setAnimate(false);
        setTimeout(() => {
            setIsVisible(false);
            if (onClose) onClose();
        }, 300); // Match this with transition duration
    };

    if (!isVisible) return null;

    return (
        <div className={`fixed inset-0 z-5000 flex items-center justify-center bg-black/50 transition-opacity duration-300 ${animate ? 'opacity-100' : 'opacity-0'}`}>
            <div className={`relative pb-4 md:pb-0 mx-4 w-full max-w-3xl rounded-xl bg-[#D15280] text-white shadow-lg p-6 md:p-8 py-0 md:py-0 transform transition-transform duration-300 ${animate ? 'scale-100' : 'scale-90'}`}>
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute right-4 top-4 rounded-[20%] bg-white p-0.5 text-[#de4b85] hover:bg-gray-100"
                >
                    <X className="h-4 w-4" strokeWidth={5} />
                </button>

                {/* Content Section */}
                <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:text-left mt-10">
                        <h2 className="text-2xl w-[85%] md:text-5xl font-bold leading-snug mb-4 Poppins-bold">
                            Looks like there's no vendor in your area.
                        </h2>
                        <div className="flex text-start w-full justify-between">
                            <div>
                                <p className="text-lg mb-6 Poppins">Become our vendor now</p>
                                <Link to='/vendor-page'>
                                    <button className="rounded-[80px] bg-[#FF4583E5] px-4 md:px-8 py-1 font-bold text-white transition hover:bg-[#ff4a7d] Poppins">
                                        Apply Now
                                    </button>
                                </Link>
                            </div>
                            {/* Image Section */}
                            <div className="relative right-0">
                                <img
                                    src={files.Biker}
                                    alt="Delivery person on scooter"
                                    className="max-h-40 md:max-h-72 object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
