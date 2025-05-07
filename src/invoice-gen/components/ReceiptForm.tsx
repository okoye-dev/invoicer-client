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
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const { form, onSubmit, invoiceConfig } = useReceiptForm(logoPreview || undefined);
  const { fields, append, remove } = useReceiptFormFields(form.control);

  return (
    <>
      <Navbar />

      <div className="min-h-screen pt-[150px] px-4 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Create Receipt</h1>
        <p className="text-gray-600 mb-6">
          Fill in the details below to generate a professional invoice.
        </p>

        <div className="mb-6">
          <label htmlFor="logo" className="block text-sm font-medium text-gray-700 mb-2">
            Upload Company Logo
          </label>

          <div
            className="w-95 h-32 border border-dashed border-gray-400 rounded-md flex items-center justify-center text-center text-xs text-gray-500 cursor-pointer hover:bg-gray-50 transition"
            onClick={() => document.getElementById("logo")?.click()}
          >
            Click to upload
          </div>

          <input
            id="logo"
            name="logo"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  setLogoPreview(reader.result as string); // Set logo preview
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
                className="h-16 object-contain mt-1"
              />
            </div>
          )}
        </div>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex justify-end gap-8 flex-wrap">
            <div className="w-[300px] space-y-4">
              <h2 className="text-lg font-semibold">Company Info</h2>
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

            <div className="w-[300px] space-y-4">
              <h2 className="text-lg font-semibold">Customer Info</h2>
              <div>
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
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="max-w-xs">
              <Label>Invoice Number</Label>
              <Input className="mt-3" {...form.register("invoiceNumber")} />
            </div>
            <div className="max-w-xs">
              <Label>Invoice Date</Label>
              <Input
                className="mt-3"
                type="date"
                {...form.register("invoiceDate")}
              />
            </div>
            <div className="max-w-xs">
              <Label>Discount (%)</Label>
              <Input type="number" className="mt-3" {...form.register("discount")} />
            </div>
            <div className="max-w-xs">
              <Label>VAT (%)</Label>
              <Input type="number" className="mt-3" {...form.register("vat")} />
            </div>
          </div>

          <div className="space-y-4">
            <Label className="text-lg">Items</Label>
            {fields.map((field, index) => (
              <div key={field.id} className="grid grid-cols-4 gap-2 items-end">
                <div className="max-w-xs">
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
                <div className="max-w-[120px]">
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
                <div className="max-w-[120px]">
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

          <div className="max-w-[50px]">
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
