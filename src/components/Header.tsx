import Menu, { MobileMenuDrawer, NAV_TOGGLE_ID } from "./Menu";

const links = [
  "Shop",
  "Smartphones",
  "Laptops",
  "Tablets",
  "Accessories",
  "Deals",
  "About",
];
const target = (label: string) =>
  label === "Deals"
    ? "promotion"
    : label === "About"
      ? "benefits"
      : label === "Shop"
        ? "featured"
        : "categories";

function Header() {
  return (
    <>
      <input
        type="checkbox"
        id={NAV_TOGGLE_ID}
        aria-label="Toggle navigation menu"
        className="fixed pointer-events-none opacity-0"
      />
      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur">
        <div className="site-container grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 lg:flex">
          <a
            href="#main"
            className="flex min-w-0 items-center gap-2.5"
            aria-label="NOVA TECH home"
          >
            <img
              src="/favicon.svg"
              className="h-10 w-10"
              alt="NOVA TECH logo"
              aria-hidden="true"
              fetchPriority="high"
            />
            <span className="brand-name truncate text-xl font-extrabold tracking-[0.14em]">
              NOVA TECH
            </span>
          </a>
          <nav
            className="mx-auto hidden items-center gap-6 lg:flex"
            aria-label="Main navigation"
          >
            {links.map((link) => (
              <a key={link} href={`#${target(link)}`} className="nav-link">
                {link}
              </a>
            ))}
          </nav>
          <Menu />
        </div>
      </header>

      <MobileMenuDrawer />
    </>
  );
}

export default Header;
