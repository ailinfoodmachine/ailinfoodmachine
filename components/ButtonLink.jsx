import Link from "next/link";

export default function ButtonLink({ href, children, variant = "primary" }) {
  const styles =
    variant === "secondary"
      ? "border border-white/70 bg-white/10 text-white hover:bg-white hover:text-graphite"
      : "bg-signal text-white hover:bg-orange-600";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center px-6 text-sm font-black uppercase transition ${styles}`}
    >
      {children}
    </Link>
  );
}
