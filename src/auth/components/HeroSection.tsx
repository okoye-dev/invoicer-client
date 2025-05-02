import hero from '@/assets/dashboard.jpg';

const HeroSection = () => {
  return (
    <div className="mt-[100px] flex justify-center">
      <img src={hero} alt="Dashboard" className="w-full max-w-[600px]" />
    </div>
  );
};

export default HeroSection;
