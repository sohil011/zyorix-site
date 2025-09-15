export default function SocialProof() {
  return (
    <section aria-labelledby="proof-title" className="py-8 md:py-10">
      <div className="mx-auto max-w-6xl px-4">
        <h2 id="proof-title" className="text-center text-sm font-medium text-neutral-600 dark:text-neutral-300">
          Trusted tooling & certifications we work with
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-5 items-center justify-items-center opacity-80">
          <img src="/img/brands/focp.svg"  alt="FinOps Certified Practitioner" width="120" height="32" className="h-6 w-auto md:h-7" loading="lazy" decoding="async" />
          <img src="/img/brands/focus.svg" alt="FOCUS Analyst"                width="120" height="32" className="h-6 w-auto md:h-7" loading="lazy" decoding="async" />
          <img src="/img/brands/aws.svg"   alt="Amazon Web Services"          width="90"  height="32" className="h-6 w-auto md:h-7" loading="lazy" decoding="async" />
          <img src="/img/brands/azure.svg" alt="Microsoft Azure"              width="110" height="32" className="h-6 w-auto md:h-7" loading="lazy" decoding="async" />
          <img src="/img/brands/gcp.svg"   alt="Google Cloud"                 width="110" height="32" className="h-6 w-auto md:h-7" loading="lazy" decoding="async" />
        </div>
      </div>
    </section>
  );
}
