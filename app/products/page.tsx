const PRODUCTS = [
  {
    name: "Life Shield Plan",
    summary:
      "Comprehensive life insurance with flexible riders for families and professionals.",
    details: "Includes critical illness, income protection, and education riders.",
  },
  {
    name: "Health Secure Plus",
    summary:
      "Medical coverage that adapts to lifestyle changes with cashless hospital partnerships.",
    details: "Covers inpatient and outpatient costs with wellness add-ons.",
  },
  {
    name: "Business Guard",
    summary:
      "Protect your operations with property, liability, and employee coverage bundles.",
    details: "Ideal for SMEs looking for affordable and scalable protection.",
  },
];

export default function ProductsPage() {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
          Products
        </p>
        <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">
          Flexible plans built around your priorities
        </h1>
        <p className="max-w-2xl text-base text-slate-600">
          Browse the core insurance products that help clients stay resilient—from
          everyday health coverage to long-term financial security.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {PRODUCTS.map((product) => (
          <article
            key={product.name}
            className="flex h-full flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">
                {product.name}
              </h2>
              <p className="text-sm text-slate-600">{product.summary}</p>
            </div>
            <p className="mt-4 text-xs uppercase tracking-wide text-slate-500">
              {product.details}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
