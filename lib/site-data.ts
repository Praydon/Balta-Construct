export const siteConfig = {
  name: "Balta Construct",
  legalName: "Balta Construct",
  description:
    "Профессиональный монтаж фасадов, витражей и сэндвич-панелей для частных, коммерческих и крупных строительных объектов.",
  phoneDisplay: "+7 700 799 0013",
  phoneHref: "tel:+77007990013",
  email: "info@baltaconstruct.kz",
  location: "Алматы и область",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://balta-construct.pit-kz002.chatgpt.site",
  navigation: [
    { href: "/services", label: "Услуги" },
    { href: "/projects", label: "Объекты" },
    { href: "/about", label: "О компании" },
    { href: "/contacts", label: "Контакты" },
  ],
};

export type ServiceIconName =
  | "layers"
  | "stone"
  | "panel"
  | "grid"
  | "insulation"
  | "slope"
  | "repair";

export const services = [
  {
    title: "Вентилируемые фасады",
    short: "Монтаж системы под ключ",
    description:
      "Проектируем узлы, монтируем подсистему, утеплитель и финишную облицовку с контролем геометрии.",
    icon: "layers" as ServiceIconName,
    bullets: ["Подсистема", "Утепление", "Облицовка"],
  },
  {
    title: "Керамогранит",
    short: "Точная раскладка и крепление",
    description:
      "Облицовка зданий керамогранитом с аккуратной подрезкой, ровными швами и надежной фиксацией.",
    icon: "stone" as ServiceIconName,
    bullets: ["Раскладка", "Подрезка", "Скрытый и открытый крепеж"],
  },
  {
    title: "Композитные панели",
    short: "Кассеты любой геометрии",
    description:
      "Изготовление и монтаж композитных кассет для современных фасадов, входных групп и парапетов.",
    icon: "panel" as ServiceIconName,
    bullets: ["Фрезеровка", "Гибка кассет", "Монтаж"],
  },
  {
    title: "Фасадная подсистема",
    short: "Надежное основание фасада",
    description:
      "Разметка, установка кронштейнов и направляющих с учетом проекта, нагрузок и особенностей основания.",
    icon: "grid" as ServiceIconName,
    bullets: ["Разметка", "Кронштейны", "Направляющие"],
  },
  {
    title: "Утепление зданий",
    short: "Энергоэффективный контур",
    description:
      "Монтаж теплоизоляции, ветрозащиты и противопожарных рассечек в составе фасадной системы.",
    icon: "insulation" as ServiceIconName,
    bullets: ["Минеральная вата", "Ветрозащита", "Рассечки"],
  },
  {
    title: "Откосы и отливы",
    short: "Завершенные примыкания",
    description:
      "Изготовление и монтаж оконных откосов, отливов и доборных элементов в едином стиле фасада.",
    icon: "slope" as ServiceIconName,
    bullets: ["Замер", "Изготовление", "Герметизация"],
  },
  {
    title: "Ремонт и демонтаж",
    short: "Безопасное обновление фасада",
    description:
      "Диагностика, локальный ремонт и демонтаж старых фасадных конструкций с подготовкой к обновлению.",
    icon: "repair" as ServiceIconName,
    bullets: ["Обследование", "Демонтаж", "Восстановление"],
  },
];

export const projects = [
  {
    title: "Фасад многоэтажного здания",
    category: "Композитные панели",
    image: "/projects/facade-tower.jpg",
    size: "large",
  },
  {
    title: "Облицовка бизнес-центра",
    category: "Вентилируемый фасад",
    image: "/projects/business-center.jpg",
    size: "small",
  },
  {
    title: "Витражное остекление",
    category: "Светопрозрачные конструкции",
    image: "/projects/glazing.jpg",
    size: "small",
  },
  {
    title: "Монтаж композитных кассет",
    category: "Фасад в процессе",
    image: "/projects/composite.jpg",
    size: "wide",
  },
  {
    title: "Подсистема и облицовка",
    category: "Монтажные работы",
    image: "/projects/subsystem.jpg",
    size: "small",
  },
  {
    title: "Сэндвич-панели",
    category: "Промышленный объект",
    image: "/projects/airport-panels.jpg",
    size: "small",
  },
  {
    title: "Жилой комплекс",
    category: "Фасадные работы",
    image: "/projects/residential.jpg",
    size: "wide",
  },
  {
    title: "Монтаж фасада",
    category: "Работы на объекте",
    image: "/projects/installation.jpg",
    size: "small",
  },
];

export const processSteps = [
  { number: "01", title: "Получаем данные", text: "Чертежи, фото, объемы или адрес объекта." },
  { number: "02", title: "Оцениваем", text: "Уточняем технологию, сроки и состав работ." },
  { number: "03", title: "Фиксируем", text: "Согласовываем смету и заключаем договор." },
  { number: "04", title: "Выполняем", text: "Монтируем, контролируем качество и сдаем этапы." },
];

export function whatsappLink(message = "Здравствуйте! Хочу обсудить фасадные работы.") {
  return `https://wa.me/77007990013?text=${encodeURIComponent(message)}`;
}
