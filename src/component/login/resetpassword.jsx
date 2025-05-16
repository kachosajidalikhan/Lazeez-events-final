import { useState } from "react";
import { Lock, ShieldCheck } from "lucide-react";
import files from "../../constants/index";
import axiosInstance from '../../axios';
import axios from "axios";
import { Loader2 } from "lucide-react"; 
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import { useLocation } from "react-router-dom";  // Import useLocation

export default function ResetPassword() {
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();  // Initialize navigate
     const location = useLocation();
      const email = location.state?.email;

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic password match validation
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            // Send the reset password request with the new password
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/reset-password`, { email, password });

            if (response.data.success) {
                console.log("Password reset successfully");

                // Navigate to the login page after a successful reset
                navigate('/Login-Form');  // Redirect to login page
            } else {
                console.error("Error resetting password");
            }
        } catch (error) {
            console.error("There was an error resetting the password:", error);
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-pink-600 to-pink-500 p-4 relative">
            {/* Decorative bubbles */}
            <img src={files.Ellipse18} className="hidden md:block absolute -left-1 lg:left-1/6 lg:top-1/4 h-34 w-34 lg:h-[167px] lg:w-[167px] z-10"/>
            <img src={files.Ellipse17} className="hidden md:block absolute bottom-10 right-2 lg:bottom-1/5 lg:right-1/6 h-45 w-45 lg:h-[219px] lg:w-[219px] z-10"/>
            <img src={files.Ellipse19} className="hidden md:block absolute bottom-30 left-40 lg:bottom-1/3 lg:left-1/3 h-[49px] w-[49px] z-10"/>
            <img src={files.Ellipse20} className="hidden md:block absolute right-30 top-24 lg:right-1/3 lg:top-1/5 h-[49px] w-[49px] z-10"/>

            {/* Main card */}
            <div className="relative w-full max-w-3xl rounded-[75px] bg-white/90 p-8 py-10 shadow-lg backdrop-blur-sm">
                <div className="text-center">
                    <h1 className="mb-2 text-3xl PoppinsBold font-bold text-[#CC054D]">Password Reset!</h1>
                    <p className="mb-8 text-[#ED004F] Poppins">
                        Enter your new password and confirm it.
                    </p>

                    <form onSubmit={handleSubmit} className="mx-auto max-w-sm space-y-6 flex flex-col items-center">
                        {/* Password Input */}
                        <div className="relative w-[80%]">
                            <div className="absolute inset-y-0 left-3 flex items-center">
                                <Lock className="h-5 w-5 text-[#ED004F]" />
                            </div>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full rounded-md bg-[#F2C4C7] py-3 pl-10 pr-3 text-pink-800 placeholder-[#ED004F] focus:outline-none focus:ring-2 focus:ring-pink-500"
                                placeholder="New Password"
                                required
                            />
                        </div>

                        {/* Confirm Password Input */}
                        <div className="relative w-[80%]">
                            <div className="absolute inset-y-0 left-3 flex items-center">
                                <ShieldCheck className="h-5 w-5 text-[#ED004F]" />
                            </div>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full rounded-md bg-[#F2C4C7] py-3 pl-10 pr-3 text-pink-800 placeholder-[#ED004F] focus:outline-none focus:ring-2 focus:ring-pink-500"
                                placeholder="Confirm Password"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-1/2 flex justify-center items-center gap-2 rounded-[12px] Poppins-bold bg-[#ED004FB0] py-3 font-medium text-white transition hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 ${loading ? "opacity-60 cursor-not-allowed" : ""
                                }`}
                        >
                            {loading && <Loader2 className="h-5 w-5 animate-spin" />}
                            {loading ? "Sending..." : "Reset Password"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
