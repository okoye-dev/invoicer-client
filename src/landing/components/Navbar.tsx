import { useState } from "react";
import { Button } from "@/shared/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="absolute top-0 left-0 right-0 mt-10 mx-20 bg-[#03192F] rounded-2xl py-4 z-50">
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
              <a
                href="#"
                onClick={scrollToTop}
                className="px-3 py-2 text-sm font-medium text-white transition-colors"
              >
                Home
              </a>
              <a
                href="#features"
                className="px-3 py-2 text-sm font-medium text-white transition-colors"
              >
                Features
              </a>
              <Link
                to="/pricing"
                className="px-3 py-2 text-sm font-medium text-white transition-colors"
              >
                Programs
              </Link>
              <Link
                to="/about"
                className="px-3 py-2 text-sm font-medium text-white transition-colors"
              >
                Blogs
              </Link>
              <Link
                to="/pricing"
                className="px-3 py-2 text-sm font-medium text-white transition-colors"
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

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden neo-blur border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              onClick={(e) => {
                scrollToTop(e);
                toggleMenu();
              }}
              className="block px-3 py-2 rounded-md text-base font-medium text-white"
            >
              Home
            </a>
            <a
              href="#features"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-white"
            >
              Features
            </a>
            <Link
              to="/pricing"
              onClick={toggleMenu}
              className="block px-3 py-2 rounded-md text-base font-medium text-white"
            >
              Programs
            </Link>
            <Link
              to="/about"
              onClick={toggleMenu}
              className="block px-3 py-2 rounded-md text-base font-medium text-white"
            >
              Blogs
            </Link>
            <Link
              to="/pricing"
              onClick={toggleMenu}
              className="block px-3 py-2 rounded-md text-base font-medium text-white"
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
