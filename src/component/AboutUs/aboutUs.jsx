import AboutHero from "./aboutHero";
import AppDownloadSection from "./appDownloadBtns";
import ContactForm from "./contactForm";
import ForWho from "./forWho";
import HowWeWork from "./howWeWork";
import files from "../../constants/index";
import ScrollAnimatedSection from "../scrollsection";
import ScrollAnimatedRight from "../scrollright";




export default function AboutUs() {

    return (<>

        <br />
        <br />

        <AboutHero />
        <ScrollAnimatedSection>

            <ForWho />
        </ScrollAnimatedSection>


        <HowWeWork />

        {/* <section style={{ backgroundImage: url(`${files.Group58}`) }}  > */}
        <section className="relative">

            {/* Desktop Background Image (hidden on tab/mob) */}


            {/* MOBILE/TAB Mode Only Section */}
            <div className="block lg:hidden space-y-10 px-6 pt-10">

                {/* Step 1 */}
                <ScrollAnimatedSection>

                    <div className="flex flex-col animate-fadeInUp items-center justify-center ">
                        <img src={files.Group71} alt="Step 1 Mobile" className="w-full z-10 max-w-xs" />
                        <img src={files.Frame18} alt="Road Line" className="w-26 h-50 relative bottom-14" />

                        <div className="text-white relative bottom-13 text-center">
                            <h1 className="Poppins-bold flex justify-center items-center text-2xl sm:text-3xl pb-4">Register and Onboard</h1>
                            <p className="Poppins text-base sm:text-lg">
                                Sign up and join our platform in minutes. <br />
                                Set your preferences and get ready to <br />
                                explore a world of tailored food options.
                            </p>
                        </div>


                    </div>
                </ScrollAnimatedSection>

                {/* Step 2 */}
                <ScrollAnimatedSection>

                    <div className="flex flex-col items-center justify-center relative animate-fadeInUp">
                        <div className="absolute -top-22 ">

                            <img src={files.Frame18} alt="Road Line" className="w-26 h-38 relative z-10" />
                        </div>

                        <img src={files.Group72} alt="Step 2 Mobile" className="w-full z-10 max-w-xs" />
                        <img src={files.Frame18} alt="Road Line" className="w-26 h-50  relative bottom-14" />

                        <div className="text-white text-center relative bottom-13">
                            <h1 className="Poppins-bold text-2xl sm:text-3xl pb-4">Explore Packages and Customization</h1>
                            <p className="Poppins text-base sm:text-lg">
                                Browse through a variety of featured and <br />
                                customizable food packages, crafted to <br />
                                meet your event’s unique needs and tastes.
                            </p>
                        </div>
                    </div>
                </ScrollAnimatedSection>

                {/* Step 3 */}
                <ScrollAnimatedSection>

                    <div className="flex flex-col items-center justify-center animate-fadeInUp">
                        <div className="absolute -top-22">

                            <img src={files.Frame18} alt="Road Line" className="w-26 h-38 relative z-10" />
                        </div>
                        <img src={files.Group73} alt="Step 3 Mobile" className="w-full z-10 max-w-xs" />
                        <img src={files.Frame18} alt="Road Line" className="w-26 h-50  relative bottom-14" />

                        <div className="text-white text-center relative bottom-13">
                            <h1 className="Poppins-bold text-2xl sm:text-3xl pb-4">Place Your Lazeez Order</h1>
                            <p className="Poppins text-base sm:text-lg">
                                Pick your perfect package and place bulk <br />
                                food orders effortlessly with just a few clicks. <br />
                                Let Lazeez Events take the hassle out of event catering.
                            </p>
                        </div>
                        <div className="w-[400px] relative lg:hidden flex top-10 justify-center items-center">
                            <img src={files.Logo2} alt="" className="w-40  absolute object-contain z-2 " />
                            <div className=" absolute w-50 h-50 rounded-full bg-[radial-gradient(closest-side,theme(colors.yellow.400),theme(colors.yellow.500),transparent)] blur-2xl opacity-80 z-1"></div>
                        </div>
                    </div>
                </ScrollAnimatedSection>

                {/* App Download + Contact */}
                <ScrollAnimatedSection>

                    <div className="pt-10">
                        <AppDownloadSection />
                        <ContactForm />
                    </div>
                </ScrollAnimatedSection>
            </div>

            {/* DESKTOP layout remains unchanged below */}

            <div className="hidden lg:block">
                <section className="relative">
                    {/* Background Image */}
                    <ScrollAnimatedRight>

                        <img src={files.one} alt="" className="absolute top-0 hidden md:block" />
                    </ScrollAnimatedRight>

                    {/* Step 1 */}
                    <div className="relative">
                        <ScrollAnimatedRight>

                            <div className="flex flex-col md:flex-row justify-end items-center p-6 mb-20 md:mb-10 lg:mb-40">
                                <div className="text-white md:text-right text-center lg:-left-40 relative lg:top-10 max-w-xl">
                                    <h1 className="Poppins-bold text-3xl sm:text-4xl md:tex-3xl lg:text-5xl pb-6">Register and Onboard</h1>
                                    <p className="Poppins text-lg sm:text-xl md:text-lg lg:text-2xl">
                                        Sign up and join our platform in minutes. <br />
                                        Set your preferences and get ready to <br />
                                        explore a world of tailored food options.
                                    </p>
                                </div>
                            </div>
                        </ScrollAnimatedRight>

                        {/* Center Images */}
                        <div className="hidden md:flex justify-between items-center px-4 lg:px-0 md:px-0 -mt-10 lg:-mt-20">
                            <img src={files.Shwarma2} alt="" className="w-24 sm:w-32 md:w-22 lg:w-auto" />
                            <img src={files.CanIcon2} alt="" className="w-24 sm:w-32 md:w-22 lg:w-auto" />
                        </div>

                        {/* Ghost content (optional for spacing or animation) */}
                        <div className="p-6 mt-20 hidden md:block">
                            <div className="text-transparent">
                                <h1 className="Poppins-bold text-5xl pb-10">Register and Onboard2</h1>
                                <p className="Poppins text-2xl">...</p>
                            </div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative">
                        <ScrollAnimatedSection>

                            <div className="flex flex-col md:flex-row justify-start items-center p-6 mb-20 lg:mb-40">
                                <div className="text-white text-center lg:text-left lg:left-20 relative md:-top-40 lg:top-10 max-w-xl">
                                    <h1 className="Poppins-bold text-3xl sm:text-4xl lg:text-5xl pb-6">
                                        Explore Packages and <br /> Customization
                                    </h1>
                                    <p className="Poppins text-lg sm:text-xl lg:text-2xl">
                                        Browse through a variety of featured and <br />
                                        customizable food packages, crafted to <br />
                                        meet your event's unique needs and <br />
                                        tastes.
                                    </p>
                                </div>
                            </div>
                        </ScrollAnimatedSection>

                        {/* Ghost content */}
                        <div className="p-6 mt-20 hidden md:block">
                            <div className="text-transparent">
                                <h1 className="Poppins-bold text-5xl pb-10">Register and Onboard5</h1>
                                <p className="Poppins text-2xl">...</p>
                            </div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative">
                        <ScrollAnimatedRight>

                            <div className="flex flex-col md:flex-row justify-end items-center p-6 mb-20 md:mb-10 lg:mb-40">
                                <div className="text-white md:text-right text-center lg:-left-40 relative md:-top-30 lg:top-10 max-w-xl">
                                    <h1 className="Poppins-bold text-3xl sm:text-4xl md:tex-3xl lg:text-5xl pb-6">Place Your Lazeez Order</h1>
                                    <p className="Poppins text-lg sm:text-xl md:text-lg lg:text-2xl">
                                        Pick your perfect package and place bulk <br />
                                        food orders effortlessly with just a few clicks. <br /> Let Lazeez Events take the hassle out of <br /> event catering, bringing delightful flavors <br /> straight to your celebrations!
                                    </p>
                                </div>
                            </div>

                        </ScrollAnimatedRight>
                        {/* Ghost content */}
                        <div className="p-6 mt-20 hidden md:block">
                            <div className="text-transparent">
                                <h1 className="Poppins-bold text-5xl pb-10">Register and Onboard</h1>
                                <p className="Poppins text-2xl">...</p>
                            </div>
                        </div>
                    </div>


                    {/* App Download */}
                    <ScrollAnimatedRight>

                        <div className="relative md:-top-100 md:right-0 lg:top-0">
                            <div className="flex justify-center md:justify-end md:p-0">
                                <div className="text-white relative lg:right-30 lg:-top-10">
                                    <AppDownloadSection />
                                </div>
                            </div>
                        </div>
                    </ScrollAnimatedRight>
                    <br />
                    <br />
                    <ScrollAnimatedSection>

                        <ContactForm />
                    </ScrollAnimatedSection>
                </section>
            </div>
        </section>

    </>
    )
}
