import { useEffect } from "react";

export const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div>Create quick invoices with AI</div>;
};
