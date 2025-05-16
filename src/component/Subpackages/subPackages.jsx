import React, { useState } from "react"
import { Star } from "lucide-react";
import files from "../../constants/index";
import PopupModal from "./popUp";

export default function SubPackages() {
    const [selectedCard, setSelectedCard] = useState(null);

    const card = [
        {
            title: "MN1",
            image: files.Groups58,
            description: "Enhance the spirit of Ramadan with thoughtfully curated Iftar and Sehri packages. Designed for families and communities, our packages include delicious and nourishing meals that make every gathering memorable during this holy month.",
            vendar: "Hotel A",
            ingredients: "Chicken Biryani, Chicken",
            rating: 5
        },
        {
            title: "MN2",
            image: files.Group39,
            description: "Cheer for your favorite teams with our exclusive FIFA-themed food packages. Perfect for match screenings, these packages feature a variety of snacks, finger foods, and refreshing beverages to keep the excitement alive.",
            vendar: "Hotel B",
            ingredients: "Seekh Kebab, Korma",
            rating: 5
        },
        {
            title: "MN3",
            image: files.Group38,
            description: "Celebrate your special day with our premium Wedding packages, offering customized menus that blend elegance with exceptional taste. From traditional cuisines to modern delights, we cater to every preference for an unforgettable experience.",
            vendar: "Hotel C",
            ingredients: "Chicken Biryani, Korma",
            rating: 5
        },
        {
            title: "MN4",
            image: files.Groups58,
            description: "Enhance the spirit of Ramadan with thoughtfully curated Iftar and Sehri packages. Designed for families and communities, our packages include delicious and nourishing meals that make every gathering memorable during this holy month.",
            vendar: "Hotel A",
            ingredients: "Chicken Biryani, Chicken",
            rating: 5
        },
        {
            title: "MN5",
            image: files.Group39,
            description: "Cheer for your favorite teams with our exclusive FIFA-themed food packages. Perfect for match screenings, these packages feature a variety of snacks, finger foods, and refreshing beverages to keep the excitement alive.",
            vendar: "Hotel B",
            ingredients: "Seekh Kebab, Korma",
            rating: 5
        },
        {
            title: "MN6",
            image: files.Group38,
            description: "Celebrate your special day with our premium Wedding packages, offering customized menus that blend elegance with exceptional taste. From traditional cuisines to modern delights, we cater to every preference for an unforgettable experience.",
            vendar: "Hotel C",
            ingredients: "Chicken Biryani, Korma",
            rating: 5
        }
    ];

    return (
        <>
       
            <section className="w-full bg-[#CC054D] py-10 px-4 sm:px-6 lg:px-18">
            <br />
            <br />
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-x-10 md:gap-y-18">
                    {card.map((item, index) => (
                        <div key={index} className="bg-[#ffffff96] rounded-lg shadow-md overflow-hidden flex flex-col justify-between p-4 relative">
                            <div className="flex flex-col items-center text-center">
                                <img src={item.image} alt="" className="w-full max-h-40 object-contain mb-4" />
                                <h1 className="text-[#ED004F] font-bold text-xl sm:text-2xl mb-2">{item.title}</h1>
                                <p className="text-sm sm:text-base text-black mb-2">{item.description}</p>
                            </div>
                            <div className="text-sm text-[#ED004F] font-medium mb-1">
                                <strong>Food Item:</strong> {item.ingredients}
                            </div>
                            <div className="text-sm text-black mb-2">
                                <strong className="text-[#ED004F]">Vendor Name:</strong> {item.vendar}
                            </div>
                            <div className="flex items-center justify-end gap-1 mb-4">
                                <span className="text-xs text-gray-500">(33)</span>
                                {"⭐".repeat(item.rating)}
                            </div>
                            <div className="flex gap-3 justify-center">
                                <button
                                    onClick={() => setSelectedCard(item)}
                                    className="bg-[#CC054D]/80 hover:bg-[#cc054d] text-white px-4 py-2 rounded-full text-sm font-semibold"
                                >
                                    Order Now
                                </button>
                                <button
                                onClick={() => setSelectedCard(item)}
                                    className="bg-[#CC054D]/80 hover:bg-[#cc054d] text-white px-4 py-2 rounded-full text-sm font-semibold"
                                >
                                    Learn More
                                </button>
                            </div>
                            <img src={files.Ellipse06} alt="" className="absolute -bottom-4 -left-4 w-20 h-20 object-contain" />
                        </div>
                    ))}
                </div>
                <br />
                <br />
            </section>
            {selectedCard && (
                <PopupModal item={selectedCard} onClose={() => setSelectedCard(null)} />
            )}
        </>
    )
}
