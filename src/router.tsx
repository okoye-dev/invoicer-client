import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import SignUp from "@/auth/components/SignUp";
import SignIn from "@/auth/components/SignIn";
import { LandingPage }  from "@/index"; 
import { InvoiceForm } from "./invoice-gen/components/InvoiceForm";
import Pricing from "./pricing/components/Pricing";
import InvoiceList from "./invoice-gen/components/InvoiceList";


export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
      <Routes>
        <Route path="/" element={<SignUp />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/dashboard" element={<LandingPage />}/>
        <Route path="/receiptForm" element={<InvoiceForm />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/signin" element={<SignIn />}/>
        <Route path="*" element={<div>404 - Page not found</div>} />
        <Route path="/invoiceList" element={<InvoiceList />} />
      </Routes>
      </Layout>
    </BrowserRouter>
  );
};
