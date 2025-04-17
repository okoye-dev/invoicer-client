import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { receiptSchema, ReceiptFormData, InvoiceConfig } from "../constants/invoice";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Button } from "@/shared/components/ui/button";
import { Textarea } from "@/shared/components/ui/textarea";
import { InvoiceGenerator } from "./invoiceGenerator";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/components/ui/card";

export const ReceiptForm = () => {
  const [invoiceConfig, setInvoiceConfig] = useState<InvoiceConfig | null>(null);

  const form = useForm<ReceiptFormData>({
    resolver: zodResolver(receiptSchema),
    defaultValues: {
      companyName: "",
      companyAddress: "",
      companyPhone: "",
      customerName: "",
      customerAddress: "",
      invoiceNumber: "",
      invoiceDate: "",
      discount: "",
      vat: "",
      thankYouMessage: "",
      items: [{ name: "", price: "", quantity: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "items",
  });

  const onSubmit = (data: ReceiptFormData) => {
    const config: InvoiceConfig = {
      companyName: data.companyName,
      companyAddress: data.companyAddress,
      companyPhone: data.companyPhone,
      customerName: data.customerName,
      customerAddress: data.customerAddress,
      invoiceNumber: data.invoiceNumber || "",
      invoiceDate: data.invoiceDate || "",
      discount: data.discount || "0",
      vat: data.vat || "0",
      thankYouMessage: data.thankYouMessage || "",
      items: data.items,
      dueDate: undefined,
      logoBase: undefined,
    };
    setInvoiceConfig(config);
  };

  return (
    <div className="max-w-3xl mt-[150px] mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Create Invoice</CardTitle>
          <CardDescription>Fill in the details below to generate a professional invoice.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Invoice Number</Label>
                <Input className="mt-3" {...form.register("invoiceNumber")} />
              </div>
              <div>
                <Label>Invoice Date</Label>
                <Input className="mt-3" type="date" {...form.register("invoiceDate")} />
              </div>
              <div>
                <Label>Discount (%)</Label>
                <Input className="mt-3" type="number" {...form.register("discount")} />
              </div>
              <div>
                <Label>VAT (%)</Label>
                <Input className="mt-3" type="number" {...form.register("vat")} />
              </div>
            </div>

            <div className="space-y-4">
              <Label className="text-lg">Items</Label>
              {fields.map((field, index) => (
                <div key={field.id} className="grid grid-cols-4 gap-2 items-end">
                  <div>
                    <Input  className="mt-3" 
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
                    <Input  className="mt-3"
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
                    <Input  className="mt-3"
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
              <Button className="bg-blue-300"
                type="button"
                onClick={() => append({ name: "", price: "", quantity: "" })}
              >
                Add Item
              </Button>
              {form.formState.errors.items && (
                <p className="text-red-500 text-sm">
                  {form.formState.errors.items.message}
                </p>
              )}
            </div>

            <div>
              <Label>Thank You Message</Label>
              <Textarea className="mt-3" {...form.register("thankYouMessage")} />
            </div>

            <Button className="bg-blue-300" type="submit">Generate Invoice</Button>
          </form>
        </CardContent>
        {invoiceConfig && (
          <CardFooter>
            <InvoiceGenerator config={invoiceConfig} />
          </CardFooter>
        )}
      </Card>
    </div>
  );
};