import { CaseStudyCard } from "@/components/CaseStudyCard";
import { Cta } from "@/components/Cta";
import { PageHero } from "@/components/PageHero";
import { getCaseStudies } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "AI Automation Case Studies",
  description:
    "Worked examples of automation projects: the problem, the approach, what was built and how results are measured.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  const studies = getCaseStudies();
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="How a project runs, from problem to measured result."
        intro="Three examples of how we take a problem from the first call to a measured result."
      />
      <section className="section">
        <div className="wrap">
          <ul className="tiles md:grid-cols-2 lg:grid-cols-3">
            {studies.map((s) => (
              <li key={s.slug}>
                <CaseStudyCard study={s} />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Cta />
    </>
  );
}
