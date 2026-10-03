import Image from "next/image";
import { Reveal } from "@/components/site/reveal";

export function PageHero({
  eyebrow,
  title,
  text,
  image,
}: {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
}) {
  return (
    <section className="page-hero">
      <Image src={image} alt="" fill priority sizes="100vw" />
      <div className="page-hero__veil" />
      <div className="container page-hero__content">
        <Reveal>
          <span className="eyebrow eyebrow--light">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{text}</p>
        </Reveal>
      </div>
    </section>
  );
}
