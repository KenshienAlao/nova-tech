import novaPromo_1400 from "@/assets/promotion/nova-promotion-1400.webp";
import novaPromo_1000 from "@/assets/promotion/nova-promotion-1000.webp";
import novaPromo_700 from "@/assets/promotion/nova-promotion-700.webp";
import novaPromo_500 from "@/assets/promotion/nova-promotion-500.webp";
import novaPromo_350 from "@/assets/promotion/nova-promotion-350.webp";

import { Button } from "@/components/ui/button";

const promoImageSrcSet = `${novaPromo_350} 350w, ${novaPromo_500} 500w, ${novaPromo_700} 700w, ${novaPromo_1000} 1000w, ${novaPromo_1400} 1400w`;

function Promotion() {
  return (
    <section
      id="promotion"
      className="section-space"
      aria-labelledby="promotion-title"
    >
      <div className="site-container">
        <div className="relative min-h-150 overflow-hidden bg-promo sm:min-h-160 lg:min-h-145">
          <img
            src={novaPromo_1400}
            srcSet={promoImageSrcSet}
            alt="Laptop, tablet, smartphone, headphones and smartwatch in a studio arrangement"
            width={1400}
            height={787}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-[58%_center]"
          />
          <div className="promo-overlay" />
          <div className="absolute inset-x-0 bottom-0 z-10 p-7 sm:p-12 lg:inset-y-0 lg:left-0 lg:right-auto lg:flex lg:w-1/2 lg:flex-col lg:justify-center">
            <p className="eyebrow text-promo-foreground/70">
              Selected technology
            </p>
            <h2
              id="promotion-title"
              className="mt-4 max-w-md text-promo-foreground"
            >
              Upgrade your everyday setup.
            </h2>
            <p className="mt-4 max-w-md text-promo-foreground/80">
              Save on selected devices and accessories for a limited time.
            </p>
            <Button
              asChild
              variant="light"
              size="lg"
              className="mt-7 self-start"
            >
              <a href="#featured">
                Explore deals{" "}
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Promotion;
