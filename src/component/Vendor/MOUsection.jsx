import files from "../../constants/index";
import ScrollAnimatedRight from "../scrollright";
import ScrollAnimatedSection from "../scrollsection";

export default function MouSigningSection() {
    return (
        <div className="w-full px-4 md:px-8 relative mt-10 overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative">

                {/* Image Section */}
                <ScrollAnimatedSection>

                <div className=" flex items-center justify-center">
                    <div className="">
                        <img
                            src={files.Image6}
                            alt="Briefcase and document with pen"
                            className="z-10 w-58 lg:w-full"
                            />
                    </div>
                </div>
                            </ScrollAnimatedSection>

                {/* Text Section */}
                <ScrollAnimatedRight>

                <div className="  text-white text-left md:text-left relative md:-left-10">
                    <h2 className="text-2xl md:text-4xl mb-4 Poppins-bold">MoU Signing</h2>
                    <p className="text-lg md:text-2xl leading-relaxed Poppins">
                        Visit our office in person to complete the <br /> Memorandum of Understanding (MoU) <br /> process, ensuring transparency,
                        trust, and <br /> seamless final documentation. And start <br /> receiving bulk orders for events.
                    </p>
                </div>
                </ScrollAnimatedRight>
                <div className="relative md:absolute md:-bottom-28 left-0 z-2">
                    <img src={files.Group4} alt="" className="w-20 lg:w-full" />
                </div>
            </div>
                <div className="flex justify-center p-10">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScon_NwglSANIVQFY1bm1BOT2xyOrYFj99Q13LR7pUPdoSJOg/viewform ">
                    <button  className="bg-[#FF4583] hover:bg-[#A8003D] cursor-pointer text-white Poppins-bold w-50 md:w-[400px] md:h-[100px] h-14 rounded-lg md:text-[35px]">Fill out the form</button>
                    </a>
                </div>
        </div>
    );
}
