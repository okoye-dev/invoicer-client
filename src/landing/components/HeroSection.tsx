import { Button } from "@/shared/components/ui/button";
import { TrendingUp, File, PiggyBank, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import hero from "@/assets/dashboard.jpg";

const HeroSection = () => {
  return (
    <div className="relative sm:pt-24 sm:pb-20 md:pt-32 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mt-[100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-extrabold text-dark-text text-4xl md:text-5xl">
            Built To Take Your Business From Surviving To{" "}
            <span className="text-primary">Booming</span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-dark-muted opacity-90">
            Easily manage your bookkeeping, send invoices quickly, and seamlessly connect with customers.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/ReceiptForm">
              <Button
                variant="outline"
                className="bg-[#03192F] text-white px-13 py-5 text-sm font-medium hover:scale-105 rounded-2xl cursor-pointer"
              >
                Create an Invoice
              </Button>
            </Link>
          </div>

          <div className="mt-12">
            <div className="relative mx-auto max-w-5xl overflow-hidden rounded-xl">
              <img
                src={hero}
                alt="Learning platform dashboard"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>

          <div className="mt-20">
            <div className="flex justify-center mb-6">
              <Globe size={48} />
            </div>
            <p className="text-bold text-3xl">
              What if you could transform your business from a small <br /> brand to a global brand.
            </p>
            <p className="mt-10 font-bold">that would mean</p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: PiggyBank,
                title: "Increased Revenue",
              },
              {
                icon: TrendingUp,
                title: "Greater Impacts",
              },
              {
                icon: File,
                title: "More Job Opportunities",
              },
            ].map((feature, index) => (
              <div key={index} className="glass-card p-6 rounded-xl transition-all">
                <div className="bg-[#03192F] text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto pulse-glow">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 text-dark-text">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-dark-muted opacity-90 leading-relaxed"></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
