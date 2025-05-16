import files from "../../constants/index";
import ScrollAnimatedSection from "../scrollsection";
import EventCard from "./eventCard";


export default function FoodSelection() {

    const foodPackages = [
        {
            id: 1,
            image: files.BaratIcon,
            title: "Baraat",
            description:
                "Celebrate the Baraat with a grand feast! Our specially curated packages are packed with rich, flavorful dishes that keep the energy high and the smiles wide as the celebrations unfold.",
        },
        {
            id: 2,
            image: files.MilladIcon,
            title: "Millad",
            description:
                "Celebrate the spiritual gathering of Millad with our wholesome and delicious food packages. Designed to reflect the sanctity of the occasion, our menu brings comfort and joy to your guests.",
        },
        {
            id: 3,
            image: files.AqiqaIcon,
            title: "Aqiqa",
            description:
                "Bless your little one's Aqiqa with a feast that honors tradition and taste. Our thoughtfully prepared menus ensure your family and guests enjoy a moment as special as the occasion.",
        },
        {
            id: 4,
            image: files.CorprateIcon,
            title: "Corporate Event",
            description:
                "Impress at corporate events with our professional catering. Perfect for meetings or office gatherings, our flavorful packages add a touch of Lazeez to every occasion.",
        },
        {
            id: 5,
            image: files.NikahIcon,
            title: "Nikah",
            description:
                "Celebrate the sacred union of nikah with a menu that reflects the beauty of the occasion. From traditional dishes to modern flavors, we ensure your celebration is as memorable as the bond you’re creating.",
        },
        {
            id: 6,
            image: files.WalimaIcon,
            title: "Walima",
            description:
                "Our exquisite menus, crafted with care and tradition, bring the perfect blend of taste and elegance to your special day, leaving a lasting impression on your guests.",
        },
        {
            id: 7,
            image: files.MajlisIcon,
            title: "Majlis",
            description:
                "Honor the sacred moments of majlis with our carefully curated food offerings. From traditional dishes to heartfelt flavors, we ensure your gathering is filled with warmth and devotion.",
        },
        {
            id: 8,
            image: files.BirthdayIcon,
            title: "Birthday",
            description:
                "Celebrate the sacred union of nikah with a menu that reflects the beauty of the occasion. From traditional dishes to modern flavors, we ensure your celebration is as memorable as the bond you’re creating.",
        },
        {
            id: 9,
            image: files.MehendiIcon,
            title: "Mehendi",
            description:
                "Our vibrant and delicious food packages are designed to match the energy of this joyous occasion, ensuring your guests enjoy every bite with lazeez food.",
        },
    ];

    return (
        <section className=" relative w-full py-16">
            <div className=" absolute w-full flex justify-between items-center top-300">
                <img src={files.Shwarma2} alt="" className="w-20 md:w-30" />
                <img src={files.CanIcon2} alt="" className="w-18 md:w-30" />
            </div>
            <div className="container mx-auto px-4 ">
                <ScrollAnimatedSection>

                    <h1 className="text-center text-white Poppins-bold text-3xl md:text-6xl mb-12 max-w-3xl mx-auto leading-tight">
                        Choose your food, <br />your choice, at your event!
                    </h1>
                </ScrollAnimatedSection>
                <div className="flex flex-wrap justify-center gap-4">
                    {foodPackages.map((item, index) => (
                        <EventCard
                            key={index}
                            id={item.id}
                            image={item.image}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
