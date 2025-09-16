export default function ProofDeck() {
  const items = [
    { title: "AWS Lab",   text: "Reduced EC2 t3.nano costs by 22% via rightsizing & gp2→gp3 migration." },
    { title: "Azure Lab", text: "Identified 35% orphaned disk waste with a tagging coverage audit." },
    { title: "GCP Lab",   text: "Forecast anomaly guardrails prevented 80% overspend in a test project." },
  ];
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Proof from our FinOps labs
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <article key={it.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 text-left">
              <h3 className="font-semibold text-gray-900">{it.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{it.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
