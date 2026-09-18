import editorialImage_1400 from "@/assets/editorial/nova-editorial-1400.webp";
import editorialImage_1000 from "@/assets/editorial/nova-editorial-1000.webp";
import editorialImage_700 from "@/assets/editorial/nova-editorial-700.webp";
import editorialImage_500 from "@/assets/editorial/nova-editorial-500.webp";
import editorialImage_350 from "@/assets/editorial/nova-editorial-350.webp";

const editorialImageSrcSet = `${editorialImage_350} 350w, ${editorialImage_500} 500w, ${editorialImage_700} 700w, ${editorialImage_1000} 1000w, ${editorialImage_1400} 1400w`;
const uses = [
  ["01", "Work", "Laptop · Monitor · Keyboard"],
  ["02", "Create", "Tablet · Stylus · Headphones"],
  ["03", "Move", "Smartphone · Watch · Earbuds"],
  ["04", "Play", "Laptop · Controller · Audio"],
];
function ProductShowcase() {
  return (
    <section
      className="section-space bg-foreground text-background"
      aria-labelledby="showcase-title"
    >
      <div className="site-container">
        <div className="max-w-2xl">
          <p className="eyebrow text-background/60">One ecosystem, your way</p>
          <h2 id="showcase-title" className="mt-4">
            Built for every part of your day.
          </h2>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.45fr_0.55fr]">
          <img
            src={editorialImage_1400}
            srcSet={editorialImageSrcSet}
            sizes="(max-width: 1023px) 100vw, min(72.5vw, 59rem)"
            alt="Complete technology setup with laptop, monitor, tablet, phone and audio devices"
            width={1920}
            height={1280}
            loading="lazy"
            decoding="async"
            className="h-full min-h-105 w-full object-cover"
          />
          <div className="grid grid-cols-2 border-l border-t border-background/20 lg:grid-cols-1">
            {uses.map(([number, title, items]) => (
              <article
                key={title}
                className="border-b border-r border-background/20 p-5 sm:p-7"
              >
                <p className="text-xs text-background/45">{number}</p>
                <h3 className="mt-8 text-2xl font-medium">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-background/60">
                  {items}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductShowcase;
