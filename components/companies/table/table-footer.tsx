"use client";

import { useI18n } from "@/components/_common/preferences-provider";
import PlusIcon from "@/public/assets/images/_common/plus.svg";

type TableFooterProps = {
  count: number;
};

export default function TableFooter({ count }: TableFooterProps) {
  const { t } = useI18n();
  const calculations = [
    t.companies.footer.sumPipeline,
    t.companies.footer.avgWinProbability,
    t.companies.footer.addCalculation,
  ];

  return (
    <div className="caption-style border-border bg-background grid shrink-0 grid-cols-2 gap-px border-b p-px sm:grid-cols-4">
      <div className="outline-border flex items-center gap-2 p-3 outline-1">
        <span className="text-foreground">{count}</span>
        <span className="text-muted-foreground">
          {t.companies.footer.inView}
        </span>
      </div>
      {calculations.map((label) => (
        <div
          key={label}
          className="text-muted-foreground outline-border flex items-center gap-2 p-3 outline-1"
        >
          <PlusIcon aria-hidden className="text-muted-foreground size-3" />
          {label}
        </div>
      ))}
    </div>
  );
}
