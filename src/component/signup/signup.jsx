import { useState } from "react";
import { User, Phone, Mail, Lock } from "lucide-react";
import files from "../../constants/index";
import { Link } from "react-router-dom";
import axiosInstance from '../../axios';
import GoogleLoginBtn from "./googleLoginBtn";

export default function SignupForm() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
        acceptTerms: false,
    });
    const [error, setError] = useState("");
    const [shake, setShake] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com|hotmail\.com|icloud\.com)$/;
        if (!emailRegex.test(formData.email)) {
            setError("Please enter a valid email address with a supported domain.");
            triggerShake();
            return;
        }

        if (formData.password.length < 6) {
            setError("Password must be at least 6 characters long.");
            triggerShake();
            return;
        }

        try {
            await axiosInstance.post('/api/auth/signup', formData);
            console.log("Signup successful");
            window.location.href = '/Login-Form';
        } catch (error) {
            setError(error.response?.data?.message || "Invalid email or password");
            triggerShake();
        }
    };

    const triggerShake = () => {
        setShake(true);
        setTimeout(() => setShake(false), 500);
    };

    return (
        <>
            <br /><br />
            <div className="relative w-full Poppins max-w-[1088px] mx-auto p-4 sm:p-6 md:p-8">
                <div className="bg-pink-100 rounded-[60px] sm:rounded-[80px] md:rounded-[120px] p-4 sm:p-6 md:p-8 shadow-lg">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-6">
                        {/* Image Section */}
                        <div className="w-full md:w-1/2 flex justify-center items-center">
                            <div className="relative w-[220px] lg:w-[350px] h-[220px] lg:h-[350px]">
                                <img
                                    src={files.ChefIcon}
                                    alt="Chili pepper chef"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>

                        {/* Form Section */}
                        <div className="w-full md:w-1/2">
                            <h1 className="text-2xl sm:text-3xl md:text-2xl pl-4 text-start text-[#CC054D] mb-4 Poppins-bold">
                                Create an Account
                            </h1>

                            <form onSubmit={handleSubmit} className="space-y-4 pl-4">
                                {/* Name */}
                                <div className={`relative lg:w-[60%] ${shake ? 'animate-shake' : ''}`}>
                                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                        <User className="h-4 w-4 text-[#ED004F]" />
                                    </div>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-3 h-10 py-3 rounded-md bg-[#F1BBBBBA] placeholder-[#ED004F] Poppins focus:outline-none focus:ring-2 focus:ring-pink-500"
                                        required
                                    />
                                </div>

                                {/* Phone */}
                                <div className={`relative lg:w-[60%] ${shake ? 'animate-shake' : ''}`}>
                                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                        <Phone className="h-4 w-4 text-[#ED004F]" />
                                    </div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone Number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-3 h-10 py-3 rounded-md bg-[#F1BBBBBA] Poppins placeholder-[#ED004F] focus:outline-none focus:ring-2 focus:ring-pink-500"
                                        required
                                    />
                                </div>

                                {/* Email */}
                                <div className={`relative lg:w-[60%] ${shake ? 'animate-shake' : ''}`}>
                                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                        <Mail className="h-4 w-4 text-[#ED004F]" />
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-3 h-10 py-3 Poppins rounded-md bg-[#F1BBBBBA] placeholder-[#ED004F] focus:outline-none focus:ring-2 focus:ring-pink-500"
                                        required
                                    />
                                </div>

                                {/* Password */}
                                <div className={`relative lg:w-[60%] ${shake ? 'animate-shake' : ''}`}>
                                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                        <Lock className="h-4 w-4 text-[#ED004F]" />
                                    </div>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-3 h-10 py-3 Poppins rounded-md bg-[#F1BBBBBA] placeholder-[#ED004F] focus:outline-none focus:ring-2 focus:ring-pink-500"
                                        required
                                    />
                                </div>

                                {/* Error */}
                                {error && (
                                    <p className="text-red-600 text-sm">{error}</p>
                                )}

                                {/* Submit + Google */}
                                <div className={`lg:w-[60%] flex flex-col justify-center items-center ${shake ? 'animate-shake' : ''}`}>
                                    <button
                                        type="submit"
                                        disabled={!formData.acceptTerms}
                                        className={`w-full md:w-[209px] flex justify-center items-center h-10 Poppins font-semibold text-sm py-2 rounded-md transition-colors ${formData.acceptTerms
                                            ? "bg-[#ED004FB0] hover:bg-pink-600 text-white cursor-pointer"
                                            : "bg-[#ed004f5e] text-white cursor-not-allowed"
                                            }`}
                                    >
                                        Submit
                                    </button>
                                    <div className={`flex py-3 w-full justify-center ${!formData.acceptTerms ? 'pointer-events-none opacity-50' : ''}`}>
                                        <GoogleLoginBtn />
                                    </div>
                                </div>
                            </form>

                            {/* Login Link */}
                            <div className="mt-4 text-start pl-4 text-[#ED004F] text-sm Poppins">
                                Already have an account?{" "}
                                <Link to='/Login-Form' className="font-bold text-sm text-[#ED004F] hover:underline Poppins">Login here</Link>
                            </div>

                            {/* Terms */}
                            <div className="flex items-start mt-2">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    name="acceptTerms"
                                    checked={formData.acceptTerms}
                                    onChange={handleChange}
                                    className="mt-1 h-4 w-4 accent-[#ED004F] border-2 border-[#ED004F] focus:ring-[#ED004F] rounded"
                                />

                                <label htmlFor="terms" className="ml-2 text-sm text-[#ED004F] Poppins">
                                    By creating an account you accept our{" "}
                                    <a href="/terms" className=" text-[#ED004F] hover:underline Poppins-bold">Terms and Conditions</a> and{" "}
                                    <a href="/privacy" className=" text-[#ED004F] hover:underline Poppins-bold">Privacy Policy</a>.
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <br /><br />
            </div>
        </>
    );
}
