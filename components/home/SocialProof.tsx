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
        <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5 justify-items-center items-center">
          <img src="/img/focp-badge.svg" alt="FOCP Certified" className="h-10 w-auto opacity-90" />
          <img src="/img/focus-badge.svg" alt="FOCUS Analyst" className="h-10 w-auto opacity-90" />
          <img src="/img/aws-logo.svg" alt="Amazon Web Services" className="h-10 w-auto opacity-75" />
          <img src="/img/azure-logo.svg" alt="Microsoft Azure" className="h-10 w-auto opacity-75" />
          <img src="/img/gcp-logo.svg" alt="Google Cloud Platform" className="h-10 w-auto opacity-75" />
        </div>
      </div>
    </section>
  );
}
