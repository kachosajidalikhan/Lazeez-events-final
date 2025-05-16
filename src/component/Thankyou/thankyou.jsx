// components/ThankYouScreen.jsx
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ThankYouScreen() {
    const nav = useNavigate();
    return (
        <div className="flex items-center justify-center min-h-screen  px-4">
            <div className="w-full max-w-xl p-8 bg-white/79 rounded-[80px] shadow-2xl text-center space-y-6">
                <div className="flex flex-col items-center space-y-6">
                    <h1 className="text-3xl Poppins-bold md:text-4xl font-bold text-[#CC054D]">
                        Thank You For Your Message
                    </h1>

                    <p className="text-[#ED004F] leading-relaxed Poppins">
                        Our team will respond to your message
                        <br />
                        within 4 working days.
                    </p>

                    <div onClick={()=>{nav('/')}} className="relative w-16 h-16 flex items-center justify-center">
                        <div className="absolute inset-0 bg-[#D5316D] rounded-full animate-ping opacity-60"></div>
                        <div className="relative bg-pink-600 rounded-full w-16 h-16 flex items-center justify-center">
                            <Check className="w-8 h-8 text-white" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}