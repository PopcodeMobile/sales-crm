"use client";

import { useCommandState } from "cmdk";
import { useI18n } from "@/components/_common/preferences-provider";
import Asset from "@/components/_ui/asset";
import Avatar from "@/components/_ui/avatar";
import { CommandItem } from "@/components/_ui/command";
import Tag from "@/components/_ui/tag";
import SegmentBar from "@/components/_common/segment-bar";
import { TAG_TONES, ownerByName, type Company } from "@/data/companies";
import { formatDate, formatMoney, splitTags } from "@/lib/companies";
import { cn } from "@/lib/utils";
import CalendarIcon from "@/public/assets/images/_common/calendar.svg";

export const COMMAND_TABLE_GRID =
  "grid grid-cols-[minmax(0,1fr)_96px] gap-x-4 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)_minmax(0,1fr)_96px] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.5fr)_minmax(0,1.1fr)_96px_120px_minmax(0,1fr)]";

const HEADERS = [
  { key: "company", className: "" },
  { key: "segmentStage", className: "hidden md:block" },
  { key: "owner", className: "hidden md:block" },
  { key: "pipeline", className: "text-right" },
  { key: "winProbability", className: "hidden text-right lg:block" },
  { key: "lastInteraction", className: "hidden lg:block" },
] as const;

export function CommandTableHeader() {
  const { t } = useI18n();
  const count = useCommandState((state) => state.filtered.count);

  if (count === 0) return null;

  return (
    <div
      aria-hidden
      className={cn(
        COMMAND_TABLE_GRID,
        "caption-style border-line-strong text-subtle h-9 items-center border-b px-4",
      )}
    >
      {HEADERS.map((header) => (
        <span key={header.key} className={cn("truncate", header.className)}>
          {t.overlays.commandMenu.headers[header.key]}
        </span>
      ))}
    </div>
  );
}

type CommandCompanyRowProps = {
  company: Company;
  onSelect: () => void;
};

export function CommandCompanyRow({
  company,
  onSelect,
}: CommandCompanyRowProps) {
  const { t, locale } = useI18n();
  const owner = ownerByName(company.owner);
  const { visible, hidden } = splitTags(company.tags);

  return (
    <CommandItem
      value={company.id}
      keywords={[
        company.name,
        company.owner,
        ...company.tags,
        ...company.tags.map((tag) => t.tags[tag]),
      ]}
      onSelect={onSelect}
      className={cn(COMMAND_TABLE_GRID, "text-foreground h-11 gap-x-4")}
    >
      <span className="flex min-w-0 items-center gap-2.5">
        <span className="bg-logo-tile flex size-6 shrink-0 items-center justify-center rounded-md shadow-[0px_0px_0px_1px_var(--border)]">
          {company.logo ? (
            <Asset
              type="image"
              src={company.logo}
              alt=""
              width={1}
              height={1}
              fit="contain"
              className="size-3.5"
            />
          ) : (
            <span className="caption-style text-soft">
              {company.name.slice(0, 1)}
            </span>
          )}
        </span>
        <span className="truncate">{company.name}</span>
      </span>

      <span className="hidden min-w-0 items-center gap-[3px] overflow-hidden md:flex">
        {visible.map((tag) => (
          <Tag key={tag} tone={TAG_TONES[tag]} size="sm">
            {t.tags[tag]}
          </Tag>
        ))}
        {hidden > 0 && (
          <Tag tone="neutral" size="sm">
            +{hidden}
          </Tag>
        )}
      </span>

      <span className="text-soft hidden min-w-0 items-center gap-1.5 md:flex">
        <Avatar src={owner.avatar} alt="" />
        <span className="truncate">{owner.name}</span>
      </span>

      <span className="flex items-center justify-end gap-1 tabular-nums">
        <span className="text-muted-foreground">{t.app.currency}</span>
        {formatMoney(company.pipelineValue, locale)}
      </span>

      <span className="hidden items-center justify-end gap-2 tabular-nums lg:flex">
        <SegmentBar percent={company.winProbability} className="w-[60px]" />
        <span className="w-[4ch] text-right">{company.winProbability}%</span>
      </span>

      <span className="text-soft hidden min-w-0 items-center gap-1 lg:flex">
        <CalendarIcon aria-hidden className="size-3.5 shrink-0" />
        <span className="shrink-0 tabular-nums">
          {formatDate(company.lastInteraction.date, locale)}
        </span>
        <span aria-hidden className="mx-[3px] h-2 w-px shrink-0 bg-foreground/15" />
        <span className="truncate">
          {t.detail.data.interactions[company.lastInteraction.label] ??
            company.lastInteraction.label}
        </span>
      </span>
    </CommandItem>
  );
}
