export default function Outcomes() {
  const items = [
    { kpi: "15–35% savings", blurb: "Typical reduction from rightsizing, SP/RI coverage, and storage policies." },
    { kpi: "2–3 week backlog", blurb: "Quantified action backlog from a rapid health check with owners & impact." },
    { kpi: "Unit economics", blurb: "Visibility to £/customer, £/service, and allocation coverage by tag." },
  ];
  return (
    <section aria-labelledby="outcomes-title" className="py-10 md:py-14">
      <div className="mx-auto max-w-6xl px-4">
        <h2 id="outcomes-title" className="text-xl font-semibold text-neutral-900 text-center">
          Outcomes our clients see
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {items.map((x) => (
            <div key={x.kpi} className="rounded-2xl border border-neutral-200 bg-white/60 p-4 shadow-sm backdrop-blur">
              <p className="text-lg font-bold text-neutral-900">{x.kpi}</p>
              <p className="mt-1 text-sm text-neutral-600">{x.blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
