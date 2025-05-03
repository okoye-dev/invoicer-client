import { Button } from "@/shared/components/ui/button";
import { Menu, X, ChevronDown, FileText, Users, BarChart2 } from "lucide-react";
import { useNavbar } from "../hooks/navhooks";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Navbar = () => {
  const { isMenuOpen, toggleMenu, setIsMenuOpen } = useNavbar();

  // Optional: Close menu on route change or scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setIsMenuOpen]);

  return (
    <nav className="absolute top-6 left-0 right-0 mx-4 md:mx-10 lg:mx-20 bg-[#03192F] rounded-2xl py-4 z-50 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span className="text-2xl text-white font-extrabold gradient-text">
              Invoicer-Client
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/dashboard" className="no-underline">
              <div className="text-white hover:text-indigo-400 text-sm font-medium cursor-pointer">
                Home
              </div>
            </Link>

            <div className="relative group">
              <div className="text-white hover:text-indigo-400 text-sm font-medium flex items-center gap-1 cursor-pointer">
                Features <ChevronDown size={16} />
              </div>
              <div className="absolute top-10 left-0 w-64 bg-white rounded-lg shadow-lg z-50 p-2 flex flex-col gap-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/ReceiptForm" className="no-underline">
                  <div className="flex items-center gap-3 px-4 py-2 text-sm text-gray-800 rounded-md hover:bg-gray-100 hover:text-indigo-600 cursor-pointer">
                    <FileText size={16} /> Smart Invoicing
                  </div>
                </Link>
                <div className="flex items-center gap-3 px-4 py-2 text-sm text-gray-800 rounded-md hover:bg-gray-100 hover:text-indigo-600 cursor-pointer">
                  <Users size={16} /> Client Management
                </div>
                <div className="flex items-center gap-3 px-4 py-2 text-sm text-gray-800 rounded-md hover:bg-gray-100 hover:text-indigo-600 cursor-pointer">
                  <BarChart2 size={16} /> Financial Reporting
                </div>
              </div>
            </div>

            <div className="text-white hover:text-indigo-400 text-sm font-medium cursor-pointer">
              Programs
            </div>
            <div className="text-white hover:text-indigo-400 text-sm font-medium cursor-pointer">
              Blogs
            </div>
            <Link to="/pricing" className="no-underline">
              <div className="text-white hover:text-indigo-400 text-sm font-medium cursor-pointer">
                Pricing
              </div>
            </Link>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex space-x-3">
            <Link to="/signin">
              <Button variant="outline" className="font-medium border-white/20 hover:bg-dark-accent text-slate-100">
                Sign in
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="font-medium bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:opacity-90">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Burger Icon */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md focus:outline-none text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#03192F] mt-2 px-4 py-4 rounded-b-2xl shadow-lg border-t border-white/10 space-y-4 transition-all duration-300">
          <Link to="/dashboard" className="block text-white hover:text-indigo-400 text-base font-medium">
            Home
          </Link>
          <div className="space-y-2">
            <div className="text-white font-medium">Features</div>
            <Link to="/ReceiptForm" className="block text-sm text-white hover:text-indigo-400 pl-3">
              Smart Invoicing
            </Link>
            <div className="block text-sm text-white hover:text-indigo-400 pl-3">
              Client Management
            </div>
            <div className="block text-sm text-white hover:text-indigo-400 pl-3">
              Financial Reporting
            </div>
          </div>
          <div className="block text-white hover:text-indigo-400 text-base font-medium">Programs</div>
          <div className="block text-white hover:text-indigo-400 text-base font-medium">Blogs</div>
          <Link to="/pricing" className="block text-white hover:text-indigo-400 text-base font-medium">
            Pricing
          </Link>

          {/* Mobile Auth Buttons */}
          <div className="pt-4 border-t border-white/10 space-y-3">
            <Link to="/signin">
              <Button variant="outline" className="w-full font-medium border-white/20 text-white">
                Sign in
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="w-full font-medium bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:opacity-90">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
