import files from "../../constants/index";

const VendorHero = () => {
    return (
        <section className="relative min-h-[600px] w-full md:px-4 py-10 md:py-24">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
                {/* Left Content */}
                <div className="z-10 px-12 animate-fadeInLeft">
                    <h1 className="text-white Poppins-bold text-3xl md:text-6xl leading-tight">
                        Why partner <br /> with us?
                    </h1>
                    <div className="mt-6 space-y-3 text-lg md:text-2xl Poppins text-white">
                        <p>Access a wide customer base for bulk orders.
                        Increase your sales with consistent event-based demand.
                        Build credibility by joining a trusted platform.</p>
                    </div>
                </div>

                {/* Right Side - Chef & Icon */}
                <div className="relative animate-fadeInRight flex justify-center md:justify-between">
                    <img
                        src={files.ChefIcon2}
                        alt="Chef character flying with spatula"
                        className=" relative right-22 md:right-10 w-[140px] md:w-[200px] lg:w-[422px]"
                    />
                    <div className="md:w-[400px]">
                        <img src={files.Logo2} alt="" className="w-40 lg:w-80 absolute top-15 right-0 object-contain z-2 " />
                        <div className=" absolute right-0   lg:w-80 lg:h-80 w-50 h-50 rounded-full bg-[radial-gradient(closest-side,theme(colors.yellow.400),theme(colors.yellow.500),transparent)] blur-2xl opacity-80 z-1"></div>                      
                    </div>
                </div>
            </div>
            {/* background: linear-gradient(0deg, rgba(237, 217, 0, 0.69), rgba(237, 217, 0, 0.69)); */}

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0">
                <img src={files.Shwarma2} alt="Decorative food element" className="w-18 md:w-32" />
            </div>

            <div className="absolute right-0 z-2">
                <img src={files.CanIcon2} alt="Decorative corner" className=" w-14 md:w-32" />
            </div>
        </section>
    );
};

export default VendorHero;
