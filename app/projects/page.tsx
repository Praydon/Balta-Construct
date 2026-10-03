import type { Metadata } from "next";
import Link from "next/link";
import { ProjectGallery } from "@/components/projects/project-gallery";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";

export const metadata: Metadata = {
  title: "Объекты",
  description: "Фотографии фасадных работ Balta Construct: монтаж композитных панелей, подсистем, керамогранита, витражей и сэндвич-панелей.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <main>
      <PageHero eyebrow="Реальные объекты" title="Фасад в процессе — без постановочных кадров" text="Показываем монтаж, узлы и состояние объектов до завершения. Финальные фотографии появятся здесь после сдачи." image="/projects/facade-tower.jpg" />
      <section className="section section--projects">
        <div className="container">
          <Reveal className="section-heading">
            <div><span className="eyebrow">Галерея</span><h2>До, в процессе<br />и после</h2></div>
            <p>Переключите вкладку, чтобы посмотреть текущие фотографии и подготовленные места для итоговых кадров.</p>
          </Reveal>
          <ProjectGallery />
        </div>
      </section>
      <section className="project-cta">
        <div className="container"><Reveal><span className="eyebrow eyebrow--light">Ваш объект может быть следующим</span><h2>Покажите задачу — предложим решение</h2><Link href="/contacts#estimate" className="btn btn--accent">Отправить данные объекта</Link></Reveal></div>
      </section>
    </main>
  );
}
