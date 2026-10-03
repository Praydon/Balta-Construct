"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  Building2,
  Check,
  Clipboard,
  FileCheck2,
  Grid3X3,
  HardHat,
  Layers3,
  Menu,
  MessageCircle,
  PanelTop,
  Ruler,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import { useState } from "react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const services = [
  {
    icon: Building2,
    title: "Вентилируемые фасады",
    text: "Монтаж фасадной системы с точной геометрией, вентиляционным зазором и надёжным креплением.",
  },
  {
    icon: ScanLine,
    title: "Витражи",
    text: "Стоечно-ригельные конструкции, входные группы и архитектурное остекление.",
  },
  {
    icon: PanelTop,
    title: "Сэндвич-панели",
    text: "Монтаж стеновых и кровельных панелей для коммерческих и промышленных объектов.",
  },
  {
    icon: Grid3X3,
    title: "Керамогранит",
    text: "Облицовка фасада с выверенными швами, узлами примыканий и аккуратной подрезкой.",
  },
  {
    icon: Layers3,
    title: "Композитные панели",
    text: "Изготовление кассет, монтаж подсистемы, откосов, отливов и доборных элементов.",
  },
  {
    icon: ShieldCheck,
    title: "Утепление зданий",
    text: "Комплексное утепление и облицовка с соблюдением проектных требований.",
  },
  {
    icon: Wrench,
    title: "Ремонт и демонтаж",
    text: "Локальный ремонт, замена элементов и безопасный демонтаж старого фасада.",
  },
  {
    icon: Sparkles,
    title: "Сопутствующие работы",
    text: "Берём на себя необходимые фасадные работы в рамках вашего проекта.",
  },
];

const projects = [
  { src: "/projects/facade-tower.jpg", alt: "Монтаж навесного зеркального фасада", tag: "Навесной фасад", place: "Многоэтажный объект" },
  { src: "/projects/airport-panels.jpg", alt: "Монтаж сэндвич-панелей возле аэропорта Алматы", tag: "Сэндвич-панели", place: "Алматы" },
  { src: "/projects/residential.jpg", alt: "Подготовка фасада жилого комплекса к облицовке", tag: "Подготовка", place: "Жилой комплекс" },
  { src: "/projects/glazing.jpg", alt: "Монтаж витражного остекления", tag: "Витражи", place: "Коммерческий объект" },
  { src: "/projects/composite.jpg", alt: "Монтаж композитных панелей на фасадную подсистему", tag: "Композит", place: "В процессе" },
  { src: "/projects/installation.jpg", alt: "Монтаж зеркальных фасадных панелей", tag: "Фасадные кассеты", place: "В процессе" },
  { src: "/projects/subsystem.jpg", alt: "Монтаж фасадной подсистемы", tag: "Подсистема", place: "До облицовки" },
  { src: "/projects/business-center.jpg", alt: "Высотное здание с зеркальным фасадом в процессе монтажа", tag: "Высотные работы", place: "Алматы" },
];

const steps = [
  { number: "01", title: "Получаем данные", text: "Чертежи, объёмы работ или адрес объекта для осмотра." },
  { number: "02", title: "Считаем", text: "Уточняем узлы, сроки и готовим предварительный расчёт." },
  { number: "03", title: "Фиксируем", text: "Согласовываем условия, подписываем договор и график." },
  { number: "04", title: "Монтируем", text: "Выходим на объект, контролируем качество и закрываем этапы документами." },
];

