import files from "../../constants/index";

export default function ForWho() {
    return (
        <main className="overflow-hidden min-h-screen text-white  md:pt-0">
            <div className="mx-auto px-6 lg:px-0 py-12 flex flex-col md:flex-row items-center md:items-start justify-between gap-0">
                
                {/* Left side - Device mockup */}
                <div className="-top-30 md:top-0 xl:-left-36 lg:-left-24 md:-left-10 md:relative flex justify-start md:justify-start">
                    <img
                        src={files.Group75}
                        alt="Device mockup"
                        className="w-full object-contain"
                    />
                </div>

                {/* Right side - Text content */}
                <div className="z-10 w-full md:w-1/1 text-left space-y-6 md:pr-[1rem]">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold Poppins-bold">
                        Lazeez Events for <span className="text-white">who?</span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl leading-relaxed Poppins">
                        Lazeez Events is for anyone planning a{" "}
                        <span className="font-semibold">gathering, big or small</span>—whether it’s a wedding,
                        a corporate event, a family celebration, or a community gathering. We provide
                        high-quality, <span className="font-semibold">bulk food</span> options from{" "}
                        <span className="font-semibold">trusted vendors</span>, ensuring your event is stress-free
                        and full of delicious moments.
                    </p>

                    <p className="text-base sm:text-lg md:text-xl font-semibold Poppins">
                        Your event, <span className="italic">your choice, always lazeez!</span>
                    </p>
                </div>
            </div>

            {/* App store buttons */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-center items-center gap-4 px-6 md:px-0">
                {/* App Store */}
                <a
                    href="#app-store"
                    className="bg-white text-pink-600 rounded-lg px-4 py-2 flex items-center gap-3 hover:bg-gray-100 transition-colors w-fit sm:w-auto max-w-xs"
                >
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="#ED004F">
                        <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                    </svg>
                    <div className="text-left">
                        <p className="text-xs text-[#ED004F] Poppins">Download the App On</p>
                        <p className="text-sm font-bold text-[#ED004F] Poppins-bold">App Store</p>
                    </div>
                </a>

                {/* Play Store */}
                <a
                    href="#play-store"
                    className="bg-white text-pink-600 rounded-lg px-4 py-2 flex items-center gap-3 hover:bg-gray-100 transition-colors w-fit sm:w-auto max-w-xs"
                >
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="#ED004F">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                    <div className="text-left">
                        <p className="text-xs text-[#ED004F] Poppins">Download the App On</p>
                        <p className="text-sm font-bold text-[#ED004F] Poppins-bold">Play Store</p>
                    </div>
                </a>
            </div>
        </main>
    );
}
