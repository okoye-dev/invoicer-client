import { Button } from "@/shared/components/ui/button";
import { TrendingUp, File, PiggyBank, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import hero from "@/assets/dashboard.jpg";

const HeroSection = () => {
  return (
    <div className="relative mt-[200px] sm:pt-24 sm:pb-20 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-mesh-gradient opacity-70"></div>
        <div className="absolute -top-[40%] -left-[10%] w-[50%] h-[80%] rounded-full bg-blue-900/20 blur-3xl"></div>
        <div className="absolute -bottom-[30%] -right-[10%] w-[60%] h-[70%] rounded-full bg-indigo-900/20 blur-3xl"></div>
        <div className="absolute top-20 left-[20%] w-24 h-24 bg-gradient-to-r from-blue-500 rounded-full filter blur-3xl opacity-20 "></div>
        <div className="absolute bottom-20 right-[30%] w-32 h-32 bg-gradient-to-r from-indigo-500 via-blue-400 to-blue-500 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="tracking- leading-relaxed font-extrabold text-dark-text text-4xl md:text-5xl">
            Built To Take Your Business From Surviving To{" "}
            <span className="gradient-text">Booming</span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-dark-muted opacity-90">
            Easily manage your bookkeeping, send invoices quickly, and seamlessly connect with customers.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/ReceiptForm">
              <Button
                variant="outline"
                className="btn-outline bg-[#03192F] text-white px-13 py-5 text-sm font-medium hover:scale-105 rounded-2xl cursor-pointer"
              >
                Create an Invoice
              </Button>
            </Link>
          </div>

          <div className="mt-12">
            <div className="relative mx-auto max-w-5xl overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-indigo-900/20 to-blue-900/20 backdrop-blur-sm z-10 rounded-xl"></div>
              <div className="absolute -inset-0.5 bg-conic-gradient rounded-xl blur-sm z-0 animate-pulse-glow"></div>
              <img
                src={hero}
                alt="Learning platform dashboard"
                className="w-full rounded-xl shadow-lg relative z-10"
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
                <div className="bg-gradient-to-r from-blue-600/70 to-indigo-600/20 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto pulse-glow">
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
