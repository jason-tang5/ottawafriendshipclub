# Implementation Spec — Ottawa Friendship Club Website Feedback

Source: Daddy (Jianmin Tang), 16 numbered feedback items across two emails (Jun 25 & later).
Audience: agent teams implementing in parallel.

## Architecture facts (read before starting)
- Single-page site. Sections are anchored: `#about`, `#programs` ("What we do"), `#groups` ("Our groups"), `#events`, `#contact`. Nav lives in `app/page.tsx` (`NAV` array) and is reused in the footer.
- Content is meant to live in `lib/content.ts` (`ORG`, `PHOTOS`, `HERO`, `GROUP_CHAT`, `PROGRAMS`, `GROUPS`, `FUNDING`, `EVENTS`). Some copy is still hardcoded in `app/page.tsx` (About section) and section component headings — Stream E fixes that.
- Section components: `components/sections/{programs,our-groups,events,contact}.tsx`. Hero: `components/ui/animated-hero.tsx`.

## ⛔ Blocked on email attachments (cannot complete without assets)
These items need files Daddy sent by email. Scaffold the code + content structure, leave a clearly-marked placeholder, and flag for the asset to be dropped into `public/`:
- **#2** New hero background (community photo) → `public/photos/`
- **#3** Gallery photos (many) → `public/photos/gallery/`
- **#15** WeChat QR code → `public/` (e.g. `public/wechat-qr.png`)
- **#7** Additional content (About us, group activities, events) — pending; use provided text where given, leave TODO markers otherwise.

---

## Stream A — Header, nav & branding
*Files: `app/page.tsx`, `lib/content.ts`. No cross-deps; can run first.*

- **#1** Add Chinese name `渥太华联盟会` → set `ORG.nameZh = "渥太华联谊会"` in `lib/content.ts`. In the header (`app/page.tsx` ~lines 31–38) render it as a line **between** the English name (`ORG.name`) and the tagline (`ORG.tagline`). Apply the same in the footer brand block if appropriate.
- **#16** Duplicate "Contact" links top-right: header has both a nav `Contact` link (`NAV`) and a `Contact us` button. **Remove one** — recommend dropping the `Contact` entry from `NAV` and keeping the `Contact us` button (or vice-versa, but only one should remain).
- **#3 (nav)** Add **Gallery** tab to `NAV` immediately **after** Events → `{ href: "#gallery", label: "Gallery" }`.
- **#4 (nav)** Add **Resources** tab to `NAV` → `{ href: "#resources", label: "Resources" }`.

---

## Stream B — Content copy updates (text only, no new components)
*Files: `lib/content.ts`, plus heading strings in section components. Depends on Stream E if headings are centralized; otherwise edit in place.*

- **#9 About** — replace the About section copy with the exact provided text (4 paragraphs). Note: this text intentionally **keeps** the government-support mention (New Horizons for Seniors Program + Centretown Community Health Centre). Key facts: founded **July 9, 2025**, merger of the Middle-aged and Seniors Performing Arts Troupe + the Ballroom and Latin Dance Group (est. 2024); inclusive, non-political, non-religious; principle "seniors can help seniors."
- **#10 What we do (Programs)** — move "Weekly dance groups" to **1st position**, rename to **"Weekly activity groups"**, new body: *"Two active dance groups, with a third fitness group and a Mahjong group coming soon, offering members more opportunities to stay active, have fun, and build lasting friendships."* Update `PROGRAMS` order in `lib/content.ts`.
- **#8 Gardening** — ensure "Gardening" remains among the workshops (already present in `PROGRAMS`; just verify it survives the #10 reorder).
- **#11 Our groups** — now **four groups, meeting every week**. Update the section heading from "Two dance groups, meeting every week" → **"Four groups, meeting every week"** (`components/sections/our-groups.tsx` line ~40). Update `GROUPS`:
  1. Rename **"Grandma Dance Group"** → **"Grandparents Dance Group"**.
  2. **Ballroom and Latin** group — body: *"Our ballroom and Latin (cha-cha-cha) dance group with volunteer instructors that practises every week."* (this is the existing "Guo Biao Dui / 国标队" entry — confirm naming with Daddy or relabel as "Ballroom & Latin Dance Group").
  3. Add **Fitness Exercise Group (forthcoming)** — *"The group offers weekly fitness sessions to improve strength, flexibility, and overall well-being."*
  4. Add **Mahjong Group (forthcoming)** — *"A friendly Mahjong group for older seniors to enjoy recreation, social interaction, and companionship almost daily in a welcoming environment."*
  - Mark forthcoming groups visibly (e.g. a "Coming soon" badge). May need a `status?: "active" | "forthcoming"` field on the `Group` type.

---

## Stream C — Events
*Files: `lib/content.ts` (`EVENTS`), `components/sections/events.tsx`. Independent.*

> Note on #12 vs #14: #12 first asked to keep only Upcoming and leave Past empty, but the later email (#14) overrides this — **keep Past events** and add the Chinatown entry. Final state: both Upcoming and Past populated.

