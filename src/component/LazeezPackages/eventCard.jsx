import { useNavigate } from "react-router-dom"
import ScrollAnimatedRight from "../scrollright"

export default function EventCard({ id,image, title, description }) {
    const nav = useNavigate()
    return (
        <div onClick={()=>{nav(`/Sub-Packages/${id}`)}} className="z-10 rounded-lg h-fit w-fit flex flex-col justify-center md:items-start  text-center">
            <ScrollAnimatedRight>

            <div className="mb-4 bg-[#FFD9E7] w-[285px] rounded-[20px] flex items-center justify-center m-auto md:m-0">
                <img
                    src={image} // Replace with your actual image path
                    alt="Baraat celebration icon"
                    className="object-contain w-[214px] h-[214px]"
                    />
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">

            <h2 className="text-white Poppins-bold lg:text-[40px] text-[30px] mb-2 text-center md:text-start">{title}</h2>
            <p className="text-[#FFFFFFA6] w-[300px] Poppins lg:text-[22px] text-[16px]">
                {description}
            </p>
            </div>
                    </ScrollAnimatedRight>
        </div>
    )
}