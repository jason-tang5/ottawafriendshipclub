import { QrCode, MapPin } from "lucide-react";

import type { ORG as OrgType, GROUP_CHAT as GroupChatType } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function ContactPanel({
  org,
  groupChat,
}: {
  org: typeof OrgType;
  groupChat: typeof GroupChatType;
}) {
  return (
    <ScrollReveal>
      <p className="text-muted-foreground max-w-prose">{groupChat.note}</p>

      <div className="mt-6 flex flex-col items-start gap-6 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-center">
        {/* QR slot */}
        {groupChat.qrImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={groupChat.qrImage}
            alt="WeChat group QR code"
            className="h-32 w-32 shrink-0 rounded-xl object-cover"
          />
        ) : (
          <div className="flex h-32 w-32 shrink-0 flex-col items-center justify-center gap-1 rounded-xl border-2 border-dashed border-border bg-muted text-muted-foreground">
            <QrCode className="h-10 w-10" aria-hidden="true" />
            <span className="text-xs">QR code</span>
          </div>
        )}

        {/* Text side */}
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <p className="font-heading text-lg text-foreground">
              {groupChat.label}
            </p>
            <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-sm text-primary">
              {groupChat.platform}
            </span>
          </div>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Button
              render={<a href={`mailto:${org.email}`} />}
              nativeButton={false}
            >
              Email us
            </Button>
            <Button
              variant="outline"
              render={<a href={`tel:${org.phone.replace(/[^0-9+]/g, "")}`} />}
              nativeButton={false}
            >
              Call {org.phone}
            </Button>
          </div>
        </div>
      </div>

      <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
        <MapPin className="h-4 w-4 text-primary" />
        {org.city}
      </p>
    </ScrollReveal>
  );
}
