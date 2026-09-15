const benefits: Array<[string, string]> = [
  [
    "Carefully Selected",
    "We focus on useful technology rather than endless choices.",
  ],
  [
    "Genuine Products",
    "Every product is presented with clear specifications and pricing.",
  ],
  ["Helpful Support", "Get practical guidance before and after your purchase."],
  ["Flexible Shopping", "Browse online or visit a NOVA TECH location."],
  ["Secure Checkout", "A straightforward and secure shopping experience."],
  ["Easy Returns", "Simple policies designed around the customer."],
];

function StoreBenefits() {
  return (
    <section
      id="benefits"
      className="section-space border-y border-border bg-surface"
      aria-labelledby="benefits-title"
    >
      <div className="site-container lg:grid lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="eyebrow">The NOVA difference</p>
          <h2 id="benefits-title" className="mt-4">
            More than a place to buy tech.
          </h2>
          <p className="mt-5 max-w-md leading-7 text-secondary">
            Good technology should be easier to understand, compare, and bring
            into your life.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:mt-0">
          {benefits.map(([title, body]) => (
            <article key={title} className="benefit-item">
              <div>
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-secondary">{body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StoreBenefits;
