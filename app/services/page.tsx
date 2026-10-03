import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { SpotlightCard } from "@/components/21st/spotlight-card";
import { FacadeIcon } from "@/components/brand/facade-icons";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Услуги",
  description: "Монтаж вентилируемых фасадов, керамогранита, композитных и сэндвич-панелей, утепление, откосы, отливы и ремонт фасадов.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero eyebrow="Полный комплекс" title="Фасадные решения для объектов любого масштаба" text="Выполняем отдельные этапы или берем фасад под ключ — с профессиональной бригадой, инструментом и оборудованием." image="/projects/glazing.jpg" />
      <section className="section section--ink">
        <div className="container">
          <Reveal className="section-heading section-heading--light">
            <div><span className="eyebrow eyebrow--light">Направления работ</span><h2>От подсистемы<br />до последней детали</h2></div>
            <p>Состав работ определяем после осмотра объекта или по предоставленным чертежам и объемам.</p>
          </Reveal>
          <div className="service-catalog">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={(index % 3) * 0.06}>
                <SpotlightCard className="service-detail-card">
                  <div className="service-card-top"><FacadeIcon name={service.icon} /><span>{String(index + 1).padStart(2, "0")}</span></div>
                  <p className="service-kicker">{service.short}</p>
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                  <ul>{service.bullets.map((item) => <li key={item}><CheckCircle2 aria-hidden="true" />{item}</li>)}</ul>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section service-scope">
        <div className="container scope-grid">
          <Reveal><span className="eyebrow">Формат сотрудничества</span><h2>Подряд и субподряд</h2></Reveal>
          <Reveal className="scope-copy">
            <p>Работаем с частными заказчиками, застройщиками и генеральными подрядчиками. Можем зайти на весь объем фасада или усилить команду на конкретном этапе.</p>
            <div className="scope-list"><span>Частные дома</span><span>Коммерческие здания</span><span>Жилые комплексы</span><span>Строительные объекты</span></div>
            <Link href="/contacts#estimate" className="btn btn--accent">Обсудить объем работ</Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
