import * as React from "react";
import { cn } from "@/lib/utils";

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "single" | "multiple";
  collapsible?: boolean;
}

const Accordion = ({ children, className, ...props }: AccordionProps) => (
  <div className={cn("divide-y divide-border", className)} {...props}>
    {children}
  </div>
);

interface AccordionItemProps extends React.DetailsHTMLAttributes<HTMLDetailsElement> {
  value?: string;
}

const AccordionItem = ({
  children,
  className,
  ...props
}: AccordionItemProps) => (
  <details
    name="faq-accordion"
    className={cn("group border-b border-border", className)}
    {...props}
  >
    {children}
  </details>
);

const AccordionTrigger = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => (
  <summary
    className={cn(
      "flex flex-1 cursor-pointer list-none items-center justify-between py-6 text-base font-medium transition-colors hover:text-foreground [&::-webkit-details-marker]:hidden",
      className,
    )}
    {...props}
  >
    {children}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      className="size-4 shrink-0 transition-transform duration-200 group-open:rotate-180"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
    </svg>
  </summary>
);

const AccordionContent = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("pb-6 leading-7 text-secondary", className)} {...props}>
    {children}
  </div>
);

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
