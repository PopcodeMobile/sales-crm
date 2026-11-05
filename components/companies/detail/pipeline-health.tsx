"use client";

import SegmentBar from "@/components/_common/segment-bar";
import { useI18n } from "@/components/_common/preferences-provider";
import type { Company } from "@/data/companies";
import { companyHealth } from "@/lib/companies";

type PipelineHealthProps = {
  company: Company;
};

export default function PipelineHealth({ company }: PipelineHealthProps) {
  const { t } = useI18n();
  const health = companyHealth(company);
  const stages = [
    {
      label: t.detail.pipelineHealth.discovery,
      value: health.discovery,
      tone: "danger" as const,
    },
    {
      label: t.detail.pipelineHealth.evaluation,
      value: health.evaluation,
      tone: "warning" as const,
    },
    {
      label: t.detail.pipelineHealth.procurement,
      value: health.procurement,
      tone: "success" as const,
    },
  ];

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-1.5">
        <span className="block text-[28px] leading-none font-semibold">
          {company.winProbability}%
        </span>
        <span className="caption-style text-soft block">
          {t.detail.pipelineHealth.winProbability}
        </span>
      </div>
      <div className="flex flex-col gap-3">
        {stages.map((stage) => (
          <div key={stage.label} className="flex flex-col gap-2">
            <div className="caption-style flex items-center justify-between">
              <span>{stage.label}</span>
              <span>{stage.value}%</span>
            </div>
            <SegmentBar
              percent={stage.value}
              segments={63}
              tone={stage.tone}
              className="border-foreground/4 h-3 w-full border px-px"
              segmentClassName="h-2"
              trackClassName="bg-foreground/8"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
