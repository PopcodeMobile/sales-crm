"use client";

import Asset from "@/components/_ui/asset";
import Button from "@/components/_ui/button";
import SegmentBar from "@/components/_common/segment-bar";
import { useI18n } from "@/components/_common/preferences-provider";
import type { Company } from "@/data/companies";
import { formatMoney } from "@/lib/companies";

type ProfileAccountProps = {
  company: Company;
  onOpen: () => void;
};

export default function ProfileAccount({
  company,
  onOpen,
}: ProfileAccountProps) {
  const { t, locale } = useI18n();

  return (
    <li>
      <Button
        variant="item"
        size="md"
        onClick={onOpen}
        aria-label={t.detail.profile.account.openDetails(company.name)}
        className="items-center px-2 py-2"
      >
        <span className="bg-logo-tile flex size-8 shrink-0 items-center justify-center rounded-lg shadow-[0px_0px_0px_1px_var(--border)]">
          {company.logo ? (
            <Asset
              type="image"
              src={company.logo}
              alt=""
              width={1}
              height={1}
              fit="contain"
              className="size-4"
            />
          ) : (
            <span className="caption-style text-soft">
              {company.name.slice(0, 1)}
            </span>
          )}
        </span>
        <span className="flex min-w-0 flex-1 flex-col gap-1">
          <span className="truncate">{company.name}</span>
          <span className="caption-style text-subtle truncate">
            {t.detail.profile.account.openDeals(company.openDeals)} ·{" "}
            {company.tags.map((tag) => t.tags[tag]).join(", ")}
          </span>
        </span>
        <span className="flex shrink-0 flex-col items-end gap-1.5 tabular-nums">
          <span className="flex items-center gap-1">
            <span className="text-muted-foreground">{t.app.currency}</span>
            {formatMoney(company.pipelineValue, locale)}
          </span>
          <SegmentBar percent={company.winProbability} className="w-[60px]" />
        </span>
      </Button>
    </li>
  );
}
