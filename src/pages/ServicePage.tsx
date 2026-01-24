import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Hero } from "@/components/services/Hero";
import { Services } from "@/components/services/Services";
import { Approach } from "@/components/services/Approach";
import FAQ from "@/components/sections/FAQ";
import { CTA } from "@/components/services/CTA";
import NotFound from "./NotFound";
import { WhyItMatters } from "@/components/services/WhyItMatters";
import { ProcessTimeline } from "@/components/services/ProcessTimeline";
import { WhyChooseUs } from "@/components/services/WhyChooseUs";
import { Results } from "@/components/services/Results";
import { ServicesCTA } from "@/components/services/ServicesCTA";
import useSEO from "@/hooks/use-seo";
import ContactForm from "@/components/ContactForm";

const serviceFiles = import.meta.glob("@/jsons/services/*.json", { eager: true });
const ServicePage = () => {
  const { serviceId } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0)
    }
    try {
      const matchedKey = Object.keys(serviceFiles).find((key) => key.endsWith(`${serviceId}.json`));

      if (matchedKey && serviceFiles[matchedKey]) {
        setData(serviceFiles[matchedKey]);
        setError(null);
      } else {
        setError("Service not found");
      }
    } catch (err) {
      setError(err.message);
    }
  }, [serviceId]);

  // Generate SEO meta tags from service data
  const seoTitle = data?.hero?.title
    ? `${data?.hero?.title} | Supriya Growth`
    : "Digital Marketing Services | Supriya Growth";

  const seoDescription = data?.hero?.contents?.[0]?.substring(0, 160)
    || "Professional digital marketing services to grow your business online.";

  const formatServiceName = (id: string) => {
    return id?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || '';
  };

  useSEO({
    title: seoTitle,
    description: seoDescription,
    canonical: `/${serviceId}`,
    keywords: `${formatServiceName(serviceId || '')}, digital marketing, ${serviceId}, marketing services, India`,
    ogImage: data?.hero?.bg ? `https://supriyagrowth.com${data.hero.bg}` : undefined,
  });

  if (error) {
    return (
      <NotFound />
    );
  }

  if (!data) {
    return <div className="text-center py-20">Loading...</div>;
  }

  return (
    <>
      <main className="pb-16">
        {/* Hero Section */}
        <Hero
          {...data?.hero}
          bgImg={data?.hero?.bg ?? ""}
        />

        {data?.whySeoMatters && <section className="py-24 px-4 relative bg-gradient-to-b from-background to-secondary/20">
          <div className=" container mx-auto ">
            <h2 className="text-4xl text-center xl:text-5xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              {data?.whySeoMatters?.title}
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-accent to-primary mx-auto rounded-full" />

            <div className="mt-12 flex max-lg:flex-col gap-8 md:gap-12 lg:items-start items-center">
              <div className="lg:w-[65%]">
                {data?.whySeoMatters?.contents.map((desc: string, index: number) => (
                  <p key={desc} className="text-lg max-w-[60rem] text-muted-foreground mx-auto mb-6 ">
                    {desc}
                  </p>
                ))}

              </div>

              <ContactForm styles={{ form: "w-full max-w-lg" }} />

            </div>

          </div>
        </section>}

        {/* Why It Matters Section */}
        {data?.whyMattersData && (
          <WhyItMatters
            {...data?.whyMattersData}
          />
        )}

        {/* Services */}
        {data?.services && <Services {...data.services} />}

        {/* Process Timeline */}
        {data?.process && (
          <ProcessTimeline title={data.process.title} steps={data.process.steps} />
        )}

        {/* Why Choose Us / What Sets Us Apart */}
        {data?.whyUs && (
          <WhyChooseUs title={data.whyUs.title} items={data.whyUs.items} />
        )}

        {/* Approach - alternative to whyUs */}
        {data?.approach && !data?.whyUs && <Approach {...data.approach} />}

        {/* Results */}
        {data?.results && (
          <Results title={data.results.title} metrics={data.results.metrics} />
        )}

        {/* FAQ */}
        {data?.faqs && <FAQ {...data.faqs} />}

        {/* Custom CTA or Default CTA */}
        {data?.cta ? (
          <ServicesCTA
            title={data.cta.title}
            description={data.cta.description}
            primaryButton={data.cta.primaryButton}
          />
        ) : (
          <CTA />
        )}
      </main>
    </>
  );
};

export default ServicePage;
