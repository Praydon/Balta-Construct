import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FileCheck2, HardHat, ReceiptText, ShieldCheck } from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/21st/bento-grid";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";

export const metadata: Metadata = {
  title: "О компании",
  description: "Balta Construct — команда профессиональных фасадчиков с опытом более 15 лет. Работаем официально, по договору и с закрывающими документами.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      <PageHero eyebrow="Balta Construct" title="Команда, которая отвечает за результат" text="Более 15 лет практики, профессиональное оборудование и рабочая дисциплина на каждом объекте." image="/projects/business-center.jpg" />
      <section className="section section--light">
        <div className="container about-intro">
          <Reveal><span className="eyebrow">О нас</span><h2>Работаем как строительный партнер, а не случайная бригада</h2></Reveal>
          <Reveal className="about-intro__copy"><p>Balta Construct выполняет фасадные работы для частных домов, коммерческих зданий, жилых комплексов и крупных строительных объектов. В составе команды — специалисты с опытом более 15 лет.</p><p>Мы понимаем, что фасад — это одновременно архитектура, защита здания и точная инженерная система. Поэтому уделяем внимание основанию, крепежу, геометрии, примыканиям и качеству финишной поверхности.</p></Reveal>
        </div>
      </section>
      <section className="section section--ink">
        <div className="container">
          <Reveal className="section-heading section-heading--light"><div><span className="eyebrow eyebrow--light">Принципы</span><h2>На чем держится<br />наша работа</h2></div></Reveal>
          <BentoGrid className="about-bento">
            <BentoCard className="bento-card--hero" eyebrow="Люди" title="Опытная бригада" text="Профильные мастера, которые знают технологию и понимают ответственность каждого узла." image="/projects/subsystem.jpg"><HardHat className="bento-card__icon" /></BentoCard>
            <BentoCard eyebrow="Контроль" title="Качество и сроки" text="Планируем этапы, проверяем монтаж и держим заказчика в курсе."><ShieldCheck className="bento-card__icon" /></BentoCard>
            <BentoCard eyebrow="Документы" title="Официальный договор" text="Фиксируем объем, сроки и порядок оплаты до старта работ."><FileCheck2 className="bento-card__icon" /></BentoCard>
            <BentoCard className="bento-card--wide" eyebrow="Расчеты" title="Прозрачная деловая работа" text="Принимаем безналичную оплату, учитываем налоги и предоставляем необходимые закрывающие документы."><ReceiptText className="bento-card__icon" /></BentoCard>
          </BentoGrid>
        </div>
      </section>
      <section className="section equipment-section">
        <div className="container equipment-grid">
          <Reveal className="equipment-photo"><Image src="/projects/airport-panels.jpg" alt="Монтаж сэндвич-панелей на объекте" fill sizes="(max-width: 800px) 100vw, 50vw" /></Reveal>
          <Reveal className="equipment-copy"><span className="eyebrow">Готовность к объекту</span><h2>Инструмент и оборудование — с нами</h2><p>Бригада оснащена необходимым профессиональным инструментом и оборудованием. Это позволяет быстро заходить на объект и не перекладывать организационные вопросы на заказчика.</p><Link href="/contacts#estimate" className="btn btn--accent">Пригласить на объект</Link></Reveal>
        </div>
      </section>
    </main>
  );
}
