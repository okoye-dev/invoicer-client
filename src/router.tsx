import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import SignUp from "@/auth/components/SignUp";
import SignIn from "@/auth/components/SignIn";
import { LandingPage }  from "@/index"; 
import { ReceiptForm } from "./invoice-gen/components/ReceiptForm";


export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
      <Routes>
        <Route path="/" element={<SignUp />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/dashboard" element={<LandingPage />}/>
        <Route path="/ReceiptForm" element={<ReceiptForm />} />
        <Route path="/signin" element={<SignIn />}/>
        <Route path="*" element={<div>404 - Page not found</div>} />
      </Routes>
      </Layout>
    </BrowserRouter>
  );
};
