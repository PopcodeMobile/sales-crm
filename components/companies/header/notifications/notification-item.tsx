import Asset from "@/components/_ui/asset";
import Avatar from "@/components/_ui/avatar";
import Button from "@/components/_ui/button";
import { useI18n } from "@/components/_common/preferences-provider";
import { ownerByName, type Company } from "@/data/companies";
import type { Notification, NotificationEvent } from "@/data/notifications";
import { formatMoney } from "@/lib/companies";
import type { Messages } from "@/lib/i18n/messages";
import { cn } from "@/lib/utils";

type NotificationItemProps = {
  notification: Notification;
  company?: Company;
  unread: boolean;
  onSelect: () => void;
};

function CompanyMark({
  company,
  className,
}: {
  company?: Company;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "bg-logo-tile flex shrink-0 items-center justify-center overflow-hidden shadow-[0px_0px_0px_1px_var(--border)]",
        className,
      )}
    >
      {company?.logo ? (
        <Asset
          type="image"
          src={company.logo}
          alt=""
          width={1}
          height={1}
          fit="contain"
          className="size-[60%]"
        />
      ) : (
        <span className="caption-style text-soft">
          {company?.name.slice(0, 1) ?? "?"}
        </span>
      )}
    </span>
  );
}

function eventMessage(
  event: NotificationEvent,
  company: string,
  t: Messages,
  locale: Parameters<typeof formatMoney>[1],
) {
  const copy = t.overlays.notifications.events;
  switch (event.type) {
    case "mention":
      return copy.mention(company);
    case "stage":
      return copy.stage(company, t.tags[event.stage]);
    case "winDrop":
      return copy.winDrop(company, event.percent);
    case "scoreUpdate":
      return copy.scoreUpdate(company);
    case "demo":
      return copy.demo(company);
    case "pipelineUp":
      return copy.pipelineUp(
        company,
        `${t.app.currency} ${formatMoney(event.value, locale)}`,
      );
    case "teamAdd":
      return copy.teamAdd(company);
  }
}

function relativeTime(minutes: number, t: Messages) {
  const copy = t.overlays.notifications.time;
  if (minutes < 60) return copy.minutes(minutes);
  if (minutes < 1440) return copy.hours(Math.round(minutes / 60));
  if (minutes < 2880) return copy.yesterday;
  return copy.days(Math.round(minutes / 1440));
}

export default function NotificationItem({
  notification,
  company,
  unread,
  onSelect,
}: NotificationItemProps) {
  const { t, locale } = useI18n();
  const actor = notification.actor ? ownerByName(notification.actor) : null;

  return (
    <li className="relative">
      <Button
        variant="item"
        size="none"
        onClick={onSelect}
        data-unread={unread}
        className="data-[unread=true]:bg-foreground/2 data-[unread=true]:hover:bg-foreground/5 p-3"
      >
        <span className="relative mt-px shrink-0">
          {actor ? (
            <>
              <Avatar src={actor.avatar} alt="" className="size-8" />
              <CompanyMark
                company={company}
                className="ring-popover absolute -right-1 -bottom-1 size-4 rounded-[5px] ring-2"
              />
            </>
          ) : (
            <CompanyMark company={company} className="size-8 rounded-lg" />
          )}
        </span>
        <span className="flex min-w-0 flex-1 flex-col gap-2 pr-4">
          <span className="p-style text-soft block">
            {actor && (
              <span className="text-foreground font-medium">{actor.name} </span>
            )}
            {eventMessage(notification.event, company?.name ?? "", t, locale)}
          </span>
          {notification.quote && (
            <span className="p-style border-line-strong text-soft bg-foreground/3 block rounded-lg border px-3 py-2">
              {t.overlays.notifications.quotes[notification.quote]}
            </span>
          )}
          <span className="caption-style text-subtle flex items-center gap-1.5">
            {relativeTime(notification.minutesAgo, t)}
            {company && (
              <>
                <span aria-hidden className="bg-subtle size-0.5 rounded-full" />
                {company.name}
              </>
            )}
          </span>
        </span>
        {unread && (
          <span className="sr-only">{t.overlays.notifications.unread}</span>
        )}
      </Button>
      {unread && (
        <span
          aria-hidden
          className="bg-danger pointer-events-none absolute top-4 right-3 size-1.5 rounded-full"
        />
      )}
    </li>
  );
}
