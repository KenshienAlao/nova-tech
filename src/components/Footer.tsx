const columns = {
  Shop: ["Featured Products", "Categories", "Deals"],
  Help: ["Support", "Shipping & Delivery", "Returns", "Warranty", "FAQ"],
  Company: ["About Nova Tech", "Contact", "Store"],
};

function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="site-container">
        <div className="grid gap-12 border-b border-background/15 py-14 lg:grid-cols-[1.2fr_1fr] lg:py-16">
          <div className="max-w-sm">
            <a
              href="#main"
              className="flex items-center gap-2.5 text-sm font-bold tracking-[0.16em]"
              aria-label="Nova Tech home"
            >
              <img
                src="/favicon.svg"
                className="h-8 w-8 brightness-0 invert"
                alt=""
                aria-hidden="true"
                loading="lazy"
              />
              <span>NOVA TECH</span>
            </a>

            <p className="mt-5 text-sm leading-6 text-background/75">
              Technology for the way you live.
            </p>

            <p className="mt-3 text-sm leading-6 text-background/70">
              Thoughtfully selected devices and technology for work, creativity,
              and everyday life.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3">
            {Object.entries(columns).map(([title, links]) => (
              <nav key={title} aria-label={title}>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-background/70">
                  {title}
                </p>

                <ul className="mt-5 space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href={
                          link === "FAQ"
                            ? "#faq"
                            : link === "Deals"
                              ? "#promotion"
                              : link === "Featured Products"
                                ? "#featured"
                                : link === "Categories"
                                  ? "#categories"
                                  : link === "Store"
                                    ? "#store"
                                    : "#main"
                        }
                        className="text-sm text-background/80 transition-colors hover:text-background"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 py-6 text-xs text-background/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; 2026 Nova Tech. Fictional business created for portfolio
            purposes.
          </p>

          <div className="flex gap-5">
            <a
              href="#main"
              className="text-background/70 transition-colors hover:text-background"
            >
              Privacy
            </a>
            <a
              href="#main"
              className="text-background/70 transition-colors hover:text-background"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
