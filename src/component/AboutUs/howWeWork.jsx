import files from "../../constants/index";
import ScrollAnimatedSection from "../scrollsection";

export default function HowWeWork() {
    return (
        <section className="overflow-hidden w-full py-16 px-4">
            <div className="container mx-auto max-w-6xl">
            <ScrollAnimatedSection>

                <h1 className="text-white text-4xl sm:text-5xl md:text-6xl Poppins-bold mb-26 md:mb-28 text-center md:text-start">
                    How we work?
                </h1>
            </ScrollAnimatedSection>

                <div className="flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-10 sm:gap-14 lg:gap-x-24 px-2 sm:px-4 md:px-0">
                        <Card
                            icon={<img src={files.StarBadge} className="w-20 h-20" />}
                            
                            title="Vision"
                            description="To redefine events with customized food, seamless customization, and unmatched customer and vendor experiences."
                        />

                        <Card
                            icon={<img src={files.Target} className="w-20 h-20" />}
                            title="Mission"
                            description="Empower vendors and delight customers by providing a reliable platform for personalized food solutions for events."
                        />

                        <Card
                            icon={<img src={files.Group24} className="w-16 h-16 sm:w-20 sm:h-20" />}
                            title="Our Promises"
                            description={
                                <>
                                    Timely delivery, every time.
                                    <br />
                                    Trusted vendors for guaranteed satisfaction.
                                    <br />
                                    Uncompromising quality in every bite.
                                </>
                            }
                        />
                    </div>
                </div>

                <div className="hidden md:flex justify-end lg:right-30 mt-10 sm:mt-14 relative z-10 pr-2 sm:pr-6 md:pr-0">
                    <img
                        src={files.Group30}
                        alt=""
                        className="w-28 sm:w-40 md:w-56 lg:w-auto -mt-10 sm:-mt-16 md:-mt-20"
                    />
                </div>
                <ScrollAnimatedSection>

                <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl Poppins-bold mt-12 sm:mt-16 text-center md:text-start px-2 sm:px-8 md:px-0">
                    Get started in 3 <br /> simple steps!
                </h1>
                </ScrollAnimatedSection>
            </div>
        </section>
    );
}

// ✅ Reusable Card Component
function Card({ icon, title, description }) {
    return (<>
    <ScrollAnimatedSection>

        <div className="bg-[#FF5B97F2] w-full max-w-[25rem] mx-auto md:mx-0 rounded-xl p-3 pt-20 text-center relative shadow-lg">
            <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-white p-3 sm:p-4 rounded-full w-30 h-30 flex items-center justify-center shadow-md">
                {icon}
            </div>
            <h2 className="text-white text-xl sm:text-2xl Poppins-bold mb-4">{title}</h2>
            <p className="text-white text-sm sm:text-base md:text-lg Poppins">{description}</p>
        </div>
    </ScrollAnimatedSection>
    </>
    );
}
