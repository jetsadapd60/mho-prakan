const SERVICES = [
  {
    title: "Consultation",
    description:
      "Schedule a one-on-one discovery call to understand the coverage that matches your needs.",
  },
  {
    title: "Policy Review",
    description:
      "We audit existing policies and recommend adjustments to keep protections up to date.",
  },
  {
    title: "Claims Assistance",
    description:
      "Get guided support through every step of the claims process for faster resolutions.",
  },
];

export default function ServicesPage() {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
          Services
        </p>
        <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">
          Partner with experts who simplify insurance
        </h1>
        <p className="max-w-2xl text-base text-slate-600">
          Each service is designed to keep you confident at every step—whether
          you are exploring new coverage or optimizing what you already have.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {SERVICES.map((service) => (
          <article
            key={service.title}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-slate-900">
              {service.title}
            </h2>
            <p className="mt-3 text-sm text-slate-600">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
