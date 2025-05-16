import { Link } from "react-router-dom";
import files from "../../../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import FoodCarousel from "./imageSlider";

export default function HeroSection() {
    return (
        <div className="flex flex-col md:flex-row overflow-hidden min-h-[600px]">
            {/* Background food images */}

            <div className="w-full mx-auto">

            <FoodCarousel />
            </div>

            <div className="w-full px-6 py-16 flex flex-col md:flex-row items-center">
                {/* Food Image */}
                {/* Content */}
                <div className="Poppins text-white">
                    <h1 className=" relative text-5xl md:text-5xl lg:text-6xl Poppins-bold font-bold mb-4">
                        Yaha Sub <br />
                        Kuch <img src={files.LazeezDopping} alt="" className="w-70 h-50 lg:w-100 lg:h-60 absolute -top-6 left-20 xl:-top-7 xl:left-22 lg:-top-7 lg:left-23 md:-top-6 md:-right-14 mix-blend-screen"/> <br />
                    </h1>
                    <h1 className="text-4xl Poppins-bold">

                        Hai!
                    </h1>
                    <p className="text-lg mb-8 max-w-lg">
                        Experience Taste and Convenience with Lazeez Events. Lazeez Events offers customized food packages and
                        unforgettable experiences. Partnering with trusted vendors, we make every meal a flavorful celebration,
                        perfectly tailored to your needs and occasions.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="/Lazeez-Packages"
                            className="bg-[#ED004F] Poppins hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-[12px] transition duration-300"
                        >
                            Explore Packages
                        </a>
                        <a
                            href="/Signup-Form"
                            className="bg-[#ED004F] Poppins w-[150px] text-center hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-[12px] transition duration-300"
                        >
                            Sign up
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
