const MAP_EMBED_SRC =
  "https://www.google.com/maps?q=14.5547,121.0244&z=15&output=embed";

function StoreInfo() {
  return (
    <section className="section-space bg-muted" aria-labelledby="store-title">
      <div className="site-container grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
        <div>
          <p className="eyebrow">Visit us</p>

          <h2 id="store-title" className="mt-4">
            Experience Nova Tech in person.
          </h2>

          <p className="mt-5 leading-7 text-secondary">
            Explore our latest technology, compare devices, and get practical
            guidance from our team in-store.
          </p>

          <dl className="mt-10 space-y-6">
            <div className="info-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M582-298 440-440v-200h80v167l118 118-56 57ZM440-720v-80h80v80h-80Zm280 280v-80h80v80h-80ZM440-160v-80h80v80h-80ZM160-440v-80h80v80h-80ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
              </svg>

              <div>
                <dt>Store hours</dt>
                <dd>
                  Monday – Saturday
                  <br />
                  10:00 AM – 8:00 PM
                </dd>
              </div>
            </div>

            <div className="info-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M536.5-503.5Q560-527 560-560t-23.5-56.5Q513-640 480-640t-56.5 23.5Q400-593 400-560t23.5 56.5Q447-480 480-480t56.5-23.5ZM480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
              </svg>

              <div>
                <dt>Store location</dt>
                <dd>
                  24 Nova Avenue
                  <br />
                  Central District
                </dd>
              </div>
            </div>

            <div className="info-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
              </svg>

              <div>
                <dt>Get in touch</dt>
                <dd>
                  <a
                    href="mailto:hello@novatech.example"
                    className="transition-colors hover:text-foreground"
                  >
                    hello@novatech.example
                  </a>
                </dd>
              </div>
            </div>
          </dl>
        </div>

        <div
          className="map-visual"
          aria-label="Map showing NOVA TECH in Central District"
        >
          <iframe
            src={MAP_EMBED_SRC}
            title="Map of NOVA TECH store location in Central District"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />

          <div className="map-card" aria-hidden="true">
            <span className="map-card-name">NOVA TECH</span>

            <span className="map-card-detail">
              24 Nova Avenue, Central District
            </span>

            <span className="map-card-status">Open today until 8:00 PM</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StoreInfo;
