import { Info } from "lucide-react";
import files from "../../constants/index";
import ScrollAnimatedSection from "../scrollsection";
import ScrollAnimatedRight from "../scrollright";

export default function RegistrationProcess() {
  return (
    <div className="min-h-screen text-white pt-15 relative">
      <div className=" absolute w-full flex justify-between items-center top-150">
        <img src={files.Shwarma2} alt="" className="w-16 md:w-24" />
        <img src={files.CanIcon2} alt="" className="w-16 md:w-24" />
      </div>
      <div className="max-w-6xl mx-auto">
        <br />
        <div className="mt-2 px-4">
          <h1 className="text-3xl md:text-6xl Poppins-bold">Registration <br />process</h1>
        </div>
        <div className="flex flex-col lg:flex-row items-star mt-4">
          {/* Left Column */}
          <ScrollAnimatedSection>

          <div className="flex items-center justify-center">
            <div className="md:relativ">              
                <img src={files.Image4} alt="" className="w-50 lg:w-full" />
            </div>
          </div>
          
          </ScrollAnimatedSection>

          {/* Right Column */}
          <ScrollAnimatedRight>

          <div className="space-y-4 relative">
            <h2 className="text-2xl mt-6 px-6 md:text-4xl Poppins-bold md:text-right">Adding your information</h2>
            <p className="px-4 text-lg md:text-2xl text-left md:text-right Poppins">
              Whether you are an Individual Chef or a registered business, you need to add <br /> the following information:
            </p>
            <ul className="space-y-2 px-4 text-left md:text-right text-lg md:text-2xl Poppins">
              <li>1. Owner's or C-suite name.</li>
              <li>2. ID Card number (CNIC).</li>
              <li>3. Legal registration copy (i.e., restaurants, bakeries, etc).</li>
              <li>4. Complete address</li>
              <li>5. QA testing of your place and food.</li>
            </ul>
          </div>
            <div className="absolute left-10 lg:-left-10 w-20 lg:w-full -bottom-30 lg:-bottom-45 z-2">
              <img src={files.Group4} alt="" />
            </div>
          </ScrollAnimatedRight>
        </div>
      </div>
    </div>
  );
}