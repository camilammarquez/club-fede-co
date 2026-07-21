import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold text-sm md:text-base transition-all duration-300 ease-out px-7 py-3.5 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: "bg-navy text-cream shadow-soft hover:bg-navy-dark hover:-translate-y-0.5 hover:shadow-card active:translate-y-0",
  secondary: "bg-transparent text-navy border-2 border-navy hover:bg-navy hover:text-cream hover:-translate-y-0.5",
  ghost: "bg-white/70 text-navy backdrop-blur hover:bg-white hover:-translate-y-0.5",
};

type CommonProps = { variant?: Variant; children: ReactNode; className?: string };
type ButtonAsButton = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type ButtonAsLink = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export default function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = "primary", children, className, ...rest } = props;
  const classes = clsx(base, variants[variant], className);

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return <Link href={props.href} className={classes} {...anchorRest}>{children}</Link>;
  }
  return <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>{children}</button>;
}
