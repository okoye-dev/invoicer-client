import { InvoiceConfig } from "../constants/invoice";

export const useInvoiceCalculations = (config?: InvoiceConfig) => {
  const calculateSubtotal = () => {
    if (!config || !config.items) return 0;
    return config.items.reduce(
      (sum, item) =>
        sum + parseFloat(item.price || "0") * parseInt(item.quantity || "1"),
      0
    );
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const discountAmount = config
      ? (subtotal * parseFloat(config.discount || "0")) / 100
      : 0;
    const vatAmount = config
      ? ((subtotal - discountAmount) * parseFloat(config.vat || "0")) / 100
      : 0;
    return subtotal - discountAmount + vatAmount;
  };

  const formatCurrency = (amount: number) => {
    return `NGN ${amount.toLocaleString("en-NG", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  return { calculateSubtotal, calculateTotal, formatCurrency };
};