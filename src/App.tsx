import HeroSection from "./components/HeroSection";
import InvoiceGenerator from "./components/InvoiceGenerator";

const shoePurchaseConfig = {
  companyName: "covey's store",
  companyAddress: "123 Shoe Street, Lagos",
  companyPhone: "07031052930",
  customerName: "divine kin",
  customerAddress: "456 Customer Road, Abuja",
  invoiceNumber: "INV-001",
  invoiceDate: "2025-04-04",
  dueDate: "2025-04-11",
  discount: "10",
  vat: "7.5",
  items: [
    { name: "Leather Sneakers", price: "15000", quantity: "3" },
    { name: "Running Shoes", price: "12000", quantity: "3" },
    { name: "Casual Loafers", price: "18000", quantity: "3" },
  ],
  thankYouMessage: "Thank you for shopping with us!",
};

function App() {
  return (
    <>
      <HeroSection />
      <InvoiceGenerator config={shoePurchaseConfig} />
    </>
  );
}

export default App;
