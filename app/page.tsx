import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, Building2, FileCheck2, MessageCircle, Ruler, ShieldCheck } from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/21st/bento-grid";
import { SpotlightCard } from "@/components/21st/spotlight-card";
import { FacadeIcon } from "@/components/brand/facade-icons";
import { Reveal } from "@/components/site/reveal";
import { processSteps, projects, services, siteConfig, whatsappLink } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Профессиональные фасадные работы",
  description: "Монтаж вентилируемых фасадов, витражей, композитных и сэндвич-панелей в Алматы. Договор, безналичная оплата и закрывающие документы.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <main>
      <section className="home-hero">
        <Image src="/projects/facade-tower.jpg" alt="Монтаж фасада многоэтажного здания" fill priority sizes="100vw" />
        <div className="home-hero__veil" />
        <div className="hero-grid-lines" aria-hidden="true" />
        <div className="container home-hero__content">
          <Reveal className="hero-copy">
            <span className="eyebrow eyebrow--light"><span className="status-dot" /> Фасадные работы · Алматы</span>
            <h1>Фасады,<br /><em>которые держат форму.</em></h1>
            <p>Берем на себя монтаж фасадных систем любой сложности — от частного дома до крупного строительного объекта.</p>
            <div className="hero-actions">
              <Link href="/contacts#estimate" className="btn btn--accent">Рассчитать проект</Link>
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn btn--glass"><MessageCircle aria-hidden="true" /> WhatsApp</a>
            </div>
          </Reveal>
          <Reveal className="hero-fact" delay={0.16}>
            <span>Опыт команды</span>
            <strong>15<sup>+</sup></strong>
            <p>лет в фасадных работах</p>
          </Reveal>
        </div>
        <div className="container hero-trust">
          <div><BadgeCheck aria-hidden="true" /><span><strong>По договору</strong>Фиксируем условия</span></div>
          <div><FileCheck2 aria-hidden="true" /><span><strong>С документами</strong>Полный комплект</span></div>
          <div><ShieldCheck aria-hidden="true" /><span><strong>С контролем</strong>Качество и сроки</span></div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <Reveal className="section-heading">
            <div><span className="eyebrow">Подход Balta Construct</span><h2>Весь фасад —<br />в одних руках</h2></div>
            <p>Выстраиваем работу как единый процесс: от изучения чертежей и основания до монтажа финишных элементов.</p>
          </Reveal>
          <BentoGrid>
            <BentoCard className="bento-card--hero" eyebrow="01 · Опыт" title="15+ лет практики" text="Команда профессиональных фасадчиков с опытом на объектах разного масштаба." image="/projects/installation.jpg" />
            <BentoCard eyebrow="02 · Масштаб" title="От дома до ЖК" text="Подбираем состав бригады и технологию под частный, коммерческий или крупный объект." href="/projects"><Building2 className="bento-card__icon" aria-hidden="true" /></BentoCard>
            <BentoCard eyebrow="03 · Точность" title="Работа по проекту" text="Соблюдаем раскладку, узлы, допуски и последовательность монтажа." href="/services"><Ruler className="bento-card__icon" aria-hidden="true" /></BentoCard>
            <BentoCard className="bento-card--wide" eyebrow="04 · Официально" title="Подрядчик, которому удобно доверить объем" text="Договор, безналичная оплата, стоимость с учетом налогов и необходимые закрывающие документы."><div className="bento-pills"><span>Договор</span><span>Безналичная оплата</span><span>Закрывающие документы</span></div></BentoCard>
          </BentoGrid>
        </div>
      </section>

      <section className="section section--ink">
        <div className="container">
          <Reveal className="section-heading section-heading--light">
            <div><span className="eyebrow eyebrow--light">Что мы делаем</span><h2>Монтаж без<br />слабых мест</h2></div>
            <Link href="/services" className="text-link">Все услуги</Link>
          </Reveal>
          <div className="service-preview-grid">
            {services.slice(0, 4).map((service, index) => (
              <Reveal key={service.title} delay={index * 0.06}>
                <SpotlightCard className="service-preview-card">
                  <FacadeIcon name={service.icon} />
                  <span className="card-index">0{index + 1}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-tags">{service.bullets.map((item) => <span key={item}>{item}</span>)}</div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--projects">
        <div className="container">
          <Reveal className="section-heading">
            <div><span className="eyebrow">Фото с объектов</span><h2>Работа видна<br />в деталях</h2></div>
            <p>Показываем реальный процесс. Для итоговых фотографий уже подготовлен отдельный раздел — добавим их после завершения работ.</p>
          </Reveal>
          <div className="featured-projects">
            {projects.slice(0, 3).map((project, index) => (
              <Reveal className={index === 0 ? "featured-project featured-project--main" : "featured-project"} key={project.image} delay={index * 0.08}>
                <Link href="/projects">
                  <Image src={project.image} alt={project.title} fill sizes="(max-width: 800px) 100vw, 60vw" />
                  <span className="featured-project__veil" />
                  <span className="project-status">До / в работе</span>
                  <div><span>{project.category}</span><h3>{project.title}</h3></div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="section-center"><Link href="/projects" className="btn btn--outline">Смотреть все объекты</Link></div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <Reveal className="section-heading">
            <div><span className="eyebrow">Процесс</span><h2>Понятно на<br />каждом этапе</h2></div>
            <p>До начала работ согласуем состав, стоимость и сроки. В процессе держим связь и сдаем работы поэтапно.</p>
          </Reveal>
          <div className="process-line">
            {processSteps.map((item) => <Reveal className="process-item" key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></Reveal>)}
          </div>
        </div>
      </section>

      <section className="home-cta">
        <Image src="/projects/glazing.jpg" alt="Витражное остекление фасада" fill sizes="100vw" />
        <div className="home-cta__veil" />
        <Reveal className="container home-cta__content">
          <span className="eyebrow eyebrow--light">Есть чертежи или фото?</span>
          <h2>Посчитаем ваш объект</h2>
          <p>Пришлите исходные данные — подготовим предварительную оценку и предложим следующий шаг.</p>
          <div className="hero-actions"><Link href="/contacts#estimate" className="btn btn--accent">Заполнить заявку</Link><a href={siteConfig.phoneHref} className="btn btn--glass">{siteConfig.phoneDisplay}</a></div>
        </Reveal>
      </section>
    </main>
  );
}
