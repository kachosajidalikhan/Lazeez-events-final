import files from "../../constants/index";
import ScrollAnimatedRight from "../scrollright";
import ScrollAnimatedSection from "../scrollsection";

export default function ListFoodMenuSection() {
    return (
        <section className="relative w-full px-6 md:px-10 pt-30">
            <div className=" mx-auto">
            <div className="flex flex-col lg:flex-row justify-between mt-4">

                    {/* Text Section */}
                    <ScrollAnimatedRight>

                        <div className="flex lg:hidden justify-center md:justify-center relative">
                            <div className="relative w-48 md:w-54 md:h-54 -top-5">
                                <img
                                    src={files.Image5}
                                    alt="Menu book illustration"
                                    className="w-38 lg:w-full"
                                />
                            </div>
                        </div>
                    </ScrollAnimatedRight>
                    <ScrollAnimatedSection>

                        <div className="text-white overflow-hidden">
                            <h2 className="text-2xl md:text-4xl mb-6 Poppins-bold leading-tight">
                                List your menu and food packages.
                            </h2>
                            <p className="text-lg md:text-2xl font-normal leading-relaxed Poppins">
                                Showcase your culinary offerings by <br /> adding your menu and <br /> customizable food packages. <br /> Highlight your
                                specialties, pricing, <br /> promotions, and options for bulk <br /> orders to attract event organizers <br /> and grow your
                                business.
                            </p>
                        </div>
                    </ScrollAnimatedSection>

                    {/* Image & Decorative SVG */}
                    <ScrollAnimatedRight>

                        <div className=" hidden lg:flex">
                            <div className="">
                                <img
                                    src={files.Image5}
                                    alt="Menu book illustration"
                                    
                                />
                            </div>
                        </div>
                    </ScrollAnimatedRight>
                </div>
            </div>
            <div className="">
                <img src={files.Group36} alt="" className=" absolute w-20 md:-bottom-20 lg:w-30 left-0 right-0 m-auto" />
            </div>
        </section>
    );
}
