import { categories } from "@/data/category";

function Categories() {
  return (
    <section
      id="categories"
      className="section-space bg-surface"
      aria-labelledby="categories-title"
    >
      <div className="site-container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Shop by category</p>
            <h2 id="categories-title">Find your next essential.</h2>
          </div>
          <p>
            Technology for the routines, projects, and moments that make up your
            day.
          </p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-12 md:grid-rows-2">
          {categories.map((category, index) => (
            <a
              key={category.name}
              href="#featured"
              className={`category-tile group ${index < 2 ? "md:col-span-6" : "md:col-span-3"}`}
            >
              <img
                src={category.image}
                srcSet={category.imageSrcSet || undefined}
                sizes="(max-width: 640px) 100vw, 50vw"
                alt={`${category.name} collection`}
                width={1200}
                height={960}
                loading="lazy"
              />
              <div className="category-copy">
                <div>
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
