import { Button } from "@/shared/components/ui/button";
import { Menu, X, ChevronDown, FileText, Users, BarChart2 } from "lucide-react";
import { useNavbar } from "../hooks/navhooks";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isMenuOpen, toggleMenu } = useNavbar();

  return (
    <nav className="absolute top-6 left-0 right-0 mx-20 bg-[#03192F] rounded-2xl py-4 z-50 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl text-white font-extrabold gradient-text">
                Invoicer-Client
              </span>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <div className="px-3 py-2 text-sm font-medium transition-colors hover:text-indigo-400 text-white cursor-pointer">
                Home
              </div>

              <div className="relative group">
                <div className="px-3 py-2 text-sm font-medium text-white hover:text-indigo-400 flex items-center gap-1 cursor-pointer transition-colors">
                  Features <ChevronDown size={16} />
                </div>

                <div className="absolute top-10 left-0 w-64 bg-white rounded-lg shadow-lg z-50 p-2 flex flex-col gap-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/ReceiptForm" className="no-underline">
  <div className="flex items-center gap-3 px-4 py-2 text-sm text-gray-800 rounded-md hover:bg-gray-100 hover:text-indigo-600 transition-colors cursor-pointer">
    <FileText size={16} /> Smart Invoicing
  </div>
</Link>
                  <div className="flex items-center gap-3 px-4 py-2 text-sm text-gray-800 rounded-md hover:bg-gray-100 hover:text-indigo-600 transition-colors cursor-pointer">
                    <Users size={16} /> Client Management
                  </div>
                  <div className="flex items-center gap-3 px-4 py-2 text-sm text-gray-800 rounded-md hover:bg-gray-100 hover:text-indigo-600 transition-colors cursor-pointer">
                    <BarChart2 size={16} /> Financial Reporting
                  </div>
                </div>
              </div>

              <div className="px-3 py-2 text-sm font-medium transition-colors hover:text-indigo-400 text-white cursor-pointer">
                Programs
              </div>

              <div className="px-3 py-2 text-sm font-medium transition-colors hover:text-indigo-400 text-white cursor-pointer">
                Blogs
              </div>

              <div className="px-3 py-2 text-sm font-medium transition-colors hover:text-indigo-400 text-white cursor-pointer">
                Pricing
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                className="font-medium border-white/20 hover:bg-dark-accent text-slate-100"
              >
                Sign in
              </Button>
              <Button className="font-medium bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:opacity-90">
                Get Started
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-inset"
              style={{ color: "var(--dark-text)" }}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden neo-blur border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-indigo-400 cursor-pointer">
              Home
            </div>
            <div className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-indigo-400 cursor-pointer">
              Features
            </div>
            <div className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-indigo-400 cursor-pointer">
              Programs
            </div>
            <div className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-indigo-400 cursor-pointer">
              Blogs
            </div>
            <div className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-indigo-400 cursor-pointer">
              Pricing
            </div>
          </div>

          <div className="pt-4 pb-3 border-t border-white/10">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0 w-full">
                <Button
                  variant="outline"
                  className="w-full font-medium mb-2 border-white/20"
                >
                  Sign in
                </Button>
                <Button className="w-full font-medium bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:opacity-90">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
