import { Button } from "./ui/button";

const links = [
  "Shop",
  "Smartphones",
  "Laptops",
  "Tablets",
  "Accessories",
  "Deals",
  "About",
];

const getTarget = (label: string) =>
  label === "Deals"
    ? "promotion"
    : label === "About"
      ? "benefits"
      : label === "Shop"
        ? "featured"
        : "categories";

const NAV_TOGGLE_ID = "nav-toggle";

function Menu() {
  return (
    <div className="group flex shrink-0 items-center justify-end gap-1">
      <style>{`body:has(#${NAV_TOGGLE_ID}:checked){overflow:hidden}`}</style>

      <input
        type="checkbox"
        id={NAV_TOGGLE_ID}
        aria-label="Toggle navigation menu"
        className="sr-only"
      />

      <Button
        variant="ghost"
        size="icon"
        aria-label="Account"
        className="hidden md:inline-flex"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="currentColor"
        >
          <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm146.5-204.5Q340-521 340-580t40.5-99.5Q421-720 480-720t99.5 40.5Q620-639 620-580t-40.5 99.5Q539-440 480-440t-99.5-40.5ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm100-95.5q47-15.5 86-44.5-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160q53 0 100-15.5ZM523-537q17-17 17-43t-17-43q-17-17-43-17t-43 17q-17 17-17 43t17 43q17 17 43 17t43-17Zm-43-43Zm0 360Z" />
        </svg>
      </Button>

      <label
        htmlFor={NAV_TOGGLE_ID}
        aria-label="Open navigation menu"
        className="inline-flex size-9 cursor-pointer items-center justify-center rounded-md text-foreground transition-colors hover:bg-muted group-has-focus-visible:outline group-has-focus-visible:outline-ring lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="currentColor"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </label>

      <label
        htmlFor={NAV_TOGGLE_ID}
        aria-label="Close navigation menu backdrop"
        className="pointer-events-none fixed inset-0 z-40 bg-foreground/20 opacity-0 transition-opacity duration-420 ease-out group-has-checked:pointer-events-auto group-has-checked:opacity-100 lg:hidden"
      />

      <div className="fixed inset-y-0 right-0 z-50 flex h-dvh w-[min(21rem,86%)] translate-x-full flex-col border-l border-border bg-surface shadow-[-16px_0_48px_-24px_oklch(0.2_0_0/0.35)] transition-transform duration-420 ease-[cubic-bezier(0.32,0.72,0,1)] group-has-checked:translate-x-0 lg:hidden">
        <div className="flex h-16 shrink-0 items-center justify-end border-b border-border px-5">
          <label
            htmlFor={NAV_TOGGLE_ID}
            aria-label="Close navigation menu"
            className="-mr-2 inline-flex size-9 cursor-pointer items-center justify-center rounded-md text-secondary transition-colors hover:bg-muted hover:text-foreground"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </label>
        </div>

        <nav
          aria-label="Mobile navigation"
          className="flex flex-1 flex-col overflow-y-auto px-5 py-4"
        >
          {links.map((link, i) => (
            <a
              key={link}
              href={`#${getTarget(link)}`}
              style={{ "--delay": `${140 + i * 50}ms` } as React.CSSProperties}
              className="flex translate-x-4 items-center justify-between border-b border-border py-4 text-base font-semibold opacity-0 transition-[opacity,transform,color] duration-300 ease-out hover:text-primary group-has-checked:translate-x-0 group-has-checked:opacity-100 group-has-checked:delay-(--delay)"
            >
              {link}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="currentColor"
                className="text-secondary"
              >
                <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
              </svg>
            </a>
          ))}
        </nav>

        <div className="shrink-0 border-t border-border px-5 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom,0px))]">
          <a
            href="#account"
            className="flex items-center gap-2.5 text-sm font-semibold text-secondary transition-colors hover:text-foreground"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="currentColor"
            >
              <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm146.5-204.5Q340-521 340-580t40.5-99.5Q421-720 480-720t99.5 40.5Q620-639 620-580t-40.5 99.5Q539-440 480-440t-99.5-40.5ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
            </svg>
            Account
          </a>
          <p className="mt-3 text-xs leading-relaxed text-secondary">
            Free delivery on orders over $99 · 30-day returns
          </p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
