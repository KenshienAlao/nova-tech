import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Newsletter() {
  return (
    <section
      id="newsletter"
      className="border-b border-border bg-accent py-16 text-accent-foreground"
    >
      <div className="site-container grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
        <div>
          <p className="eyebrow text-accent-foreground/90">The NOVA edit</p>
          <h2 className="mt-4 max-w-xl">Stay ahead of what’s next.</h2>
          <p className="mt-4 max-w-xl text-accent-foreground/90">
            Get product launches, useful technology picks, and selected offers
            in your inbox.
          </p>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email address
          </label>
          <div className="flex gap-2">
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="you@example.com"
              className="h-12 border-accent-foreground/30 bg-accent-foreground text-foreground placeholder:text-secondary"
            />
            <Button
              type="submit"
              variant="light"
              size="lg"
              className="h-12 px-5"
            >
              Subscribe
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
              >
                <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
              </svg>
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
