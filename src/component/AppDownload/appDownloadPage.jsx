import React from "react";
import files from "../../constants/index";

export default function AppDownloadSection() {
    return (
        <section className="w-full bg-[#CC054D] text-white py-12 px-6 md:py-16 md:px-12">
            <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left: Text Content */}
                <div className="space-y-6 md:space-y-9">
                    <h2 className="text-3xl md:text-5xl font-bold Poppins-bold">
                        Download our app
                    </h2>
                    <p className="text-base md:text-lg lg:text-2xl Poppins">
                        Download our app to effortlessly plan your events and customize food packages with just a few taps—
                        your perfect event is now at your fingertips!
                    </p>

                    <div className="flex flex-col items-center lg:flex-row gap-4 pt-2 w-full">
                        {/* App Store Button */}
                        <a
                            href="#app-store"
                            className="bg-white text-[#ED004F] rounded-lg px-2 py-1 flex items-center justify-start w-fit hover:bg-gray-50 transition-colors"
                        >
                            <div className="flex items-center">
                                <div className="mr-3">
                                    <svg viewBox="0 0 24 24" width="35" height="35" fill="#ED004F">
                                        <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                                    </svg>
                                </div>
                                <div className="flex flex-col text-left">
                                    <span className="text-sm text-[#ED004F] Poppins">Download the App On</span>
                                    <span className="font-semibold text-[#ED004F] Poppins-bold">App Store</span>
                                </div>
                            </div>
                        </a>

                        {/* Play Store Button */}
                        <a
                            href="#play-store"
                            className="bg-white text-pink-600 rounded-lg px-2 py-1 flex items-center justify-start w-fit hover:bg-gray-50 transition-colors"
                        >
                            <div className="flex items-center">
                                <div className="mr-3">
                                    <svg viewBox="0 0 24 24" width="35" height="35" fill="#ED004F">
                                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                                    </svg>
                                </div>
                                <div className="flex flex-col text-left">
                                    <span className="text-sm text-[#ED004F] Poppins">Download the App On</span>
                                    <span className="font-semibold text-[#ED004F] Poppins-bold">Play Store</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Right: App Preview Image */}
                <div className="flex justify-center md:justify-end">
                    <div className="rounded-xl w-full max-w-xs sm:max-w-sm md:max-w-md aspect-[4/5] flex items-center justify-center">
                        <img src={files.Group72} alt="" className="w-full h-full object-cover" />
                        {/* <span className="text-gray-500 text-sm">App Preview</span> */}
                    </div>
                </div>
            </div>
        </section>
    );
}
