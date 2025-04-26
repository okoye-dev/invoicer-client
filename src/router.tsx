import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout";
import { ReceiptForm } from "@/invoice-gen/components/ReceiptForm";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Landing Page */}

          {/* Chat routes */}

          {/* ✅ ReceiptForm route */}
          <Route path="/ReceiptForm" element={<ReceiptForm />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
