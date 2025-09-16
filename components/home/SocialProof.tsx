import Image from "next/image";

const logos = [
  { src: "/img/brands/focp.svg", alt: "FOCP Certified", width: 160, height: 40 },
  { src: "/img/brands/focus.svg", alt: "FOCUS Analyst", width: 160, height: 40 },
  { src: "/img/brands/aws.svg", alt: "Amazon Web Services", width: 120, height: 40 },
  { src: "/img/brands/azure.svg", alt: "Microsoft Azure", width: 120, height: 40 },
  { src: "/img/brands/gcp.svg", alt: "Google Cloud Platform", width: 120, height: 40 },
];

export default function SocialProof() {
  return (
    <section className="py-12 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-sm font-semibold text-gray-700 dark:text-gray-300">
          Trusted frameworks & platforms we build on
        </h2>
        <p className="mt-2 text-center text-gray-500 dark:text-gray-400">
          Built on the same practices trusted by 8,000+ FinOps practitioners worldwide.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5 justify-items-center items-center">
          {logos.map((logo) => (
            <Image
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="h-10 w-auto opacity-90 dark:opacity-95 dark:brightness-0 dark:invert"
              sizes="(max-width: 640px) 33vw, (max-width: 1024px) 20vw, 160px"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
