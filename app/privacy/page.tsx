import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>Club Fede Co. collects only the information needed to process your order and personalize your collar: your name, shipping address, and your pet&apos;s name.</p>
      <p>We never sell your information to third parties. Payment details are processed securely and are never stored on our servers.</p>
      <p>Questions about your data? Email us at hello@clubfedeco.com.</p>
    </LegalPage>
  );
}
