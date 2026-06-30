# Editing the website (Pages CMS)

The website content lives in plain data files under `/content`. Instead of editing
those by hand, an editor uses **Pages CMS** — a free website with friendly forms.
When they hit **Save**, Pages CMS saves the change to GitHub, and the site
automatically rebuilds and goes live in about 1–2 minutes.

There is **no server to run and nothing to pay for.**

---

## Part 1 — One-time setup (Jason does this once)

1. Commit and push these new files to GitHub (`master` branch):
   - `.pages.yml`
   - everything under `content/`
   - the updated `lib/content.ts`

2. Go to **https://app.pagescms.org** and click **Sign in with GitHub**.

3. Authorize Pages CMS for **this repository only**
   (`friendship-club-next`). You can choose "Only select repositories".

4. Pages CMS will detect `.pages.yml` and show the site. You'll see a left
   menu: **Events, Our groups, What we do, Gallery photos, Resources,
   Site text & settings.**

5. **Invite your dad (no GitHub account needed):**
   - In Pages CMS, open the project's **Collaborators / Settings**.
   - Invite him by **email**. He'll get a **magic-link** — a button in his
     email that logs him straight in. No password, no GitHub account.

6. Send him the bookmark: **https://app.pagescms.org** and the short guide below.

> Tip: bookmark the project URL Pages CMS gives you so it opens straight to the
> club's content.

---

## Part 2 — How to edit (for Dad)

Open **https://app.pagescms.org** and click the link in your invite email.

### To add an event
1. Click **Events** in the left menu.
2. Click **+ Add** under the Events list.
3. Fill in the boxes: Title, Upcoming or past, Date (a calendar — leave empty
   if the date isn't decided yet), Time, Location, and a Description.
   The other boxes (long description, capacity, speakers) are optional.
4. Click **Save** (top right). Done — the website updates in a minute or two.

### To delete an event
1. Click **Events**.
2. Find the event in the list and click the **trash / remove** icon next to it.
3. Click **Save**.

### To edit anything else
- **Our groups**, **What we do**, **Resources** — same idea: a list you can
  add to, edit, remove from, and reorder.
- **Gallery photos** — click **+ Add**, then **upload a photo** and type a
  caption.
- **Site text & settings** — change the About text, contact email, headings,
  the WeChat QR image, and the big banner photo.

### Golden rules
- Always click **Save** when you're finished.
- Changes take 1–2 minutes to appear on the real website.
- You can't break anything permanently — every change is saved with history,
  and Jason can undo anything.

---

## Where the content actually lives (reference)

| Menu item in Pages CMS | File it edits          |
| ---------------------- | ---------------------- |
| Events                 | `content/events.json`  |
| Our groups             | `content/groups.json`  |
| What we do             | `content/programs.json`|
| Gallery photos         | `content/gallery.json` |
| Resources              | `content/resources.json` |
| Site text & settings   | `content/settings.json`|

Photos uploaded in the Gallery are saved under `public/photos/`.
