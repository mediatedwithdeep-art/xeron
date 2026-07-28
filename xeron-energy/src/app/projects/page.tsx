import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import Cta from "@/components/sections/Cta";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Xeron Energy's portfolio of residential, commercial and industrial solar installations across Gujarat — real capacities, real annual savings.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        crumb="Projects"
        eyebrow="Portfolio"
        title={<>Installations that <span className="text-aurora">speak for themselves.</span></>}
        description="From 8 kW rooftops to 2.4 MW industrial plants — a selection of Xeron systems generating real savings across Gujarat."
      >
        <Button href="/contact">Start Your Project</Button>
      </PageHero>

      <section className="relative py-12 md:py-20">
        <div className="container-x">
          <ProjectsGrid />
        </div>
      </section>

      <Cta />
    </>
  );
}
