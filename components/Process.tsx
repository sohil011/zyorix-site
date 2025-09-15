export default function Process() {
  const steps = [
    { title: "1) Health Check (2–3 weeks)", copy: "Data + tagging review, savings backlog, guardrails plan." },
    { title: "2) Optimization Sprint", copy: "Rightsize compute, storage, data transfer; SP/RI coverage uplift." },
    { title: "3) vFinOps cadence", copy: "Budgets/alerts, anomaly response, quarterly KPI governance." },
  ];
  return (
    <section aria-labelledby="process-title" className="py-10 md:py-14">
      <div className="mx-auto max-w-6xl px-4">
        <h2 id="process-title" className="text-xl font-semibold text-neutral-900 dark:text-white text-center">
          How we work
        </h2>
        <ol className="mt-6 grid gap-4 sm:grid-cols-3">
          {steps.map((s) => (
            <li key={s.title} className="rounded-2xl border border-neutral-200 bg-white/60 p-4 shadow-sm backdrop-blur dark:border-neutral-800">
              <p className="font-semibold text-neutral-900 dark:text-white">{s.title}</p>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{s.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
