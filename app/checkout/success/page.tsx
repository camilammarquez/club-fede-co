"use client";

import { useEffect } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import Button from "@/components/ui/Button";

export default function CheckoutSuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="container-fede flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <CheckCircle2 size={56} className="text-bead-mint" />
      <h1 className="mt-6 font-display text-3xl font-bold text-navy md:text-4xl">Thank you for your order!</h1>
      <p className="mt-3 max-w-md font-body text-navy-dark/70">
        We&apos;re already getting started on your collar. You&apos;ll receive an email confirmation shortly with your order details.
      </p>
      <Button href="/" variant="primary" className="mt-8">
        Back to home
      </Button>
    </div>
  );
}
