import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = { title: "Заявка отправлена", robots: { index: false, follow: false } };

export default function ThanksPage() {
  return (
    <main className="thanks-page">
      <div className="container thanks-card">
        <CheckCircle2 aria-hidden="true" />
        <span className="eyebrow eyebrow--light">Заявка получена</span>
        <h1>Спасибо. Мы свяжемся с вами.</h1>
        <p>Если вопрос срочный, позвоните нам по номеру {siteConfig.phoneDisplay}.</p>
        <div className="hero-actions"><Link href="/" className="btn btn--accent">На главную</Link><a href={siteConfig.phoneHref} className="btn btn--glass"><Phone aria-hidden="true" />Позвонить</a></div>
      </div>
    </main>
  );
}
