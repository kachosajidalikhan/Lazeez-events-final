
import React, { useState } from "react"
import files from "../../../constants";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import PopupModal from "../../Subpackages/popUp";
import ScrollAnimatedRight from "../../scrollright";
import ScrollAnimatedSection from "../../scrollsection";
export default function Features() {
    const [selectedCard, setSelectedCard] = useState(null);

    const card = [{
        title: "Ramadan Special",
        image: files.foodimg,
        description: "Enhance the spirit of Ramadan with thoughtfully curated Iftar and Sehri packages. Designed for families and communities, our packages include delicious and nourishing meals that make every gathering memorable during this holy month.",
        vendor: "Karachi Biryani Center",
        ingredients: "Chicken Biryani, Chicken",
        rating: 5,
        id: 10,
    },
    {
        title: "FIFA 2020 Special",
        image: files.foodimg2,
        description: "Cheer for your favorite teams with our exclusive FIFA-themed food packages. Perfect for match screenings, these packages feature a variety of snacks, finger foods, and refreshing beverages to keep the excitement alive.",
        vendor: "MFC Restaurant",
        ingredients: "Cheez Roll, Chuman",
        rating: 5,
        id: 11,
    },
    {
        title: "Wedding Special",
        image: files.foodimg3,
        description: "Celebrate your special day with our premium Wedding packages, offering customized menus that blend elegance with exceptional taste. From traditional cuisines to modern delights, we cater to every preference for an unforgettable experience.",
        vendor: "Saver Foods",
        ingredients: "Chicken Polawo, Seekh Kabab",
        rating: 5,
        id: 12,
    }]
    return (
        <>
            <section className=" w-full bg-white">
                <br />
                <br />
                <ScrollAnimatedSection>
                    <div className="o px-8 ">
                        <h1 className="Poppins-bold mb-6 text-[#ED004F] text-4xl md:text-5xl lg:text-6xl">Featured Packages</h1>
                        <p className="Poppins lg:w-[75%] md:text-[28px]">Explore our exclusive food packages
                            crafted for your special events.
                            From corporate gatherings to family celebrations,
                            our packages are tailored to meet your needs with a
                            perfect blend of taste and convenience.
                        </p>

                    </div>
                </ScrollAnimatedSection>

                <div className="px-2 py-6 grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                    {card.map((item, index) => (
                        <ScrollAnimatedRight key={index}>
                            <div
                                style={{
                                    backgroundImage: `url(${files.circle})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundPositionX: "-30px",
                                    backgroundPositionY: "390px",
                                    backgroundAttachment: "fixed",
                                }}
                                className="bg-white card-shadow rounded-xl flex flex-col justify-between w-full max-w-[390px] h-[560px] m-auto p-4"
                            >
                                <div className="flex flex-col items-center gap-4 text-center">
                                    <div className="w-full h-40 overflow-hidden rounded-xl">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <h1 className="text-[#CC054D] Poppins-bold text-[18px] mt-2">
                                        {item.title}
                                    </h1>

                                    <span className="Poppins text-[14px] px-2">{item.description}</span>
                                </div>

                                <div className="mt-4">
                                    <span className="text-[#ED004F] text-sm">
                                        <strong>Food Items:</strong> {item.ingredients}
                                    </span>
                                </div>

                                <div className="flex justify-between items-center mt-2 text-sm">
                                    <span>
                                        <strong className="text-[#ED004F]">Vendor Name:</strong> {item.vendor}
                                    </span>
                                    <img src={files.sheff} alt="" width={20} />
                                </div>

                                <div className="flex gap-2 justify-end items-center text-xs mt-2">
                                    <span className="text-[#A3A0A1]">(33)</span>
                                    <span>{"⭐".repeat(item.rating)}</span>
                                </div>

                                <div className="flex gap-3 justify-center mt-4">
                                    <button
                                        onClick={() => setSelectedCard(item)}
                                        className="bg-[#ED004F]/70 px-4 py-1 rounded-full text-white text-sm"
                                    >
                                        Order Now
                                    </button>
                                    <button
                                        onClick={() => setSelectedCard(item)}
                                        className="bg-[#ED004F]/70 px-4 py-1 rounded-full text-white text-sm"
                                    >
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </ScrollAnimatedRight>
                    ))}
                </div>

            </section>
            {selectedCard && (
                <PopupModal item={selectedCard} onClose={() => setSelectedCard(null)} />
            )}
            {/* <section style={{ backgroundImage: `url(${files.bg2})`, backgroundRepeat: 'no-repeat',backgroundPositionX:'' }} */}
            <section className="w-full lg:bg-cover bg-cover  gap-4">




                <ScrollAnimatedRight>
                    <div className="flex lg:flex-row flex-col">
                        <br />
                        <br />

                        <div className="lg:w-[60%] w-[80%] md:mt-10 md:ml-6 p-4 md:py-10">
                            <h2 className="Poppins-bold md:text-[62px] text-[40px] z-10 text-white leading-tight">Kuch Lazeez <br /> Hojaye?
                            </h2>
                            <span className="text-white Poppins md:text-[30px]">Download our app to effortlessly plan
                                your events and customize food packages with
                                just a few taps—your perfect event is now at your fingertips!
                            </span>
                        </div>



                        <img src={files.Group70} alt="" className=" lg:absolute m-auto xl:-right-26 lg:-right-20 xl:w-140 lg:w-100 md:w-100 w-70" />

                    </div>
                </ScrollAnimatedRight>
                <div className="px-4 md:ml-6 ">
                    <ScrollAnimatedSection>

                        <div className="flex-col md:flex md:flex-row gap-4">
                            <div className="bg-white md:mb-0 mb-4 px-4 py-1 rounded-lg flex items-center w-fit">
                                <img src={files.apple} alt="" className=" w-[46px] h-[46px] mr-2" />
                                <h1 className="text-[#ED004F] Poppins text-[14px] md:text-[18px]">Download the App On <strong className="text-[#ED004F] text-[16px] md:text-[20px] Poppins-bold"> <br /> App Store</strong></h1>
                            </div>
                            <div className="bg-white px-4 py-1 rounded-lg flex items-center w-fit">
                                <img src={files.play} alt="" className=" w-[46px] h-[46px] mr-2" />
                                <h1 className="text-[#ED004F] Poppins text-[14px] md:text-[18px]" >Download the App On <strong className="text-[#ED004F] text-[16px] md:text-[20px] Poppins-bold"> <br /> Play Store</strong></h1>
                            </div>
                        </div>
                    </ScrollAnimatedSection>
                    <ScrollAnimatedRight>

                        <div className=" mt-10 flex md:flex-row flex-col gap-x-4">
                            <a href='/vendor-page'>
                                <button className="bg-[#A8003D] hover:bg-[#ED004F] md:mb-0 mb-4 Poppins-bold text-white rounded-lg px-6 py-2 md:text-[20px]">Become Our Partner</button>
                            </a>
                            <a href="/Signup-Form">
                                <button className="bg-[#A8003D] hover:bg-[#ED004F] Poppins-bold text-white rounded-lg px-6 py-2 md:text-[20px]"> Sign up</button>
                            </a>
                        </div>
                    </ScrollAnimatedRight>
                </div>
                <br />
                <br />
                <br />

                <div className="relative w-full  px-6 py-12 md:px-12">
                    {/* Soda can - top left */}
                    <div className="absolute -top-30 -right-1 md:hidden block">
                        <img src={files.group66} alt="French fries,logo" className="object-contain w-[200px]" />
                    </div>

                    <div className="absolute l md:-top-24 -top-10">
                        <img src={files.Foods2} alt="Soda can" className="object-contain md:w-[130px] md:h-[200px] w-[80px] h-[80px]" />
                    </div>
                    <div className="absolute lg:right-50 right-0 lg:top-50 -top-1">
                        <img src={files.chef} alt="" className="object-contain lg:w-[330px] md:w-[200px] w-[200px]" />
                    </div>
                    {/* <ScrollAnimatedRight> */}
                    {/* French fries - bottom right */}
                    <div className="absolute -bottom-10 -right-3 hidden md:block">
                        <img src={files.group66} alt="French fries" className="object-contain lg:w-[530px] md:w-[300px]" />
                    </div>
                    {/* </ScrollAnimatedRight> */}

                    {/* Hamburger - bottom left */}
                    <div className="absolute bottom-10 -left-3">
                        <img src={files.frame11} alt="Hamburger" className="object-contain md:w-[120px] md:h-[120px] w-[80px]" />
                    </div>

                    {/* Main content */}
                    <ScrollAnimatedRight>

                        <div className="relative z-10 lg:w-[60%] w-[80%]">
                            <h1 className="Poppins-bold md:text-[62px] text-[40px] z-10 text-white leading-tight">Chefs! Let's Cook</h1>
                            <p className="text-white text-lg md:text-[30px] mb-8 Poppins">
                                Whether you're a catering service, a restaurant, a local culinary expert, or a cozy café, join Lazeez Events
                                to showcase your talent and grow your business. Signing up is simple: register, list your packages, and become
                                a part of memorable celebrations!
                            </p>
                            <a href="/vendor-page">
                                <button className="bg-[#9c0036] hover:bg-[#7d002c] text-white px-6 py-2 rounded-md Poppins">
                                    Become Our Partner
                                </button>
                            </a>
                        </div>
                    </ScrollAnimatedRight>
                </div>
                <br />
            </section>


        </>
    )
}