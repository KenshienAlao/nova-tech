import ctaImage_1400 from "@/assets/cta/cta-1400.webp";
import ctaImage_1000 from "@/assets/cta/cta-1000.webp";
import ctaImage_700 from "@/assets/cta/cta-700.webp";
import ctaImage_500 from "@/assets/cta/cta-500.webp";
import ctaImage_350 from "@/assets/cta/cta-350.webp";
import { Button } from "@/components/ui/button";

const ctaImageSrcSet = `${ctaImage_350} 350w, ${ctaImage_500} 500w, ${ctaImage_700} 700w, ${ctaImage_1000} 1000w, ${ctaImage_1400} 1400w`;

function FinalCTA() {
  return (
    <section className="bg-surface">
      <div className="site-container py-6">
        <div className="relative min-h-155 overflow-hidden bg-muted lg:min-h-135">
          <img
            src={ctaImage_1400}
            srcSet={ctaImageSrcSet}
            sizes="(max-width: 1023px) 100vw, 82rem"
            alt="NOVA TECH collection of everyday technology"
            width={1400}
            height={784}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-[68%_center]"
          />
          <div className="final-overlay" />
          <div className="absolute inset-x-0 bottom-0 z-10 p-7 sm:p-12 lg:inset-y-0 lg:left-0 lg:right-auto lg:flex lg:w-1/2 lg:flex-col lg:justify-center">
            <p className="eyebrow">Your next essential</p>
            <h2 className="mt-4 max-w-lg">
              Find technology that fits your life.
            </h2>
            <p className="mt-5 max-w-md leading-7 text-secondary">
              Explore devices, accessories, and everyday essentials at NOVA
              TECH.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="#featured">
                  Shop now
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
                <a href="#store-title">Visit a store</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;
