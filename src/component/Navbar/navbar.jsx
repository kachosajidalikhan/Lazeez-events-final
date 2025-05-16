import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ConciergeBell, Search, Menu, X } from "lucide-react";
import { FaUserCircle } from "react-icons/fa";
import files from "../../constants/index";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="w-full fixed z-2000 py-4 px-6 bg-[#FCE7EF] flex items-center justify-between">
      {/* Logo */}
      <div className="flex lg:block items-center gap-2">
        <a href="/" className="flex items-center">
          <img
            src={files.logo}
            alt="Lazeez Events Logo"
            className="hidden lg:block w-[283px] h-[58px]"
          />
          <img
            src={files.logo2}
            alt="Lazeez Events Logo"
            className="block lg:hidden w-[40px]"
          />
        </a>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex Poppins items-center space-x-8">
        <a href="/" className="text-[#E91E63] font-medium hover:text-[#C2185B]">
          Home
        </a>
        <a
          href="/Lazeez-Packages"
          className="text-[#E91E63] font-medium hover:text-[#C2185B]"
        >
          Lazeez Packages
        </a>
        <a
          href="/vendor-page"
          className="text-[#E91E63] font-medium hover:text-[#C2185B]"
        >
          Become a Vendor
        </a>
        <a href="/about" className="text-[#E91E63] font-medium hover:text-[#C2185B]">
          About Us
        </a>
      </div>

      {/* Right side: Search + User */}
      <div className="hidden lg:flex items-center gap-4 bg-white rounded-full px-2">
        <div className="relative flex items-center">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#CC054D] h-4 w-4" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 focus:outline-none w-[200px]"
          />
          <div className="bg-[#948C8C] w-[2px] h-6 mx-2"></div>

          {/* Notification */}
          <button className="relative mr-2">
            <ConciergeBell className="h-6 w-6 text-[#E91E63]" fill="#ED004F" />
            <span className="absolute -top-1 -right-1 bg-[#E91E63] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              2
            </span>
          </button>

          {/* User Dropdown */}
          {isLoggedIn && (
            <div className="relative">
              <button onClick={() => setDropdownOpen(!dropdownOpen)}>
                <FaUserCircle className="text-[#E91E63] text-2xl" />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 top-10 bg-white shadow-md rounded w-32 z-50">
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="block md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X className="text-[#ED004F]" /> : <Menu className="text-[#ED004F]" />}
      </button>

      {/* Mobile Navigation Menu */}
      <div
          className={`absolute top-16 left-0 w-full bg-[#FCE7EF] md:hidden flex flex-col items-center py-4 space-y-4 transform transition-all duration-500 ease-in-out z-50 ${isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
        >
          <a
            href="/"
            className="text-[#E91E63] font-medium hover:text-[#C2185B]"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="/Lazeez-Packages"
            className="text-[#E91E63] font-medium hover:text-[#C2185B]"
            onClick={() => setIsMenuOpen(false)}
          >
            Lazeez Packages
          </a>
          <a
            href="/vendor-page"
            className="text-[#E91E63] font-medium hover:text-[#C2185B]"
            onClick={() => setIsMenuOpen(false)}
          >
            Become a Vendor
          </a>
          <a
            href="/about"
            className="text-[#E91E63] font-medium hover:text-[#C2185B]"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </a>
        </div>
    </nav>
  );
}
