"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ImagePlus } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects } from "@/lib/site-data";

export function ProjectGallery() {
  return (
    <Tabs defaultValue="before" className="project-tabs">
      <TabsList variant="line" aria-label="Состояние объектов">
        <TabsTrigger value="before">До и в процессе</TabsTrigger>
        <TabsTrigger value="after">После завершения</TabsTrigger>
      </TabsList>
      <TabsContent value="before">
        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.article
              className={`project-card project-card--${project.size}`}
              key={project.image}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: Math.min(index * 0.05, 0.3), duration: 0.55 }}
            >
              <Image src={project.image} alt={project.title} fill sizes="(max-width: 760px) 100vw, 50vw" />
              <div className="project-card__scrim" />
              <span className="project-status">До / в работе</span>
              <div className="project-card__caption">
                <span>{project.category}</span>
                <h2>{project.title}</h2>
              </div>
            </motion.article>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="after">
        <div className="after-grid">
          {[1, 2, 3, 4].map((item) => (
            <article className="after-placeholder" key={item}>
              <ImagePlus aria-hidden="true" />
              <h2>Фото после завершения</h2>
              <p>Место подготовлено — добавим итоговый кадр объекта, когда вы его пришлете.</p>
            </article>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
