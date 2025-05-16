import React, {useState} from "react"
import files from "../../constants/index";
import { Star } from "lucide-react";
import PopupModal from "../Subpackages/popUp";
import ScrollAnimatedSection from "../scrollsection";
import ScrollAnimatedRight from "../scrollright";

export default function PackFeatures() {
const [selectedCard, setSelectedCard] = useState(null);
    const card = [{
        title: "Ramadan Special",
         image: files.foodimg,
        description: "Enhance the spirit of Ramadan with thoughtfully curated Iftar and Sehri packages. Designed for families and communities, our packages include delicious and nourishing meals that make every gathering memorable during this holy month.",
        vendor: "Karachi Biryani Center",
        ingredients: "Chicken Biryani, Chicken",
        rating: 5
    },
    {
        title: "FIFA 2020 Special",
        image: files.foodimg2,
        description: "Cheer for your favorite teams with our exclusive FIFA-themed food packages. Perfect for match screenings, these packages feature a variety of snacks, finger foods, and refreshing beverages to keep the excitement alive.",
        vendor: "MFC Restaurant",
        ingredients: "Seekh Kebab, Korma",
        rating: 5
    },
    {
        title: "Wedding Special",
        image: files.foodimg3,
        description: "Celebrate your special day with our premium Wedding packages, offering customized menus that blend elegance with exceptional taste. From traditional cuisines to modern delights, we cater to every preference for an unforgettable experience.",
        vendor: "Saver Foods",
        ingredients: "Chicken Polawo, Seekh Kabab",
        rating: 5
    }]
    return (
        <>
       
<section className="overflow-hidden w-full bg-white">
<br />
        <br />
        <br />
        <ScrollAnimatedSection>

                <div className="pl-5 lg:ml-30 md:ml-13 ml-3 pr-3 lg:px-0 ">
                    <h1 className="Poppins-bold mb-6 text-[#ED004F] text-3xl md:text-6xl">Featured Packages</h1>
                    <p className="Poppins text-lg md:text-2xl">Explore our exclusive food packages
                        crafted for <br /> your special events.
                        From corporate gatherings to <br />family celebrations,
                        our packages are tailored to <br />meet your needs with a
                        perfect blend of taste and <br /> convenience.
                    </p>

                </div>
        </ScrollAnimatedSection>
                <br />
                <br />
                <br />

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
            </>
                )
            }