"use client";
import { useState } from "react";
const QA = [
  { q: "Do you replace our tools?", a: "No. We work with your existing AWS, Azure, and GCP accounts and data." },
  { q: "When will we see savings?", a: "Most teams land 15–35% within the first 6–8 weeks depending on scope." },
  { q: "Do you need CUR or BigQuery?", a: "Yes, we use native billing exports and tagging data for accuracy." },
  { q: "Can you help if tags are messy?", a: "Yes. We prioritise allocation coverage, owners, and KPIs before spend cuts." },
];
export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section aria-labelledby="faq-title" className="py-10 md:py-14">
      <div className="mx-auto max-w-6xl px-4">
        <h2 id="faq-title" className="text-xl font-semibold text-neutral-900 text-center">FAQ</h2>
        <div className="mt-6 divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white/60 backdrop-blur">
          {QA.map((item, i) => (
            <div key={item.q} className="px-4">
              <button
                className="flex w-full items-center justify-between py-3 text-left font-medium text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 rounded"
                aria-expanded={open === i}
                aria-controls={`faq-panel-${i}`}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>{item.q}</span>
                <span aria-hidden="true" className="ml-4 text-xl">
                  {open === i ? "–" : "+"}
                </span>
              </button>
              <div id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-q-${i}`} className={`${open === i ? "pb-3" : "hidden"} text-sm text-neutral-600`}>
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