- **#12 Upcoming** — replace upcoming events with:
  - **Gardening Workshop** — June 28, 10:30am–12:00pm, 129 Oldfield St, Ottawa. Full description provided (vegetable + flower garden, pest control, lawn care; private garden; hands-on). Capacity: limited to 50 (first come, first served). Guest speakers: **Dr. Han Shuyou (Ph.D. in Agriculture)** and **"Kai Kai Xin Xin" – Owner of Happy Garden**. Free for all members. *(Note: needs an `EventItem` field for long description / speakers / capacity — extend the type or render the rich text.)*
  - **Digital Skills Drop-In** — Time TBD; Location TBD; Free for all members.
  - **Health & Self-Care Workshop for Seniors** — Time TBD; Location TBD; Free. Topics: safe medication use, self-care when ill, warning signs of heart attack & stroke, when/how to seek medical help.
  - **Elder-Abuse Awareness Session** — Time TBD; Location TBD; Free.
  - **Financial Safety for Seniors Workshop** — Time TBD; Free.
  - Use a placeholder date or a TBD-handling approach for events without firm dates (current `formatDate` assumes `YYYY-MM-DD`).
- **#14 Past** — add **Chinatown Night Market Performance**: May 29, 2026 2:00–3:00pm **and** May 31, 2026 6:15–8:30pm; Location: Chinatown, Ottawa. Description: *"For this year's Chinatown Night Market, the Ottawa Friendship Club's Senior Song and Dance Troupe and Ballroom and Latin Dance Team were invited to perform, presenting a vibrant artistic showcase to audiences from diverse cultural backgrounds."* (Two times — may need to handle multi-date display.)

---

## Stream D — New sections: Gallery & Resources
*Files: new `components/sections/gallery.tsx`, `components/sections/resources.tsx`; wire into `app/page.tsx` between Events and Contact; add content to `lib/content.ts`. Nav entries handled in Stream A.*

- **#3 Gallery** (`#gallery`) — photo grid section, placed after Events. Add a `GALLERY` array to `lib/content.ts` (image path + caption). ⛔ Images come from email → drop into `public/photos/gallery/`. Scaffold with placeholders until assets arrive.
- **#4 Resources** (`#resources`) — section listing useful 3rd-party links. Add a `RESOURCES` array to `lib/content.ts` (label + url + optional description). ⛔ Actual links pending from Daddy → leave a TODO list.

---

## Stream E — Make everything editable (#5)
*Files: `app/page.tsx`, all `components/sections/*`, `lib/content.ts`. Touches many files — coordinate with B & C to avoid conflicts; ideally run after them or assign one owner.*

- **#5** "We need to be able to change everything, not just events." Centralize all remaining hardcoded copy into `lib/content.ts`:
  - About section heading + paragraphs (currently hardcoded in `app/page.tsx`).
  - Section eyebrow/heading strings in `programs.tsx`, `our-groups.tsx`, `events.tsx`, `contact.tsx`.
  - Footer copy.
  - Goal: a non-developer can edit one file (`lib/content.ts`) to change any visible text.

---

## Stream F — Removals (funding)
*Files: `app/page.tsx`, `components/ui/animated-hero.tsx`, `lib/content.ts`.*

- **#13** Remove the **"Funding & Accountability"** section entirely (`app/page.tsx` ~lines 99–168, the `#funding` `<section>`).
- **#6** Remove the **government financial-support mentions** from chrome: the hero badge line "Supported by the {FUNDING.funder} · {FUNDING.amount} ({FUNDING.term})" (`animated-hero.tsx` ~lines 77–80) and the footer "Supported by the {FUNDING.funder}." line (`app/page.tsx` ~line 196).
  - **Keep** the government mention inside the new About text (#9) — that one stays.
  - After removal, prune now-unused `FUNDING` imports/usages (and consider removing `FUNDING` from `content.ts` if nothing references it).

---

## Stream G — Contact (#15)
*Files: `lib/content.ts`, `components/sections/contact.tsx`. Independent.*

- **#15** Set `ORG.email = "ottawafriendshipclub@gmail.com"`. **Remove the phone number** entirely (the `Phone` button in `contact.tsx` ~lines 74–81, and `ORG.phone`). Add the **WeChat QR code** → set `GROUP_CHAT.qrImage` to the uploaded image path. ⛔ Image from email → drop into `public/` (e.g. `public/wechat-qr.png`).

---

## Suggested execution order
1. **Stream F** (removals) + **Stream A** (header/nav) first — they reshape page structure.
2. **Streams B, C, G** in parallel (content edits, independent files).
3. **Stream D** (new sections) — needs nav from A.
4. **Stream E** (centralize content) last or single-owner, since it touches everything.
5. Final pass: `npm run build` / lint, then drop in email assets (#2, #3, #15 images) and replace placeholders.

## Open questions for Daddy
- #2: confirm which emailed photo is the new hero background.
- #11: is the ballroom group still called "Guo Biao Dui / 国标队", or rename to "Ballroom & Latin Dance Group"? Keep the 35-members count?
- #12: confirm the year for the June 28 Gardening Workshop (2026?).
- #7: awaiting additional About/activities/events content.
