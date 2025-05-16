import { Link } from "react-router-dom"; // ✅ React Router ka Link
import { Target, DollarSign, Star } from "lucide-react";
import files from "../../../constants";
import ScrollAnimatedRight from "../../scrollright";
import ScrollAnimatedSection from "../../scrollsection";

export default function VendorPerks() {
    return (
        <section className="w-full py-16 px-6 bg-white">
            <div className="overflow-hidden container mx-auto max-w-6xl">
                {/* Heading and Description */}
                <ScrollAnimatedRight>

                <div className="overflow-hidden text-center mb-16">
                    <h2 className="text-3xl md:text-6xl Poppins-bold lg:text-6xl font-bold text-[#ED004F] mb-6">
                        Vendor Perks
                    </h2>
                    <p className="text-lg md:text-2xl Poppins text-gray-800 leading-relaxed max-w-4xl mx-auto">
                        Join us and grow your business! Reach a wider audience, secure
                        steady event bookings, and boost revenue effortlessly. With quick,
                        hassle-free setup and a trusted platform, we make operations smooth
                        and success simple. Take your vendor business to the next level
                        today!
                    </p>
                </div>
                </ScrollAnimatedRight>

                {/* Benefit Cards */}
                <div className="grid Poppins grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* Card 1 */}
                    <ScrollAnimatedSection>

                    <div style={{backgroundImage:`url(${files.circle})`,backgroundPositionY:'140px', backgroundPositionX:"-160px"}} 
                    className="bg-white md:h-[350px] rounded-lg bg-no-repeat bg-cover shadow-lg overflow-hidden relative p-6">
                        <div className="flex justify-center mb-6">
                            <div className="relative">
                                <div className="w-24 h-24 rounded-full flex items-center justify-center">
                                    <img src={files.frame2} alt="" />

                                </div>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-[#CC054D] text-center mb-2">
                            Reach Wider Audience
                        </h3>
                        <p className="text-center text-gray-600">
                            Access a wider audience for your services.
                        </p>
                        <div className="absolute top-4 right-4 w-4 h-4 bg-pink-200 rounded-full z-0"></div>
                    </div>
                    </ScrollAnimatedSection>

                    {/* Card 2 */}
                    <div style={{backgroundImage:`url(${files.circle})`,backgroundPositionY:'140px', backgroundPositionX:"-160px"}} 
                    className="bg-white md:h-[350px] rounded-lg bg-no-repeat bg-cover shadow-lg overflow-hidden relative p-6">
                        <div className="flex justify-center mb-6">
                            <div className="relative">
                                <div className="w-24 h-24 rounded-full flex items-center justify-center">
                                    <img src={files.frame3} alt="" />

                                </div>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-[#CC054D] text-center mb-2">
                            Boost Revenue
                        </h3>
                        <p className="text-center text-gray-600">
                            Receive consistent orders for various events.
                        </p>
                        
                        <div className="absolute top-4 right-4 w-4 h-4 bg-pink-200 rounded-full z-0"></div>
                    </div>

                    {/* Card 3 */}
                    <ScrollAnimatedRight>

                    <div style={{backgroundImage:`url(${files.circle})`,backgroundPositionY:'140px', backgroundPositionX:"-160px"}} 
                    className="bg-white md:h-[350px] rounded-lg bg-no-repeat bg-cover shadow-lg overflow-hidden relative p-6">
                        <div className="flex justify-center mb-6">
                            <div className="relative">
                                <div className="w-24 h-24 rounded-full flex items-center justify-center">
                                    <img src={files.star} alt="" />

                                </div>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-[#CC054D] text-center mb-2">
                            Be a Brand!
                        </h3>
                        <p className="text-center text-gray-600 mb-2">
                            Hassle-free registration and listing process.
                        </p>
                        <p className="text-center text-gray-600">
                            Partner with a reliable brand for seamless operations.
                        </p>
                        {/* <div className="absolute -bottom-3 -left-10 w-32 h-32 bg-pink-100 rounded-full -mb-16 -mr-16 z-0"></div> */}
                        <div className="absolute top-14 right-10 w-4 h-4 bg-pink-200 rounded-full z-0"></div>
                    </div>
                        </ScrollAnimatedRight>
                </div>

                {/* And many more */}
                <div className="text-center Poppins mb-8">
                    <h3 className="text-3xl md:text-4xl font-bold text-[#ED004F]">
                        And many more!
                    </h3>
                </div>

                {/* CTA Button */}
                <div className="flex Poppins justify-center">

                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLScon_NwglSANIVQFY1bm1BOT2xyOrYFj99Q13LR7pUPdoSJOg/viewform"
                        className="bg-[#CC054D] hover:bg-pink-700 text-white font-medium py-3 px-8 rounded-md transition duration-300 text-lg"
                    >
                        Register Now!
                    </a>
                </div>
            </div>
        </section>
    );
}
