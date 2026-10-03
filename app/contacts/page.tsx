import type { Metadata } from "next";
import { Clock3, MapPin, MessageCircle, Phone } from "lucide-react";
import { EstimateForm } from "@/components/forms/estimate-form";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { siteConfig, whatsappLink } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Контакты и расчет",
  description: "Оставьте заявку на расчет фасадных работ Balta Construct или свяжитесь по телефону и WhatsApp.",
  alternates: { canonical: "/contacts" },
};

export default function ContactsPage() {
  return (
    <main>
      <PageHero eyebrow="Связаться" title="Начнем с вашего объекта" text="Ответьте на несколько вопросов — это займет около двух минут и поможет нам точнее подготовиться к разговору." image="/projects/installation.jpg" />
      <section className="section contact-section">
        <div className="container contact-layout">
          <Reveal className="contact-aside">
            <span className="eyebrow">Контакты</span>
            <h2>Можно сразу позвонить или написать</h2>
            <p>Если у вас уже есть чертежи, ведомость объемов или фотографии — приложите их к форме либо отправьте в WhatsApp.</p>
            <div className="contact-cards">
              <a href={siteConfig.phoneHref}><Phone aria-hidden="true" /><span><small>Телефон</small><strong>{siteConfig.phoneDisplay}</strong></span></a>
              <a href={whatsappLink()} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" /><span><small>Мессенджер</small><strong>Написать в WhatsApp</strong></span></a>
              <div><MapPin aria-hidden="true" /><span><small>Регион</small><strong>{siteConfig.location}</strong></span></div>
              <div><Clock3 aria-hidden="true" /><span><small>Ответ</small><strong>Свяжемся после получения заявки</strong></span></div>
            </div>
          </Reveal>
          <Reveal delay={0.08}><EstimateForm /></Reveal>
        </div>
      </section>
    </main>
  );
}
