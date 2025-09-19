"use client";
import { useState } from "react";

const labExamples = [
  {
    title: "Lab Example A — SaaS, $45k/mo (AWS)",
    subtitle: "Lab Example, not a client case",
    challenge: "rising EC2/S3 costs, low tag coverage.",
    actions: "rightsized t3/t4g; gp2→gp3; S3 lifecycle; tag activation (Owner/Environment/CostCenter).",
    results: "−28% in 6 weeks, tag coverage → 92%, anomaly MTTR <24h.",
  },
  {
    title: "Lab Example B — Data Platform, $120k/mo (Multi-cloud)",
    subtitle: "Lab Example, not a client case",
    challenge: "cross-cloud visibility, duplication of storage.",
    actions: "consolidated exports; allocation dictionary; cold tiering; snapshot hygiene; BigQuery export checks.",
    results: "−22% in 8 weeks, allocated >90%, storage growth flattened.",
  },
  {
    title: "Lab Example C — B2C App, $70k/mo (AWS/Azure)",
    subtitle: "Lab Example, not a client case",
    challenge: "bursty traffic, overspend on on-demand.",
    actions: "SP/RI plan (siblings), autoscaling policies, kube requests/limits review.",
    results: "−19% in 6 weeks, SP/RI coverage → 65%, fewer throttles.",
  },
];

interface LabExampleProps {
  example: {
    title: string;
    subtitle: string;
    challenge: string;
    actions: string;
    results: string;
  };
  isOpen: boolean;
  onToggle: () => void;
}

function LabExample({ example, isOpen, onToggle }: LabExampleProps) {
  return (
    <article className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
      <button onClick={onToggle} className="w-full text-left flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold">{example.title}</h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">{example.subtitle}</p>
        </div>
        <span className="text-2xl text-neutral-500 dark:text-neutral-400" aria-hidden="true">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="mt-4 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
          <p><strong>Challenge:</strong> {example.challenge}</p>
          <p><strong>Actions:</strong> {example.actions}</p>
          <p><strong>Results:</strong> {example.results}</p>
        </div>
      )}
    </article>
  );
}

export default function LabExamples() {
  const [openExamples, setOpenExamples] = useState([0, 1, 2]);

  const toggleExample = (index: number) => {
    setOpenExamples(
      openExamples.includes(index)
        ? openExamples.filter((i) => i !== index)
        : [...openExamples, index]
    );
  };

  return (
    <section aria-labelledby="lab-examples-heading" className="mt-12">
      <h2 id="lab-examples-heading" className="text-2xl font-bold text-center mb-8">Lab Examples</h2>
      <div className="grid grid-cols-1 gap-6">
        {labExamples.map((ex, index) => (
          <LabExample
            key={index}
            example={ex}
            isOpen={openExamples.includes(index)}
            onToggle={() => toggleExample(index)}
          />
        ))}
      </div>
    </section>
  );
}
