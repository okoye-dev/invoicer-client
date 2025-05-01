import { Button } from "@/shared/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useNavbar } from "../hooks/navhooks";
import { featureLinks } from "../constants/navbar";

const Navbar = () => {
  const {
    isMenuOpen,
    setIsMenuOpen,
    toggleMenu,
  } = useNavbar();

  const location = useLocation();
  const currentPath = location.pathname;

  const isHomeActive = currentPath === "/";
  const isProgramsActive = currentPath === "/programs";
  const isBlogsActive = currentPath === "/blogs";
  const isPricingActive = currentPath === "/pricing";

  return (
    <nav className="absolute top-6 left-0 right-0 mx-20 bg-[#03192F] rounded-2xl py-4 z-50 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl text-white font-extrabold gradient-text">
                Invoicer-Client
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link
                to="/"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isHomeActive
                    ? "text-indigo-400 font-semibold border-b-2 border-indigo-500"
                    : "text-white"
                }`}
              >
                Home
              </Link>

              <div className="relative group">
                <div className="px-3 py-2 text-sm font-medium text-white flex items-center gap-1 cursor-pointer">
                  Features <ChevronDown size={16} />
                </div>

                <div className="absolute top-10 left-0 w-64 bg-white rounded-lg shadow-lg z-50 p-2 flex flex-col gap-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {featureLinks.map(({ path, label, icon: Icon }, index) => (
                    <Link
                      key={index}
                      to={path}
                      className="flex items-center gap-3 px-4 py-2 text-sm text-gray-800 rounded-md hover:bg-gray-100 hover:text-indigo-600 transition-colors"
                    >
                      <Icon size={24} />
                      {label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/programs"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isProgramsActive
                    ? "text-indigo-400 font-semibold border-b-2 border-indigo-500"
                    : "text-white"
                }`}
              >
                Programs
              </Link>

              <Link
                to="/blogs"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isBlogsActive
                    ? "text-indigo-400 font-semibold border-b-2 border-indigo-500"
                    : "text-white"
                }`}
              >
                Blogs
              </Link>

              <Link
                to="/pricing"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isPricingActive
                    ? "text-indigo-400 font-semibold border-b-2 border-indigo-500"
                    : "text-white"
                }`}
              >
                Pricing
              </Link>
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden neo-blur border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              onClick={toggleMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isHomeActive ? "text-indigo-400 font-semibold" : "text-white"
              }`}
            >
              Home
            </Link>

            <a
              href="#features"
              onClick={(e) => {
                e.preventDefault();
                const section = document.querySelector("#features");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
                toggleMenu();
              }}
              className="block px-3 py-2 rounded-md text-base font-medium text-white"
            >
              Features
            </a>

            <Link
              to="/programs"
              onClick={toggleMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isProgramsActive ? "text-indigo-400 font-semibold" : "text-white"
              }`}
            >
              Programs
            </Link>

            <Link
              to="/blogs"
              onClick={toggleMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isBlogsActive ? "text-indigo-400 font-semibold" : "text-white"
              }`}
            >
              Blogs
            </Link>

            <Link
              to="/pricing"
              onClick={toggleMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isPricingActive ? "text-indigo-400 font-semibold" : "text-white"
              }`}
            >
              Pricing
            </Link>
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
