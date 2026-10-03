"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function BentoGrid({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("bento-grid", className)}>{children}</div>;
}

export function BentoCard({
  eyebrow,
  title,
  text,
  image,
  href,
  className,
  children,
}: {
  eyebrow?: string;
  title: string;
  text: string;
  image?: string;
  href?: string;
  className?: string;
  children?: ReactNode;
}) {
  const content = (
    <motion.article
      className={cn("bento-card", image && "bento-card--image", className)}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {image && (
        <>
          <Image src={image} alt="" fill sizes="(max-width: 800px) 100vw, 50vw" />
          <span className="bento-card__overlay" />
        </>
      )}
      <div className="bento-card__content">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h3>{title}</h3>
        <p>{text}</p>
        {children}
      </div>
    </motion.article>
  );

  return href ? (
    <Link href={href} className="bento-link">
      {content}
    </Link>
  ) : (
    content
  );
}
