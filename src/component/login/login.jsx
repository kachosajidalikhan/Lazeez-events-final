import { useState } from "react";
import { Mail, Lock } from "lucide-react";
import files from "../../constants/index";
import { Link } from "react-router-dom";
import axiosInstance from '../../axios';

export default function LoginForm() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState(""); // For displaying error below input
    const [shake, setShake] = useState(false); // For triggering shake animation
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        setError(""); // Clear error while typing
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post('/api/auth/login', formData);
            localStorage.setItem('userToken', response.data.token);
            window.location.href = '/App-Download-Section';
        } catch (error) {
            setError(error.response?.data?.message || "Invalid email or password");

            // Trigger shake animation
            setShake(true);
            setTimeout(() => setShake(false), 500); // Remove after 500ms
        }
    };

    return (
        <div className="relative w-full mt-6 max-w-[1088px] mx-auto p-4 sm:p-6 md:p-8">
            <div className="bg-pink-100 rounded-[60px] sm:rounded-[80px] md:rounded-[120px] p-4 sm:p-6 md:p-8 shadow-lg">
                <div className="flex flex-col md:flex-row items-center justify-between mt-6">

                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 flex justify-center items-center">
                        <img src={files.UserIcon2} alt="User icon" className="w-[220px] lg:w-[334px] h-[220px] lg:h-[334px]" />
                    </div>

                    {/* Form Section */}
                    <div className="w-full lg:w-1/2">
                        <h1 className="text-2xl sm:text-3xl md:text-[40px] pl-4 text-center text-[#CC054D] font-bold mb-4 PoppinsBold">
                            Login Now
                        </h1>

                        <form onSubmit={handleSubmit} className="space-y-4 pl-4 flex flex-col items-center">
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
                                    className="w-full pl-10 pr-3 h-12 py-3 Poppins rounded-md bg-[#F1BBBBBA] placeholder-[#ED004F] focus:outline-none focus:ring-2 focus:ring-pink-500"
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
                                    className="w-full pl-10 pr-3 h-12 py-3 Poppins rounded-md bg-[#F1BBBBBA] placeholder-[#ED004F] focus:outline-none focus:ring-2 focus:ring-pink-500"
                                    required
                                />
                            </div>

                            {/* Error Message */}
                            {error && (
                                <p className="text-red-600 text-sm text-center -mt-2">{error}</p>
                            )}

                            {/* Forgot password */}
                            <div className="mt-4 pl-4 text-[#ED004F] text-sm Poppins text-center">
                                <Link to='/Forgot-pass'>Forgot your password?</Link>
                            </div>

                            {/* Submit */}
                            <div className="w-[60%] flex justify-center">
                                <button
                                    type="submit"
                                    className="w-full flex justify-center items-center sm:w-2/3 h-10 md:w-[60%] bg-[#ED004FB0] Poppins hover:bg-pink-600 text-white font-semibold text-sm py-2 rounded-md transition-colors"
                                >
                                    Login
                                </button>
                            </div>
                        </form>

                        {/* Register */}
                        <div className="text-center text-[#ED004F] text-sm Poppins">
                            Don’t have an account?
                            <a href="/Signup-Form" className="font-bold text-sm text-[#ED004F] hover:underline Poppins"> Register</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
