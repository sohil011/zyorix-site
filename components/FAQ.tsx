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
        <h2 id="faq-title" className="text-xl font-semibold text-neutral-900 dark:text-white text-center">FAQ</h2>
        <div className="mt-6 divide-y divide-neutral-200 dark:divide-neutral-800 rounded-2xl border border-neutral-200 bg-white/60 backdrop-blur dark:border-neutral-800">
          {QA.map((item, i) => (
            <div key={item.q} className="p-4">
              <button
                className="flex w-full items-center justify-between text-left font-medium text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 rounded"
                aria-expanded={open === i}
                aria-controls={`faq-panel-${i}`}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>{item.q}</span>
                <span aria-hidden="true">{open === i ? "–" : "+"}</span>
              </button>
              <div id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-q-${i}`} className={`${open === i ? "mt-2" : "hidden"} text-sm text-neutral-600 dark:text-neutral-300`}>
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
