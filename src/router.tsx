import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import SignUp from "@/auth/components/SignUp";
import SignIn from "@/auth/components/SignIn"; 

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/signup"
          element={
            <Layout>
              <SignUp />
            </Layout>
          }
        />

        <Route
          path="/signin"
          element={
            <Layout>
              <SignIn />
            </Layout>
          }
        />

        <Route path="*" element={<div>404 - Page not found</div>} />
      </Routes>
    </BrowserRouter>
  );
};