function BrandMark({ dark = false }: { dark?: boolean }) {
  return (
    <span className="brand" aria-label="Balta Construct">
      <svg className="brand-mark" viewBox="0 0 42 42" aria-hidden="true">
        <path d="M4 4h25l9 9v25H13l-9-9V4Z" fill={dark ? "#101417" : "#ffffff"} />
        <path d="M12 11h13l5 5v4H18v4h12v5l-4 4H12V11Zm6 5v4h6v-4h-6Zm0 8v4h6v-4h-6Z" fill="#ff542e" />
      </svg>
      <span className="brand-copy">
        <strong>BALTA</strong>
        <small>CONSTRUCT</small>
      </span>
    </span>
  );
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.62, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionTitle({
  index,
  eyebrow,
  children,
  inverse = false,
}: {
  index: string;
  eyebrow: string;
  children: React.ReactNode;
  inverse?: boolean;
}) {
  return (
    <div className={`section-heading ${inverse ? "section-heading-inverse" : ""}`}>
      <div className="section-kicker"><span>{index}</span>{eyebrow}</div>
      <h2>{children}</h2>
    </div>
  );
}

export default function Home() {
  const [copied, setCopied] = useState(false);
  const reduceMotion = useReducedMotion();

  async function copyBrief() {
    const brief = "Здравствуйте! Нужен расчёт фасадных работ. Тип объекта: ___. Адрес: ___. Площадь фасада: ___. Вид работ: ___. Чертежи/фото: есть / нет.";
    try {
      await navigator.clipboard.writeText(brief);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = brief;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    } finally {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    }
  }

  return (
    <main>
      <header className="site-header">
        <a href="#top" className="logo-link" aria-label="Balta Construct — на главную">
          <BrandMark />
        </a>
        <nav className="desktop-nav" aria-label="Основная навигация">
          <a href="#services">Услуги</a>
          <a href="#projects">Объекты</a>
          <a href="#process">Как работаем</a>
          <a href="#contacts">Контакты</a>
        </nav>
        <a className="header-cta" href="#contacts">
          <MessageCircle size={18} /> Обсудить объект
        </a>
        <Sheet>
          <SheetTrigger asChild>
            <button className="menu-button" aria-label="Открыть меню"><Menu /></button>
          </SheetTrigger>
          <SheetContent className="mobile-sheet">
            <SheetHeader className="mobile-sheet-header">
              <SheetTitle className="sr-only">Навигация</SheetTitle>
              <SheetDescription className="sr-only">Разделы сайта Balta Construct</SheetDescription>
              <BrandMark dark />
            </SheetHeader>
            <nav className="mobile-nav" aria-label="Мобильная навигация">
              {[
                ["Услуги", "#services"],
                ["Объекты", "#projects"],
                ["Как работаем", "#process"],
                ["Контакты", "#contacts"],
              ].map(([label, href], index) => (
                <SheetClose asChild key={href}>
                  <a href={href}><span>0{index + 1}</span>{label}</a>
                </SheetClose>
              ))}
            </nav>
            <div className="mobile-sheet-footer">
              <p>Профессиональные фасадные работы</p>
              <SheetClose asChild>
                <a href="#contacts" className="button button-primary">Получить расчёт</a>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </header>

      <section id="top" className="hero">
        <Image
          className="hero-image"
          src="/projects/business-center.jpg"
          alt="Монтаж зеркального фасада многоэтажного здания"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-shade" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <motion.div
            className="eyebrow"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            Фасадные работы любой сложности
          </motion.div>
          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
          >
            Фасад, который<br />
            <span>держит форму.</span>
          </motion.h1>
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
          >
            Монтаж вентилируемых фасадов, витражей и сэндвич-панелей.
            Работаем официально — от чертежа до готового объекта.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
          >
            <a className="button button-primary" href="#contacts">Рассчитать стоимость</a>
            <a className="button button-ghost" href="#projects">Смотреть объекты <ArrowDown size={17} /></a>
          </motion.div>
        </div>
        <div className="hero-facts" aria-label="Ключевые преимущества">
          <div><strong>15+</strong><span>лет опыта<br />в фасадах</span></div>
          <div><strong>100%</strong><span>официальная<br />работа</span></div>
          <div><strong>360°</strong><span>полный цикл<br />работ</span></div>
        </div>
        <div className="hero-caption">Объект в работе · Алматы</div>
      </section>

      <section className="intro section-shell">
        <Reveal className="intro-lead">
          <p className="overline">Balta Construct / О компании</p>
          <h2>Собираем фасад как точную инженерную систему.</h2>
        </Reveal>
        <Reveal className="intro-copy" delay={0.08}>
          <p>
            В команде — профессиональные фасадчики с опытом более 15 лет.
            Берём в работу частные дома, коммерческие здания, жилые комплексы
            и крупные строительные объекты.
          </p>
          <div className="intro-rule" />
          <p className="intro-note">
            Своя бригада, профессиональный инструмент и оборудование.
            Соблюдаем согласованные сроки и отвечаем за качество монтажа.
          </p>
        </Reveal>
      </section>

      <section id="services" className="services dark-section">
        <div className="section-shell">
          <Reveal>
            <SectionTitle index="01" eyebrow="Что делаем" inverse>
              Полный комплекс<br />фасадных работ
            </SectionTitle>
          </Reveal>
          <div className="services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} className="service-card" delay={(index % 4) * 0.05}>
                  <div className="service-top">
                    <Icon size={25} strokeWidth={1.6} />
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="projects section-shell">
        <Reveal className="projects-head">
          <SectionTitle index="02" eyebrow="Наши объекты">
            Работа видна<br />в деталях
          </SectionTitle>
          <p>
            Сейчас здесь фотографии «до» и этапы монтажа.
            После завершения добавим кадры готовых фасадов в соседнюю вкладку.
          </p>
        </Reveal>

        <Tabs defaultValue="progress" className="project-tabs">
          <TabsList className="project-tabs-list" variant="line" aria-label="Состояние объектов">
            <TabsTrigger className="project-tab" value="progress">До / в работе <span>08</span></TabsTrigger>
            <TabsTrigger className="project-tab" value="after">После <span>00</span></TabsTrigger>
          </TabsList>
          <TabsContent value="progress">
            <div className="projects-grid">
              {projects.map((project, index) => (
                <motion.figure
                  className={`project-card project-card-${index + 1}`}
                  key={project.src}
                  initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: (index % 4) * 0.05 }}
                >
                  <Image src={project.src} alt={project.alt} fill sizes="(max-width: 800px) 100vw, 40vw" />
                  <div className="project-overlay" />
                  <figcaption>
                    <span>{project.tag}</span>
                    <strong>{project.place}</strong>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="after">
            <div className="after-grid">
              {[1, 2, 3, 4].map((item) => (
                <div className="after-placeholder" key={item}>
                  <div className="blueprint" aria-hidden="true" />
                  <div className="after-icon"><HardHat size={24} /></div>
                  <span>Будущий результат</span>
                  <h3>Фото после завершения</h3>
                  <p>Место подготовлено для финального кадра объекта.</p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <section id="process" className="process">
        <div className="process-image-wrap">
          <Image
            src="/projects/composite.jpg"
            alt="Монтаж композитных фасадных панелей"
            fill
            sizes="(max-width: 900px) 100vw, 44vw"
            className="process-image"
          />
          <div className="process-image-label"><Ruler size={20} /> Точность каждого узла</div>
        </div>
        <div className="process-content">
          <Reveal>
            <SectionTitle index="03" eyebrow="Процесс">
              Понятный путь<br />от задачи к монтажу
            </SectionTitle>
          </Reveal>
          <div className="steps">
            {steps.map((step) => (
              <Reveal className="step" key={step.number}>
                <span>{step.number}</span>
                <div><h3>{step.title}</h3><p>{step.text}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="official">
        <div className="section-shell official-inner">
          <Reveal className="official-heading">
            <div className="official-icon"><FileCheck2 size={34} /></div>
            <p className="overline">Официальное сотрудничество</p>
            <h2>Документы<br />в порядке.</h2>
          </Reveal>
          <div className="official-list">
            {[
              "Заключаем договор",
              "Принимаем безналичную оплату",
              "Учитываем налоги в стоимости",
              "Предоставляем закрывающие документы",
              "Работаем как подрядчик и субподрядчик",
            ].map((item, index) => (
              <Reveal className="official-item" key={item} delay={index * 0.04}>
                <Check size={20} />
                <span>{item}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="contact dark-section">
        <div className="contact-photo">
          <Image
            src="/projects/installation.jpg"
            alt="Монтаж фасада на строительном объекте"
            fill
            sizes="(max-width: 900px) 100vw, 45vw"
          />
          <div className="contact-photo-overlay" />
        </div>
        <div className="contact-content">
          <Reveal>
            <p className="overline">Готовы обсудить объект?</p>
            <h2>Рассчитаем стоимость по чертежам или после осмотра.</h2>
            <p className="contact-lead">
              Для быстрого расчёта отправьте тип объекта, адрес, примерную площадь,
              вид работ и имеющиеся чертежи.
            </p>
          </Reveal>
          <div id="brief" className="contact-actions">
            <button className="button button-primary copy-button" onClick={copyBrief}>
              {copied ? <><Check size={18} /> Список скопирован</> : <><Clipboard size={18} /> Скопировать список для заявки</>}
            </button>
            <div className="contact-placeholder">
              <MessageCircle size={20} />
              <div><span>WhatsApp / телефон</span><strong>номер для связи будет добавлен</strong></div>
            </div>
          </div>
          <div className="contact-bottom">
            <span>Balta Construct</span>
            <span>Фасадные работы</span>
            <span>Казахстан</span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <a href="#top" aria-label="Наверх"><BrandMark dark /></a>
        <p>© 2026 Balta Construct. Профессиональные фасадные работы.</p>
        <a href="#top" className="to-top">Наверх <ArrowUpRight size={15} /></a>
      </footer>
    </main>
  );
}
