import React from "react";
import files from "../../constants/index";

export default function AboutHero() {
    return (
        <section className="relative animate-fadeInRight text-white">
            <br />
            <br />
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 items-center">

                    {/* Text Content */}
                    <div className="space-y-6 text-left md:text-left">
                        <h2 className="text-4xl md:text-6xl lg:text-6xl font-bold PoppinsBold">
                            Who we are?
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed Poppins">
                            Lazeez Events is the <span className="font-semibold">bridge</span> between your
                            <span className="font-semibold"> events</span> and unforgettable dining experiences.
                            <br className="hidden md:block" />
                            We bring together culinary passion to make every gathering exceptional. Whether a grand
                            wedding or an intimate celebration, we connect you with <span className="font-semibold">trusted vendors</span> to ensure every dish is a delight.
                            Forget the hassle of food preparation—simply choose, order, and enjoy flavors that make
                            every moment truly <span className="font-semibold">laze</span><span className="font-semibold">ez</span>!
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="relative flex justify-center md:justify-start w-full">
                        <img
                            src={files.chef3d}
                            alt="Chef Character"
                            className=""
                        />
                    </div>
                </div>
            </div>

            {/* Decorative Top Left Element */}
            <div className="absolute top-4 left-0 z-10">
                <img
                    src={files.Shwarma2}
                    alt="Decorative food element"
                    className="w-12 sm:w-16 md:w-20 lg:w-24"
                />
            </div>

            {/* Decorative Bottom Right Element */}
            <div className="absolute bottom-14 right-0 z-10 translate-y-1/2">
                <img
                    src={files.CanIcon2}
                    alt="Decorative corner"
                    className="w-12 sm:w-16 md:w-20 lg:w-24"
                />
            </div>
        </section>
    );
}
