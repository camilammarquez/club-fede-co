import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "Shipping" };

export default function ShippingPage() {
  return (
    <LegalPage title="Shipping">
      <p>Every collar is handmade to order in Miami. Please allow 3-5 business days to craft your collar before it ships.</p>
      <p>Domestic orders arrive within 2-4 business days after shipping. You&apos;ll receive a tracking link by email as soon as your order is on its way.</p>
    </LegalPage>
  );
}
