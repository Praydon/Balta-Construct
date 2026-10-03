import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Balta Construct — фасадные работы",
  description: "Монтаж вентилируемых фасадов, витражей, композитных и сэндвич-панелей. Работаем официально.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased">{children}</body>
    </html>
  );
}
