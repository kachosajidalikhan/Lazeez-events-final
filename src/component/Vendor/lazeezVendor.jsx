import files from "../../constants/index";
import ScrollAnimatedRight from "../scrollright";
import ScrollAnimatedSection from "../scrollsection";

export default function LazeezVendor() {
    return (
        <main className="min-h-screen text-white w-full">
            <div className="">
                <div className="grid grid-cols-1 md:grid-cols-2 items-start w-full">

                    {/* Left Section - Text & Button */}
                    <ScrollAnimatedSection>

                    <div className="space-y-6 ml-4 px-4">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight pt-5 Poppins-bold">Lazeez Vendor Portal</h1>
                        <p className="text-lg md:text-2xl leading-relaxed Poppins">
                            Access your user-friendly <br className="lg:block hidden" /> personalized dashboard to manage <br className="lg:block hidden" /> orders, update menus, track <br className="lg:block hidden" /> performance, and
                            connect with <br className="lg:block hidden" /> event organizers—all in one place. <br className="lg:block hidden" /> Designed exclusively for our vendors <br className="lg:block hidden" /> to streamline
                            operations and boost <br className="lg:block hidden" /> growth.
                        </p>
                        <div className="pt-4">
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLScon_NwglSANIVQFY1bm1BOT2xyOrYFj99Q13LR7pUPdoSJOg/viewform"
                                className="inline-block bg-[#A8003D] Poppins hover:bg-pink-900 transition-colors px-4 py-4 rounded-md text-lg font-medium"
                                >
                                Become Lazeez Vendor
                            </a>
                        </div>
                    </div>
                                </ScrollAnimatedSection>

                    {/* Right Section - Image Mockups */}
                    <ScrollAnimatedRight>

                    {/* <div className="relative mt-10 md:mt-0">
                        <div className="relative z-20 flex justify-end">
                            <div className="relative -right-20"> */}
                                <img src={files.Group70} alt="" className=" lg:absolute m-auto xl:-right-26 lg:-right-20 xl:w-140 lg:w-100 md:w-100 w-70" />


                            {/* </div>
                        </div>
                    </div> */}
                    </ScrollAnimatedRight>

                </div>
            </div>
            <br />
        </main>
    );
}
