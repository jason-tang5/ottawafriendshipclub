// Bilingual content for Mockup B. Lowkey, real Ottawa Friendship Club copy.
// Chinese is a first-draft translation — TODO: have a native speaker review.

export type Lang = "en" | "zh";

type Card = {
  title: string;
  image: string;
  alt: string;
};

type Content = {
  nav: { label: string; href: string }[];
  navCta: string;
  brand: string;
  eyebrow: string;
  // Headline is split so a rotating word can sit at the end.
  headLead: string;
  rotating: string[];
  heroBody: string;
  heroPrimary: string;
  heroSecondary: string;
  scroll: string;
  intro: string;
  sectionEyebrow: string;
  sectionTitle: string;
  cards: Card[];
  ctaLabel: string;
  ctaBody: string;
  ctaButton: string;
  footer: string;
  langButton: string;
  values: string[];
};

// Real club photos from the Ottawa Chinatown festival, optimized in /public/photos.
const IMG = {
  dance: "/photos/club-dance-wide.jpg",
  workshop: "/photos/club-group-arch.jpg",
  garden: "/photos/club-dance-street.jpg",
  digital: "/photos/club-dance-circle.jpg",
};

export const CONTENT: Record<Lang, Content> = {
  en: {
    brand: "Ottawa Friendship Club",
    nav: [
      { label: "About", href: "#top" },
      { label: "What we do", href: "#programs" },
      { label: "Groups", href: "#programs" },
      { label: "Contact", href: "#contact" },
    ],
    navCta: "Get in touch",
    eyebrow: "Ottawa · Seniors 55+",
    headLead: "A community that's",
    rotating: ["welcoming", "active", "connected", "learning", "joyful"],
    heroBody:
      "A volunteer-run club where older adults in Ottawa meet, move, and learn together — from weekly dance groups to friendly workshops on health, money, and technology.",
    heroPrimary: "Get in touch",
    heroSecondary: "What we do",
    scroll: "Scroll",
    intro:
      "We started small, and we still are. A few neighbours, a shared room, and a wish to grow older together rather than apart.",
    sectionEyebrow: "What we do",
    sectionTitle: "Time together, every week",
    cards: [
      { title: "Weekly dance groups", image: IMG.dance, alt: "Club members dancing in bright costumes at the Ottawa Chinatown festival" },
      { title: "Workshops & talks", image: IMG.workshop, alt: "Club members gathered for a group portrait at the Chinatown arch" },
      { title: "Gardening", image: IMG.garden, alt: "Club dancers performing in the street as a crowd watches" },
      { title: "Digital skills", image: IMG.digital, alt: "Club members dancing together in a circle" },
    ],
    ctaLabel: "Come say hello",
    ctaBody:
      "Everyone 55 and over is welcome. Drop by, bring a friend, or just send us a message.",
    ctaButton: "Contact us",
    footer: "Ottawa Friendship Club — a volunteer-run non-profit for seniors.",
    langButton: "中文",
    values: ["Connect", "Engage", "Enrich", "Thrive"],
  },
  zh: {
    brand: "渥太华联谊会",
    nav: [
      { label: "关于我们", href: "#top" },
      { label: "活动", href: "#programs" },
      { label: "团体", href: "#programs" },
      { label: "联系我们", href: "#contact" },
    ],
    navCta: "联系我们",
    eyebrow: "渥太华 · 55岁以上长者",
    headLead: "一个让人感到",
    rotating: ["温暖", "活力", "连结", "学习", "快乐", "的社区"],
    heroBody:
      "由义工运营的社区团体，让渥太华的长者一起聚会、活动、学习——从每周的舞蹈班，到关于健康、理财和科技的轻松讲座。",
    heroPrimary: "联系我们",
    heroSecondary: "我们的活动",
    scroll: "向下滑动",
    intro:
      "我们从很小开始，至今依然如此。几位邻居，一间共用的活动室，和一个共同的心愿：一起慢慢变老，而不是各自孤单。",
    sectionEyebrow: "我们的活动",
    sectionTitle: "每周相聚的时光",
    cards: [
      { title: "每周舞蹈班", image: IMG.dance, alt: "舞蹈队身穿亮丽服装在渥太华华埠节日上表演" },
      { title: "讲座与工作坊", image: IMG.workshop, alt: "会员在华埠牌楼前合影" },
      { title: "园艺活动", image: IMG.garden, alt: "舞蹈队在街上表演，观众围观" },
      { title: "数码技能", image: IMG.digital, alt: "会员围成圈一起跳舞" },
    ],
    ctaLabel: "来打个招呼吧",
    ctaBody: "欢迎所有55岁及以上的朋友。随时来坐坐，带上朋友，或给我们留个言。",
    ctaButton: "联系我们",
    footer: "渥太华联谊会 —— 由义工运营、服务长者的非营利组织。",
    langButton: "EN",
    values: ["联谊", "参与", "丰富", "成长"],
  },
};
