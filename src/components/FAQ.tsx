import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  [
    "What products does NOVA TECH sell?",
    "We offer smartphones, laptops, tablets, audio, wearables, monitors, cameras, keyboards, and everyday accessories.",
  ],
  [
    "Are the products genuine?",
    "Yes. We present genuine products with clear specifications, included accessories, and transparent pricing.",
  ],
  [
    "Can I shop online?",
    "Yes. Browse our selection online and choose the products that fit your needs.",
  ],
  [
    "Can I visit the store before buying?",
    "Absolutely. You can explore selected products in person and ask our team for practical guidance.",
  ],
  [
    "Do you offer product support?",
    "Yes. Our team can help with product questions before and after your purchase.",
  ],
  [
    "What payment methods are available?",
    "We accept major credit and debit cards, plus selected digital payment methods.",
  ],
  [
    "What is your return policy?",
    "Eligible products can be returned under our straightforward returns policy. Product-specific conditions are shown at checkout.",
  ],
  [
    "Do products come with a warranty?",
    "Warranty information is clearly listed with each product and may vary by item and manufacturer.",
  ],
];
function FAQ() {
  return (
    <section id="faq" className="section-space" aria-labelledby="faq-title">
      <div className="site-container grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
        <div>
          <p className="eyebrow">Good to know</p>
          <h2 id="faq-title" className="mt-4">
            Questions, answered.
          </h2>
        </div>
        <Accordion type="single" collapsible>
          {faqs.map(([q, a], i) => (
            <AccordionItem key={q} value={`item-${i}`}>
              <AccordionTrigger className="py-6 text-base no-underline hover:no-underline">
                {q}
              </AccordionTrigger>
              <AccordionContent className="max-w-2xl pb-6 leading-7 text-secondary">
                {a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default FAQ;
