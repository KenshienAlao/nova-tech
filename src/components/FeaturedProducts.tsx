import { products } from "@/data/product";
import type { Product } from "@/data/product";

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card group">
      <div className="product-image">
        <img
          src={product.image}
          srcSet={product.imageSrcSet}
          alt={product.name}
          width={1200}
          height={960}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs text-secondary">{product.type}</p>
          <h3 className="mt-1 text-lg font-semibold">{product.name}</h3>
        </div>
        <p className="font-semibold">{product.price}</p>
      </div>
      <p className="mt-2 text-sm text-secondary">{product.detail}</p>
      <a
        href="#newsletter"
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent"
      >
        View product{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          fill="currentColor"
          className="size-4 transition-transform duration-200 group-hover:translate-x-1"
        >
          <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
        </svg>
      </a>
    </article>
  );
}

function FeaturedProducts() {
  return (
    <section
      id="featured"
      className="section-space"
      aria-labelledby="featured-title"
    >
      <div className="site-container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Featured selection</p>
            <h2 id="featured-title">Popular right now.</h2>
          </div>
          <p>
            Reliable everyday devices, chosen for performance, design, and
            lasting value.
          </p>
        </div>
        <div className="mt-12 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
