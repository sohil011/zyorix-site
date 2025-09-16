// components/home/SocialProof.tsx
import Image from "next/image";

const LOGOS = [
  { src: "/img/focp-badge.svg",  alt: "FOCP Certified",           w: 160, h: 40, cls: "opacity-90" },
  { src: "/img/focus-badge.svg", alt: "FOCUS Analyst",            w: 160, h: 40, cls: "opacity-90" },
  { src: "/img/aws-logo.svg",    alt: "Amazon Web Services",      w: 110, h: 40, cls: "opacity-75" },
  { src: "/img/azure-logo.svg",  alt: "Microsoft Azure",          w: 110, h: 40, cls: "opacity-75" },
  { src: "/img/gcp-logo.svg",    alt: "Google Cloud Platform",    w: 110, h: 40, cls: "opacity-75" },
];

export default function SocialProof() {
  return (
    <section className="py-12 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-sm font-semibold text-gray-700">
          Trusted frameworks we build on
        </h2>
        <p className="mt-2 text-center text-gray-500">
          Built on the same practices trusted by 8,000+ FinOps practitioners worldwide.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5 justify-items-center">
          {LOGOS.map((l) => (
            <Image
              key={l.src}
              src={l.src}
              alt={l.alt}
              width={l.w}
              height={l.h}
              className={`h-10 w-auto ${l.cls}`}
              priority
            />
          ))}
        </div>
      </div>
    </section>
  );
}
