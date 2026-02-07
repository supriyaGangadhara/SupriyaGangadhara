interface Company {
  logo: string;
  name: string;
}

interface TrustedCompaniesProps {
  title?: string;
  companies?: Company[];
}

const TrustedCompanies = (props: TrustedCompaniesProps) => {
  const companies = props?.companies ?? [];

  return (
    <section className="py-12 bg-muted/30 border-y border-border overflow-hidden">
      <div className="container mx-auto mb-8 max-md:px-4">
        <h3 className="text-center text-lg font-semibold text-muted-foreground">
          {props?.title}
        </h3>
      </div>

      <div className="relative">
        <div className="flex animate-scroll items-center">
          {[...companies, ...companies, ...companies].map((company, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 p-4 flex items-center justify-center bg-white rounded-lg"
              // className="flex-shrink-0 mx-8 px-6 py-4 bg-background/50 rounded-lg border border-border flex items-center justify-center"
            >
              <img
                src={company.logo}
                alt={company.name}
                // grayscale hover:grayscale-0
                className="h-10 w-auto object-contain aspect-[200/80] transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: fit-content;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TrustedCompanies;
