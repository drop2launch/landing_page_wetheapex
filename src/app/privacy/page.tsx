import { LegalPage } from "@/components/LegalPage";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Privacy Policy",
  description: "How wetheapex collects, uses and protects personal data, and your rights under UAE data protection law, the GDPR and other privacy laws.",
  path: "/privacy",
});

export default function Page() {
  return <LegalPage slug="privacy"></LegalPage>;
}
