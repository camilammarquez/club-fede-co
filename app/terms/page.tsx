import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service">
      <p>By ordering from Club Fede Co., you agree to provide accurate personalization details, including your pet&apos;s name spelling, at checkout.</p>
      <p>Because each collar is custom-made, we&apos;re unable to accept returns on personalized items unless there&apos;s a defect or sizing error on our end.</p>
    </LegalPage>
  );
}
