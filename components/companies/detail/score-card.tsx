"use client";

import Avatar from "@/components/_ui/avatar";
import { useI18n } from "@/components/_common/preferences-provider";
import type { ScoreCard as ScoreCardData } from "@/data/companies";
import ClockIcon from "@/public/assets/images/companies/detail/clock.svg";
import StarFilledIcon from "@/public/assets/images/companies/detail/star-filled.svg";
import StarEmptyIcon from "@/public/assets/images/companies/detail/star-empty.svg";

type ScoreCardProps = {
  card: ScoreCardData;
};

export default function ScoreCard({ card }: ScoreCardProps) {
  const { t } = useI18n();
  const copy = t.detail.scoreCard;

  return (
    <article className="bg-card ease-power3-out hover:bg-card-hover flex flex-col gap-4 rounded-lg p-4 shadow-[0px_4px_4px_0px_var(--drop),0px_0px_0px_1px_var(--edge),inset_0px_1px_0px_0px_rgba(255,255,255,0.08),inset_0px_0px_0px_1px_rgba(255,255,255,0.08)] transition-colors duration-150">
      <div className="flex flex-col gap-2">
        <h3>{copy.cards[card.key].title}</h3>
        <p className="text-soft">{copy.cards[card.key].description}</p>
      </div>
      <div className="caption-style flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1">
            <Avatar src={card.reviewerAvatar} alt="" className="size-3" />
            {card.reviewer}
          </span>
          <span className="text-soft flex items-center gap-1">
            <ClockIcon aria-hidden className="size-3" />
            {copy.updatedHours(card.updatedHours)}
          </span>
        </div>
        <div className="flex items-center gap-1">
          {copy.verdict}
          <span
            role="img"
            aria-label={copy.stars(card.stars)}
            className="border-foreground/4 bg-foreground/6 text-line-strong flex items-center gap-px rounded-full border px-[3px] py-[2px]"
          >
            {Array.from({ length: 5 }, (_, index) =>
              index < card.stars ? (
                <StarFilledIcon key={index} aria-hidden className="size-2.5" />
              ) : (
                <StarEmptyIcon key={index} aria-hidden className="size-2.5" />
              ),
            )}
          </span>
        </div>
      </div>
    </article>
  );
}
