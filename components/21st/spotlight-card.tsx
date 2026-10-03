"use client";

import type { CSSProperties, PointerEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";

type SpotlightStyle = CSSProperties & {
  "--spotlight-x"?: string;
  "--spotlight-y"?: string;
};

export function SpotlightCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const moveSpotlight = (event: PointerEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--spotlight-x", `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty("--spotlight-y", `${event.clientY - bounds.top}px`);
  };

  return (
    <article
      className={cn("spotlight-card", className)}
      onPointerMove={moveSpotlight}
      style={{ "--spotlight-x": "50%", "--spotlight-y": "50%" } as SpotlightStyle}
    >
      {children}
    </article>
  );
}
