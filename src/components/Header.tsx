import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
      <header className="sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur">
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
          <div className="flex shrink-0 items-center justify-end gap-1">
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
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open menu"
                  className="lg:hidden"
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
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[88%] border-border bg-background p-6">
                <SheetTitle className="mb-8 text-left text-sm tracking-[0.14em]">
                  NOVA TECH
                </SheetTitle>
                <nav className="flex flex-col" aria-label="Mobile navigation">
                  {links.map((link) => (
                    <SheetClose asChild key={link}>
                      <a
                        className="border-b border-border py-4 text-lg font-medium"
                        href={`#${target(link)}`}
                      >
                        {link}
                      </a>
                    </SheetClose>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
