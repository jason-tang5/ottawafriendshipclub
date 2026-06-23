// Real content for the Ottawa Friendship Club site.
// Edit this file to update the whole site — copy, programs, groups, events, contact.
// Items marked "TODO" are placeholders only you can fill in (exact details, photos, links).

export const ORG = {
  name: "Ottawa Friendship Club",
  nameZh: "", // TODO: add the official Chinese name if you want it shown
  tagline: "A community for Ottawa seniors, 55 and over.",
  intro:
    "The Ottawa Friendship Club is a volunteer-run non-profit where older adults meet, move, and learn together — from weekly dance groups to practical workshops on health, money, safety, and technology.",
  // TODO: replace with your real contact details
  email: "info@ottawafriendshipclub.ca",
  phone: "(613) 000-0000",
  city: "Ottawa, Ontario",
};

// Real club photos, optimized into /public/photos. Taken at the Ottawa
// Chinatown street festival, where the club's dance groups perform.
export const PHOTOS = {
  // Wide shot of members dancing in bright costumes in the street.
  danceWide: "/photos/club-dance-wide.jpg",
  // The dancers circling, festival crowd watching.
  danceStreet: "/photos/club-dance-street.jpg",
  // Group portrait in front of the Chinatown Royal Arch.
  groupArch: "/photos/club-group-arch.jpg",
  // Dancers mid-spin in a circle.
  danceCircle: "/photos/club-dance-circle.jpg",
};

// Full-bleed photo behind the hero — a real club photo.
export const HERO = {
  heroImage: PHOTOS.danceWide,
  // Words that cycle in the animated headline.
  rotatingWords: ["welcoming", "active", "connected", "learning", "joyful"],
};

// Primary way members reach the club.
export const GROUP_CHAT = {
  platform: "WeChat",
  label: "Join our WeChat group",
  note: "Scan the QR code with WeChat to join our members' group chat.",
  qrImage: "", // TODO: add /public path to your WeChat group QR code image
};

export type Program = {
  title: string;
  body: string;
  icon: string; // lucide-react icon name
};

// What the club does for seniors — these are the real, funded activities.
export const PROGRAMS: Program[] = [
  {
    title: "Educational workshops",
    body: "Regular talks and hands-on sessions on staying healthy, active, and connected later in life.",
    icon: "GraduationCap",
  },
  {
    title: "Financial information for seniors",
    body: "Plain-language guidance on pensions, benefits, and managing money safely.",
    icon: "PiggyBank",
  },
  {
    title: "Elder-abuse awareness",
    body: "Workshops that help seniors recognize, prevent, and report abuse and fraud.",
    icon: "ShieldCheck",
  },
  {
    title: "Digital skills",
    body: "Friendly, patient help with phones, computers, and the internet — at your own pace.",
    icon: "Smartphone",
  },
  {
    title: "Gardening",
    body: "Growing things together outdoors — good for the body, the mind, and making friends.",
    icon: "Sprout",
  },
  {
    title: "Weekly dance groups",
    body: "Two active dance groups that meet every week to keep moving and have fun.",
    icon: "Music",
  },
];

export type Group = {
  name: string;
  nameZh?: string;
  members?: string;
  schedule: string;
  body: string;
};

export const GROUPS: Group[] = [
  {
    name: "Grandma Dance Group",
    schedule: "Meets weekly",
    body: "A welcoming dance group that gets together every week to move, laugh, and stay active.",
  },
  {
    name: "Guo Biao Dui",
    nameZh: "国标队",
    members: "35 members",
    schedule: "Meets weekly",
    body: "Our international-standard (ballroom) dance group, 35 members strong, practising together every week.",
  },
];

// For the funding / accountability section (the part the funder reads).
export const FUNDING = {
  funder: "Government of Canada",
  program: "New Horizons for Seniors Program", // TODO: confirm this is the correct program
  amount: "$9,800",
  term: "2025–2026", // TODO: confirm the funding year
  summary:
    "This federal grant directly funds the club's programs for seniors. Every dollar goes toward activities that keep older adults in our community healthy, informed, and connected.",
  uses: [
    "Educational workshops",
    "Financial information sessions for seniors",
    "Elder-abuse awareness workshops",
    "Digital skills training",
    "Gardening program",
  ],
};

export type EventItem = {
  title: string;
  date: string; // YYYY-MM-DD
  time: string;
  location: string;
  description: string;
  status: "upcoming" | "past";
};

// TODO: replace these with your real events. Keep status accurate ("upcoming" / "past").
export const EVENTS: EventItem[] = [
  {
    title: "Digital Skills Drop-In",
    date: "2026-06-25",
    time: "1:00 PM – 3:00 PM",
    location: "Community Centre, Ottawa",
    description:
      "Bring your phone or laptop and get one-on-one help with messaging, photos, and staying in touch with family.",
    status: "upcoming",
  },
  {
    title: "Financial Safety for Seniors Workshop",
    date: "2026-07-09",
    time: "10:00 AM – 11:30 AM",
    location: "Community Centre, Ottawa",
    description:
      "Learn how to spot scams, protect your savings, and understand your benefits. Free for all members.",
    status: "upcoming",
  },
  {
    title: "Spring Gardening Day",
    date: "2026-05-17",
    time: "9:30 AM – 12:00 PM",
    location: "Community garden, Ottawa",
    description:
      "Members planted the season's vegetables and flowers together — a sunny morning of digging and chatting.",
    status: "past",
  },
  {
    title: "Elder-Abuse Awareness Session",
    date: "2026-04-12",
    time: "2:00 PM – 3:30 PM",
    location: "Community Centre, Ottawa",
    description:
      "A guest speaker helped members recognize the signs of elder abuse and know where to turn for help.",
    status: "past",
  },
];
