// components/home/ProofDeck.tsx
import Link from "next/link";

export default function ProofDeck() {
  const items = [
    {
      key: "aws",
      title: "AWS Lab",
      text: "Reduced EC2 t3.nano costs by 22% via rightsizing & gp2→gp3 migration.",
      href: "/services/optimization", // rightsizing/storage -> Optimization
    },
    {
      key: "azure",
      title: "Azure Lab",
      text: "Identified 35% orphaned disk waste with a tagging coverage audit.",
      href: "/services/allocation-governance", // tagging/coverage -> Allocation & KPIs
    },
    {
      key: "gcp",
      title: "GCP Lab",
      text: "Forecast anomaly guardrails prevented 80% overspend in a test project.",
      href: "/services/managed-finops", // budgets/alerts/guardrails -> vFinOps cadence
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Proof from our FinOps labs
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <Link
              key={it.key}
              prefetch={false}
              href={it.href}
              aria-label={`${it.title} — view related service`}
              className="group block rounded-2xl bg-white p-6 text-left shadow-sm ring-1 ring-gray-100 transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-700"
              // GA4 delegated click tags
              data-ga-event="labs_card_click"
              data-ga-lab={it.key}
              data-ga-dest={it.href}
            >
              <h3 className="font-semibold text-gray-900">{it.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{it.text}</p>
              <span className="mt-3 inline-flex items-center text-sm font-medium text-blue-700">
                View related service
                <svg
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 3.293a1 1 0 011.414 0l4.999 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L15.586 10H2a1 1 0 110-2h13.586l-3.293-3.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
