import { Link } from "react-router-dom";
import files from "../../../constants";
import useInView from "../../useInView";
import ScrollAnimatedSection from '../../../component/scrollsection'
import ScrollAnimatedRight from "../../../component/scrollright";

export default function AboutSection() {
    const [ref, isVisible] = useInView({ threshold: 0.2 });

    const features = [
        {
            title: "High Quality Food",
            image: files.icon8,
            description: "Fresh and delicious meals every time.",
            delay: 0,
        },
        {
            title: "Cost-Effective Prices",
            image: files.icon9,
            description: "Packages that fit your budget.",
            delay: 0.3
        },
        {
            title: "Timely Delivery",
            image: files.icon10,
            description: "Always on time, stress-free events.",
            delay: 0.6
        },
    ];

    return (
        <>
            <section className="relative w-full bg-white pt-6">
                <div className="overflow-hidden container p-6 mx-auto max-w-6xl">
                    {/* Heading and Description */}
                    <ScrollAnimatedSection>

                        <div className="max-w-4xl">
                            <h2 className="text-4xl leading-normal md:text-5xl lg:text-6xl Poppins-bold font-extrabold text-[#ED004F] mb-6">
                                Say Goodbye to Event's Food Hassle!
                            </h2>
                            <p className="text-lg md:text-[28px] Poppins text-gray-800 leading-relaxed">
                                Planning an event just got easier! With Lazeez Events, it's all about your event, your food, and your choice.
                                Select from our onboarded vendors offering ready-made packages or{" "}
                                <span className="text-[#ED004F]/69 font-medium">customize</span> your own to
                                <span className="text-[#ED004F]/69 font-medium"> match your needs</span>.
                                We’ve got you covered—so{" "}
                                <span className="text-[#ED004F] font-medium">you</span> can focus on{" "}
                                <span className="text-[#ED004F] font-medium">celebrating</span>, while{" "}
                                <span className="text-[#ED004F]/69 font-medium">we</span> take <span className="text-[#ED004F]/69 font-medium">care of the rest!</span>
                            </p>
                        </div>
                    </ScrollAnimatedSection>

                </div>
                <section className="overflow-hidden w-full">
                    <ScrollAnimatedSection>

                        <img src={files.Group78} alt="" className="hidden w-full md:block" />
                    {/* <div className="flex gap-6  justify-end items-end px-4 py-10 bg-white">
{
    features.map((feature, index) => (
                        <div className="bg-white relative -top-80 shadow-lg rounded-xl p-2 w-[173px] h-[244px] max-w-sm text-center">
                            <img src={feature.image} alt="High Quality Food" className="w-20 mx-auto mb-4" />
                            <h3 className="text-pink-600 text-xl font-bold">{feature.title}</h3>
                            <p className="text-gray-600 mt-2">{feature.description}</p>
                        </div>
                    ))}
                    </div> */}
                    </ScrollAnimatedSection>


                    <div className="md:hidden Poppins flex gap-10 flex-col p-2">
                        <div className="gap-2 flex flex-col items-center">
                            <div className="flex gap-4 items-center">
                                <img src={files.icon1} alt="" width={40} />
                                <span className="text-xl">Aapke Khane</span>
                            </div>
                            <div className="flex gap-4 items-center">
                                <img src={files.icon2} alt="" width={40} />
                                <span className="text-xl">Aapke Events</span>
                            </div>
                        </div>


                        {/* <CornerLeftDown className="w-16 h-16 text-[#ED004F] relative left-12" /> */}
                        <img src={files.icon6} alt="" width={80} className=" -rotate-55" />


                        <div className="flex gap-4 items-center justify-center">
                            <img src={files.icon4} alt="" width={40} />
                            <span className="text-xl">Aapki Choice</span>

                        </div>
                        {/* <ArrowDown className="w-16 h-16 text-[#ED004F] mx-auto" /> */}
                        <img src={files.icon5} alt="" width={80} className="mx-auto -rotate-75" />

                        <div className="m-auto">
                            <img src={files.logo} alt="" />

                        </div>
                        {/* <CornerLeftDown className="w-16 h-16 text-[#ED004F] relative left-12" /> */}
                        <img src={files.icon6} alt="" width={80} className=" -rotate-45" />

                        <div className="flex gap-4 items-center justify-center">
                            <img src={files.icon7} alt="" width={40} />
                            <span className="text-xl">Top-notch trusted vendor</span>

                        </div>

                    </div>

                    <div className=" relative  md:w-[55%] w-full lg:bottom-20 md:bottom-13   flex flex-col items-center justify-center gap-6">

                        <a
                            href="/vendor-page"
                        >
                            <button
                                className="bg-[#ED004F]/69 Poppins w-fit h-fit p-2 hover:bg-[#ED004F] text-white font-medium  rounded-md transition duration-300">

                                Become Our Partner
                            </button>
                        </a>

                    </div>
                </section>

                <div className="overflow-hidden lg:absolute bottom-20 right-20 flex md:flex-row flex-col md:hidde gap-2 items-center px-4 py-10 md:py-0">
                    {features.map((feature, index) => (
                        <>
                        <ScrollAnimatedRight>

                            <div
                                key={index}
                                style={{ backgroundImage: `url(${files.vector})`, backgroundRepeat: 'no-repeat', backgroundPositionX: '-20px', backgroundPositionY: '30px', backgroundSize: 'contain' }}
                                className="bg-white Poppins shadow-lg rounded-lg p-2 lg:h-[244px] h-[244px] lg:w-[173px] w-[173px] md:h-fit md:w-fit text-center border border-gray-200"
                                >
                                {/* Icon Placeholder (Replace with your image) */}
                                <div className=" mx-auto  rounded-full flex items-center justify-center">
                                    <img src={feature.image} alt="" width={100} />
                                </div>

                                {/* Title */}
                                <h3 className="text-sm lg:text-lg Poppins-bold text-[#CC054D]">{feature.title}</h3>

                                {/* Description */}
                                <p className="text-gray-600 text-sm Poppins mt-2">{feature.description}</p>

                                {/* Bottom Circle */}
                                {/* <img src={files.vector} alt="" width={20} /> */}
                            </div>
                                </ScrollAnimatedRight>
                        </>
                    ))}
                </div>
            </section>
        </>
    );
}
