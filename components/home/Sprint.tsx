export default function Sprint() {
  const steps = [
    { k: "1) Health Check",        v: "2–3 week tagging review, CUR audit, and anomaly scan." },
    { k: "2) Optimization Sprint", v: "Rightsize compute & storage; uplift SP/RI coverage with safe guardrails." },
    { k: "3) vFinOps Cadence",     v: "Budgets, alerts, quarterly KPI governance & continuous savings loop." },
  ];
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
          The Zyorix 6-Week FinOps Sprint<span aria-hidden>™</span>
        </h2>
        <p className="mt-4 text-gray-600">
          A practical 3-step method to cut cloud waste fast — built on FOCP &amp; FOCUS frameworks.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3 text-left">
          {steps.map(s => (
            <div key={s.k} className="rounded-2xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900">{s.k}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
