import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "@/landing";
import { ChatPage } from "@/chat";
import Layout from "./layout";
import { ReceiptForm } from "@/invoice-gen/components/ReceiptForm";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<LandingPage />} />

          {/* Chat routes */}
          <Route path="/chat" element={<ChatPage />} />

          {/* ✅ ReceiptForm route */}
          <Route path="/ReceiptForm" element={<ReceiptForm />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
