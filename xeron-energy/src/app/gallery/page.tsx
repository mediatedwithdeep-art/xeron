import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Cta from "@/components/sections/Cta";
import Button from "@/components/ui/Button";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { projects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A visual gallery of Xeron Energy solar installations — rooftop arrays, carports and megawatt industrial plants delivered across Gujarat.",
};

// Build a masonry-style set from project data
const tiles = [
  ...projects,
  ...projects.slice(0, 3),
].map((p, i) => ({ ...p, tall: i % 5 === 0 || i % 5 === 3 }));

export default function GalleryPage() {
  return (
    <>
      <PageHero
        crumb="Gallery"
        eyebrow="See the work"
        title={<>Real installations, <span className="text-aurora">real craftsmanship.</span></>}
        description="Every array below was engineered, installed and commissioned by in-house Xeron crews to utility-grade standards."
      >
        <Button href="/contact">Get Yours Installed</Button>
      </PageHero>

      <section className="relative py-12 md:py-20">
        <div className="container-x">
          <Stagger className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
            {tiles.map((t, i) => (
              <StaggerItem key={i}>
                <div
                  className={`sheen group relative w-full break-inside-avoid overflow-hidden rounded-3xl bg-gradient-to-br ${t.gradient} ${
                    t.tall ? "aspect-[3/4]" : "aspect-square"
                  }`}
                >
                  <div className="absolute inset-0 grid-overlay opacity-40" />
                  <div className="absolute inset-0 bg-gradient-to-t from-void via-void/30 to-transparent" />
                  <div className="absolute right-5 top-5 grid grid-cols-4 gap-1 opacity-60 transition-transform duration-500 group-hover:scale-110">
                    {Array.from({ length: 16 }).map((_, j) => (
                      <span key={j} className="h-4 w-4 rounded-[3px] border border-white/20 bg-white/5" />
                    ))}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <span className="inline-flex rounded-full glass px-3 py-1 text-xs font-medium text-solar">
                      {t.category}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold text-frost">{t.title}</h3>
                    <p className="text-sm text-mist">{t.location} · {t.capacity}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <Cta />
    </>
  );
}
