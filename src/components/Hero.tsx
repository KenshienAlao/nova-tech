import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <img
        src="/assets/hero/nova-hero-1920.webp"
        srcSet="/assets/hero/nova-hero-1920.webp 1920w, /assets/hero/nova-hero-1400.webp 1400w, /assets/hero/nova-hero-1000.webp 1000w, /assets/hero/nova-hero-700.webp 700w, /assets/hero/nova-hero-500.webp 500w, /assets/hero/nova-hero-350.webp 350w"
        sizes="100vw"
        alt=""
        width={1920}
        height={1200}
        fetchPriority="high"
        className="hero-media"
        aria-hidden="true"
      />

      <div className="hero-shade" aria-hidden="true" />
      <div className="site-container hero-layout">
        <div className="hero-content">
          <p className="eyebrow">Curated technology · Thoughtfully selected</p>
          <h1 id="hero-title" className="hero-title">
            Technology for the way you live.
          </h1>
          <p className="hero-description">
            Discover smartphones, laptops, tablets, audio, and everyday tech
            selected for work, play, and everything in between.
          </p>
          <div className="hero-actions">
            <Button asChild size="lg">
              <a href="#featured">
                Shop technology{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="currentColor"
                >
                  <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
                </svg>
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#promotion">Explore deals</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
