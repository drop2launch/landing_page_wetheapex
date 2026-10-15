import { LegalPage } from "@/components/LegalPage";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Terms of Service",
  description: "The terms that apply when you use the wetheapex website.",
  path: "/terms",
});

export default function Page() {
  return <LegalPage slug="terms"></LegalPage>;
}
