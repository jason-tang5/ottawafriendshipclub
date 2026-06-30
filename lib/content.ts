// Typed interface to the site's content.
//
// ⚠️ Do NOT edit the words/data here — the actual content lives in the JSON files
// under /content (settings.json, events.json, groups.json, programs.json,
// gallery.json, resources.json). Those files are what the website editor
// (Pages CMS) changes. This file only imports them and adds TypeScript types so
// the rest of the app gets autocomplete and type-checking.

import settings from "@/content/settings.json";
import programsData from "@/content/programs.json";
import groupsData from "@/content/groups.json";
import eventsData from "@/content/events.json";
import galleryData from "@/content/gallery.json";
import resourcesData from "@/content/resources.json";

// --- Org / identity -------------------------------------------------------
export const ORG = settings.org;

// --- About section --------------------------------------------------------
export const ABOUT = settings.about;

// --- Section eyebrows/headings/intros used across the page -----------------
export const SECTIONS = settings.sections;

// --- Hero (full-bleed photo + rotating words) -----------------------------
export const HERO = settings.hero;

// --- WeChat group chat panel ----------------------------------------------
export const GROUP_CHAT = settings.groupChat;

// --- Programs ("What we do") ----------------------------------------------
export type Program = {
  title: string;
  body: string;
  icon: string; // lucide-react icon name: GraduationCap | PiggyBank | ShieldCheck | Smartphone | Sprout | Music
};
export const PROGRAMS: Program[] = programsData.items;

// --- Groups ("Our groups") ------------------------------------------------
export type Group = {
  name: string;
  nameZh?: string;
  members?: string;
  schedule: string;
  body: string;
  status: "active" | "forthcoming";
};
export const GROUPS: Group[] = groupsData.items as Group[];

// --- Events ---------------------------------------------------------------
export type EventItem = {
  title: string;
  date: string; // YYYY-MM-DD or "" (empty = "Date TBD")
  time: string;
  location: string;
  description: string;
  status: "upcoming" | "past";
  longDescription?: string;
  speakers?: string[];
  capacity?: string;
};
export const EVENTS: EventItem[] = eventsData.items as EventItem[];

// --- Gallery --------------------------------------------------------------
export type GalleryPhoto = {
  src: string;
  caption: string;
};
export const GALLERY: GalleryPhoto[] = galleryData.items;

// --- Resources ------------------------------------------------------------
export type ResourceLink = {
  label: string;
  url: string;
  description: string;
};
export const RESOURCES: ResourceLink[] = resourcesData.items;
