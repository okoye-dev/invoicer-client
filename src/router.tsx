import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "@/landing";
import { ChatPage } from "@/chat";
import Layout from "./layout";
import Pricing from "./landing/pricing/Pricing";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/pricing" element={<Pricing />} />

          {/* Chat routes */}
          <Route path="/chat" element={<ChatPage />} />

          {/* User routes */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
