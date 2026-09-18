const quotes = [
  [
    "The staff actually helped me choose what I needed instead of pushing the most expensive option.",
    "Daniel Reyes",
  ],
  [
    "Clean store, great selection, and the laptop I wanted was available immediately.",
    "Sofia Martin",
  ],
  [
    "I've bought my phone and accessories here and the experience has always been straightforward.",
    "Ethan Cole",
  ],
];

function Testimonials() {
  return (
    <section className="section-space" aria-labelledby="testimonials-title">
      <div className="site-container">
        <p className="eyebrow">Customer stories</p>
        <h2 id="testimonials-title" className="mt-4 max-w-2xl">
          Chosen by people who love technology.
        </h2>
        <div className="mt-12 grid border-l border-t border-border md:grid-cols-3">
          {quotes.map(([quote, name]) => (
            <figure
              key={name}
              className="flex min-h-72 flex-col justify-between border-b border-r border-border p-7 sm:p-9"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="currentColor"
                className="size-6 text-accent"
                aria-hidden="true"
              >
                <path d="m228-240 92-160q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 42.5T458-480L320-240h-92Zm360 0 92-160q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 42.5T818-480L680-240h-92ZM362.5-517.5Q380-535 380-560t-17.5-42.5Q345-620 320-620t-42.5 17.5Q260-585 260-560t17.5 42.5Q295-500 320-500t42.5-17.5Zm360 0Q740-535 740-560t-17.5-42.5Q705-620 680-620t-42.5 17.5Q620-585 620-560t17.5 42.5Q655-500 680-500t42.5-17.5ZM680-560Zm-360 0Z" />
              </svg>
              <blockquote className="mt-10 text-lg leading-8">
                “{quote}”
              </blockquote>
              <figcaption className="mt-8 text-sm font-semibold">
                — {name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
