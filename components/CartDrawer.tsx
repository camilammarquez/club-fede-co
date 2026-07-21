"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import Button from "@/components/ui/Button";

export default function CartDrawer() {
  const { items, removeItem, updateQuantity, subtotal, isCartOpen, closeCart } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-[60] bg-navy/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-cream shadow-card"
          >
            <div className="flex items-center justify-between border-b border-navy/10 p-6">
              <h2 className="font-display text-lg font-bold text-navy">Your cart</h2>
              <button onClick={closeCart} aria-label="Close cart" className="rounded-full p-2 text-navy hover:bg-navy/5">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <ShoppingBag size={40} className="text-navy/30" />
                  <p className="mt-4 font-display text-base font-semibold text-navy">Your cart is empty</p>
                  <p className="mt-1 font-body text-sm text-navy-dark/60">Start building a collar for your best friend.</p>
                  <Button href="/product/biscayne-blue" variant="primary" className="mt-6" onClick={closeCart}>
                    Shop Now
                  </Button>
                </div>
              ) : (
                <ul className="space-y-5">
                  {items.map((item) => (
                    <li key={item.id} className="flex gap-4 border-b border-navy/10 pb-5">
                      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl">
                        <Image src={item.image} alt={item.collectionName} fill sizes="80px" className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <p className="font-display text-sm font-semibold text-navy">{item.collectionName}</p>
                        <p className="mt-0.5 font-body text-xs text-navy-dark/60">
                          {item.size} · {item.colors.join(", ")}
                          {item.petName ? ` · "${item.petName}"` : ""}
                        </p>
                        <div className="mt-2 flex items-center justify-between">
                          <div className="flex items-center rounded-full border border-navy/15">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              aria-label="Decrease quantity"
                              className="p-1.5 text-navy hover:bg-navy/5 rounded-l-full"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="w-6 text-center font-body text-xs font-semibold text-navy">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              aria-label="Increase quantity"
                              className="p-1.5 text-navy hover:bg-navy/5 rounded-r-full"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="font-display text-sm font-semibold text-navy">
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>
                            <button
                              onClick={() => removeItem(item.id)}
                              aria-label="Remove item"
                              className="text-navy/40 hover:text-bead-coral transition-colors"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-navy/10 p-6">
                <div className="flex items-center justify-between font-display text-base font-semibold text-navy">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <p className="mt-1 font-body text-xs text-navy-dark/50">Shipping and taxes calculated at checkout.</p>
                <Button variant="primary" className="mt-4 w-full">
                  Checkout
                </Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
