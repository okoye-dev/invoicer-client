import Navbar from "@/landing/components/Navbar";
import { Button } from "@/shared/components/ui";
import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { useReceiptFormFields } from "../constants/useFieldArray";
import { useReceiptForm } from "../hooks/useReceiptForm";
import { InvoiceGenerator } from "./InvoiceGenerator";

export const ReceiptForm = () => {
  const { form, onSubmit, invoiceConfig } = useReceiptForm();
  const { fields, append, remove } = useReceiptFormFields(form.control);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);

  return (
    <>
      <Navbar />

      <div className="min-h-screen pt-[120px] px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Create Invoice</h1>
        <p className="text-gray-600 mb-6">
          Fill in the details below to generate a professional invoice.
        </p>

        <div className="mb-6">
          <Label htmlFor="logo">Upload Company Logo</Label>
          <Input
            className="mt-3"
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  setLogoPreview(reader.result as string);
                };
                reader.readAsDataURL(file);
              }
            }}
          />
          {logoPreview && (
            <div className="mt-3">
              <p className="text-sm text-gray-500">Preview:</p>
              <img
                src={logoPreview}
                alt="Company Logo Preview"
                className="h-20 object-contain"
              />
            </div>
          )}
        </div>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Company Info */}
          <div className="grid grid-cols-1 gap-4">
            <div>
              <Label>Company Name</Label>
              <Input className="mt-3" {...form.register("companyName")} />
              {form.formState.errors.companyName && (
                <p className="text-red-500 text-sm">
                  {form.formState.errors.companyName.message}
                </p>
              )}
            </div>
            <div>
              <Label>Company Address</Label>
              <Textarea className="mt-3" {...form.register("companyAddress")} />
              {form.formState.errors.companyAddress && (
                <p className="text-red-500 text-sm">
                  {form.formState.errors.companyAddress.message}
                </p>
              )}
            </div>
            <div>
              <Label>Company Phone</Label>
              <Input className="mt-3" {...form.register("companyPhone")} />
              {form.formState.errors.companyPhone && (
                <p className="text-red-500 text-sm">
                  {form.formState.errors.companyPhone.message}
                </p>
              )}
            </div>
          </div>

          {/* Customer Info */}
          <div className="grid grid-cols-1 gap-4">
            <div>
              <Label>Customer Name</Label>
              <Input className="mt-3" {...form.register("customerName")} />
              {form.formState.errors.customerName && (
                <p className="text-red-500 text-sm">
                  {form.formState.errors.customerName.message}
                </p>
              )}
            </div>
            <div>
              <Label>Customer Address</Label>
              <Textarea className="mt-3" {...form.register("customerAddress")} />
              {form.formState.errors.customerAddress && (
                <p className="text-red-500 text-sm">
                  {form.formState.errors.customerAddress.message}
                </p>
              )}
            </div>
          </div>

          {/* Invoice Details */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Invoice Number</Label>
              <Input className="mt-3" {...form.register("invoiceNumber")} />
            </div>
            <div>
              <Label>Invoice Date</Label>
              <Input
                className="mt-3"
                type="date"
                {...form.register("invoiceDate")}
              />
            </div>
            <div>
              <Label>Discount (%)</Label>
              <Input type="number" className="mt-3" {...form.register("discount")} />
            </div>
            <div>
              <Label>VAT (%)</Label>
              <Input type="number" className="mt-3" {...form.register("vat")} />
            </div>
          </div>

          {/* Item List */}
          <div className="space-y-4">
            <Label className="text-lg">Items</Label>
            {fields.map((field, index) => (
              <div key={field.id} className="grid grid-cols-4 gap-2 items-end">
                <div>
                  <Input
                    className="mt-3"
                    placeholder="Item name"
                    {...form.register(`items.${index}.name`)}
                  />
                  {form.formState.errors.items?.[index]?.name && (
                    <p className="text-red-500 text-sm">
                      {form.formState.errors.items[index]?.name?.message}
                    </p>
                  )}
                </div>
                <div>
                  <Input
                    className="mt-3"
                    placeholder="Price"
                    type="number"
                    {...form.register(`items.${index}.price`)}
                  />
                  {form.formState.errors.items?.[index]?.price && (
                    <p className="text-red-500 text-sm">
                      {form.formState.errors.items[index]?.price?.message}
                    </p>
                  )}
                </div>
                <div>
                  <Input
                    className="mt-3"
                    placeholder="Quantity"
                    type="number"
                    {...form.register(`items.${index}.quantity`)}
                  />
                  {form.formState.errors.items?.[index]?.quantity && (
                    <p className="text-red-500 text-sm">
                      {form.formState.errors.items[index]?.quantity?.message}
                    </p>
                  )}
                </div>
                <Button
                  variant="destructive"
                  type="button"
                  onClick={() => remove(index)}
                  className="w-fit"
                >
                  Remove
                </Button>
              </div>
            ))}
            <Button
              className="bg-purple-400"
              type="button"
              onClick={() => append({ name: "", price: "", quantity: "" })}
            >
              Add Item
            </Button>
          </div>

          {/* Footer */}
          <div>
            <Label>Thank You Message</Label>
            <Textarea className="mt-3" {...form.register("thankYouMessage")} />
          </div>

          <Button className="bg-purple-400" type="submit">
            Generate Invoice
          </Button>
        </form>

        {invoiceConfig && (
          <div className="mt-10">
            <InvoiceGenerator config={invoiceConfig} />
          </div>
        )}
      </div>
    </>
  );
};
