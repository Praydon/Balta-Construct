import { MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { BrandMark } from "@/components/site/brand-mark";
import { services, siteConfig, whatsappLink } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-intro">
          <BrandMark />
          <p>Фасадные работы для частных, коммерческих и крупных строительных объектов.</p>
        </div>
        <div>
          <h2>Навигация</h2>
          <nav>
            {siteConfig.navigation.map((item) => (
              <Link href={item.href} key={item.href}>{item.label}</Link>
            ))}
          </nav>
        </div>
        <div>
          <h2>Направления</h2>
          <nav>
            {services.slice(0, 4).map((service) => (
              <Link href="/services" key={service.title}>{service.title}</Link>
            ))}
          </nav>
        </div>
        <div className="footer-contact">
          <h2>Связаться</h2>
          <a href={siteConfig.phoneHref}><Phone aria-hidden="true" />{siteConfig.phoneDisplay}</a>
          <a href={whatsappLink()} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" />WhatsApp</a>
          <p>{siteConfig.location}</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Balta Construct</span>
        <span>Работаем официально · Договор · Безналичная оплата</span>
      </div>
    </footer>
  );
}
