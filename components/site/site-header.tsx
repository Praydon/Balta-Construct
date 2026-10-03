"use client";

import { Menu, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/site/brand-mark";
import { trackEvent } from "@/components/site/analytics";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteConfig, whatsappLink } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " site-header--scrolled" : ""}`}>
      <div className="container site-header__inner">
        <BrandMark />

        <nav className="desktop-nav" aria-label="Основная навигация">
          {siteConfig.navigation.map((item) => (
            <Link key={item.href} href={item.href} className={pathname === item.href ? "active" : ""}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <a
            className="header-phone"
            href={siteConfig.phoneHref}
            onClick={() => trackEvent("phone_click", { placement: "header" })}
          >
            <Phone aria-hidden="true" />
            <span className="header-phone__number">{siteConfig.phoneDisplay}</span>
            <span className="header-phone__mobile">Позвонить</span>
          </a>
          <Button asChild className="btn btn--accent header-cta">
            <Link href="/contacts#estimate">Получить расчет</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button className="mobile-menu-button" variant="ghost" size="icon" aria-label="Открыть меню">
                <Menu aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent className="mobile-menu" side="right">
              <SheetHeader>
                <BrandMark />
                <SheetTitle className="sr-only">Навигация</SheetTitle>
                <SheetDescription>Фасадные работы Balta Construct</SheetDescription>
              </SheetHeader>
              <nav aria-label="Мобильная навигация">
                <SheetClose asChild>
                  <Link href="/">Главная</Link>
                </SheetClose>
                {siteConfig.navigation.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </SheetClose>
                ))}
              </nav>
              <div className="mobile-menu__contacts">
                <a href={siteConfig.phoneHref}>
                  <Phone aria-hidden="true" /> {siteConfig.phoneDisplay}
                </a>
                <a href={whatsappLink()} target="_blank" rel="noreferrer">
                  <MessageCircle aria-hidden="true" /> Написать в WhatsApp
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
