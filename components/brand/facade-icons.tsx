import type { ServiceIconName } from "@/lib/site-data";

export function FacadeIcon({ name }: { name: ServiceIconName }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.65,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="facade-icon" {...common}>
      {name === "layers" && (
        <>
          <path d="m7 15 17-8 17 8-17 8-17-8Z" />
          <path d="m7 24 17 8 17-8M7 33l17 8 17-8" />
        </>
      )}
      {name === "stone" && (
        <>
          <path d="M7 8h34v32H7zM7 19h34M7 30h34M18 8v11M31 19v11M20 30v10" />
          <path d="M24 12h12" className="icon-accent" />
        </>
      )}
      {name === "panel" && (
        <>
          <path d="M8 9h32v30H8zM8 24h32M24 9v30" />
          <path d="m18 18 6-6 6 6" className="icon-accent" />
        </>
      )}
      {name === "grid" && (
        <>
          <path d="M10 7v34M24 7v34M38 7v34M7 13h34M7 35h34" />
          <circle cx="24" cy="24" r="4" className="icon-accent" />
        </>
      )}
      {name === "insulation" && (
        <>
          <path d="M8 9h32v30H8z" />
          <path d="m8 33 8-18 8 18 8-18 8 18" className="icon-accent" />
        </>
      )}
      {name === "slope" && (
        <>
          <path d="M9 8h30v32H9zM16 15h16v18H16z" />
          <path d="m16 33-6 7h28l-6-7" className="icon-accent" />
        </>
      )}
      {name === "repair" && (
        <>
          <path d="M28.5 9.2a9 9 0 0 0-10.7 11.6L7.5 31.1a4.8 4.8 0 0 0 6.8 6.8l10.3-10.3A9 9 0 0 0 36.8 17l-5.4 5.4-5.8-1.6-1.6-5.8 4.5-5.8Z" />
          <path d="m10.7 34.7.1.1" className="icon-accent" />
        </>
      )}
    </svg>
  );
}
