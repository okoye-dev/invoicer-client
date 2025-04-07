import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

interface Item {
  name: string;
  price: string;
  quantity: string;
}

interface InvoiceConfig {
  companyName: string;
  companyAddress: string;
  companyPhone: string;
  customerName: string;
  customerAddress: string;
  invoiceNumber: string;
  invoiceDate: string;
  dueDate: string;
  discount: string;
  vat: string;
  items: Item[];
  thankYouMessage?: string;
}

interface InvoiceGeneratorProps {
  config?: InvoiceConfig;
}

const InvoiceGenerator = ({ config }: InvoiceGeneratorProps) => {
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

  const generatePDF = () => {
    if (!config) {
      alert("No invoice configuration provided!");
      return;
    }

    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.setTextColor(0, 102, 204);
    doc.text("INVOICE", 160, 20);
    doc.setTextColor(0, 0, 0);

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(config.companyName, 20, 30);
    if (config.companyAddress) doc.text(config.companyAddress, 20, 40);
    if (config.companyPhone) doc.text(config.companyPhone, 20, 50);

    doc.setFont("helvetica", "bold");
    doc.text("Balance Due", 160, 35);
    doc.setTextColor(255, 0, 0);
    doc.text(formatCurrency(calculateTotal()), 160, 45);
    doc.setTextColor(0, 0, 0);

    doc.line(20, 65, 190, 65);

    doc.setFont("helvetica", "bold");
    doc.text("BILLED TO", 20, 75);
    doc.text("INVOICE DATE", 100, 75);
    doc.text("DUE DATE", 160, 75);

    doc.setFont("helvetica", "normal");
    doc.text(config.customerName, 20, 85);
    if (config.customerAddress) doc.text(config.customerAddress, 20, 95);
    doc.text(config.invoiceDate, 100, 85);
    doc.text(config.dueDate, 160, 85);

    const tableColumn = [
      "#",
      "Item(s) and Description",
      "Qty",
      "Rate",
      "Amount",
    ];
    const tableRows = config.items.map((item, index) => [
      (index + 1).toString(),
      item.name,
      item.quantity,
      formatCurrency(parseFloat(item.price || "0")),
      formatCurrency(
        parseFloat(item.price || "0") * parseInt(item.quantity || "1")
      ),
    ]);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 105,
      theme: "grid",
      styles: { fontSize: 10, cellPadding: 5 },
      headStyles: { fillColor: [200, 200, 200], textColor: [0, 0, 0] },
    });

    let yPosition = (doc as any).lastAutoTable.finalY + 10;

    const subtotal = calculateSubtotal();
    const discountAmount =
      (subtotal * parseFloat(config.discount || "0")) / 100;
    const vatAmount =
      ((subtotal - discountAmount) * parseFloat(config.vat || "0")) / 100;
    const total = calculateTotal();

    const rowSpacing = 8;
    const labelX = 120;
    const amountX = 200;

    doc.text("Sub-total:", labelX, yPosition);
    doc.text(formatCurrency(subtotal), amountX, yPosition, { align: "right" });

    yPosition += rowSpacing;
    doc.text(`Discount (${config.discount || "0"}%):`, labelX, yPosition);
    doc.text(`-${formatCurrency(discountAmount)}`, amountX, yPosition, {
      align: "right",
    });

    yPosition += rowSpacing;
    doc.text(`VAT (${config.vat || "0"}%):`, labelX, yPosition);
    doc.text(formatCurrency(vatAmount), amountX, yPosition, { align: "right" });

    yPosition += rowSpacing + 5;
    doc.setFont("helvetica", "bold");
    doc.setFillColor(200, 200, 200);
    doc.rect(labelX, yPosition - 5, 95, 10, "F");
    doc.text("Total [NGN]:", labelX, yPosition);
    doc.text(formatCurrency(total), amountX, yPosition, { align: "right" });
    doc.setTextColor(255, 0, 0);

    yPosition += rowSpacing + 5;
    doc.setFont("helvetica", "normal");
    doc.text("Balance Due:", labelX, yPosition);
    doc.text(formatCurrency(total), amountX, yPosition, { align: "right" });
    doc.setTextColor(0, 0, 0);

    doc.setFontSize(10);
    doc.text(
      config.thankYouMessage ||
        `Thank you for choosing ${config.companyName || "us"}`,
      20,
      doc.internal.pageSize.height - 30
    );
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 102, 204);
    doc.text("Powered by e/emie", 20, doc.internal.pageSize.height - 20);

    doc.save(`Invoice_${config.customerName}.pdf`);
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h2 className="text-xl mb-4 font-bold">Invoice Generator</h2>
      <button
        onClick={generatePDF}
        className="p-2 bg-green-500 text-white rounded w-full"
        disabled={!config}
      >
        Download Invoice
      </button>
    </div>
  );
};

export default InvoiceGenerator;
