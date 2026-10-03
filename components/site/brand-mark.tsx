import Link from "next/link";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="brand-mark" aria-label="Balta Construct — главная">
      <svg viewBox="0 0 48 48" aria-hidden="true" className="brand-symbol">
        <path d="M8 7h17c8.1 0 13 3.8 13 10.2 0 3.4-1.7 6.2-4.7 7.8 4.3 1.5 6.7 4.9 6.7 9.5C40 42 34.5 45 25.8 45H8V7Z" />
        <path d="M16 14h8.4c3.6 0 5.4 1.3 5.4 4s-1.9 4.2-5.6 4.2H16V14Zm0 15.1h9.5c4.1 0 6.1 1.5 6.1 4.5 0 3.1-2.1 4.5-6.3 4.5H16v-9Z" />
        <path d="M8 22.5h8v6.6H8z" className="brand-accent" />
      </svg>
      {!compact && (
        <span className="brand-wordmark">
          <strong>BALTA</strong>
          <span>CONSTRUCT</span>
        </span>
      )}
    </Link>
  );
}
