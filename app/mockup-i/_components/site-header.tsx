"use client";

const NAV = [
  { en: "Home", zh: "首页", href: "#home", active: true },
  { en: "Activities", zh: "活动", href: "#activities" },
  { en: "Sponsors", zh: "赞助", href: "#sponsors" },
  { en: "Management", zh: "管理", href: "#management" },
  { en: "Resources", zh: "资源", href: "#resources" },
  { en: "Gallery", zh: "相册", href: "#gallery" },
  { en: "Contact Us", zh: "联系我们", href: "#contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6">
        {/* Brand lockup */}
        <a
          href="#home"
          className="flex items-center gap-3 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/ofc-heart-logo.png"
            alt="Ottawa Friendship Club heart logo"
            width={60}
            height={60}
            className="h-14 w-14 shrink-0 sm:h-[60px] sm:w-[60px]"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-heading text-lg font-bold text-foreground sm:text-xl">
              Ottawa Friendship Club
            </span>
            <span className="text-sm font-medium text-green-700">渥太华联谊会</span>
          </span>
        </a>

        {/* Nav */}
        <nav aria-label="Primary">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 sm:gap-x-6">
            {NAV.map((item) => (
              <li key={item.en}>
                <a
                  href={item.href}
                  className={
                    "flex flex-col items-center rounded-md px-1 py-0.5 text-center leading-tight outline-none transition-colors focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2 " +
                    (item.active
                      ? "text-green-700"
                      : "text-foreground hover:text-green-700")
                  }
                >
                  <span className="text-sm font-semibold">{item.en}</span>
                  <span
                    className={
                      "text-xs " +
                      (item.active ? "text-green-700" : "text-muted-foreground")
                    }
                  >
                    {item.zh}
                  </span>
                  <span
                    className={
                      "mt-1 h-0.5 w-6 rounded-full " +
                      (item.active ? "bg-green-700" : "bg-transparent")
                    }
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
