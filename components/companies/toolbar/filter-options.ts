import {
  ACTIVITY_WINDOWS,
  OWNERS,
  SEGMENTS,
  SORT_OPTIONS,
  STAGES,
} from "@/data/companies";
import { ALL_OWNERS, ANY_STAGE } from "@/lib/companies";
import type { Messages } from "@/lib/i18n/messages";

export function ownerOptions(t: Messages) {
  return [
    { value: ALL_OWNERS, label: t.companies.toolbar.allOwners },
    ...OWNERS.map((owner) => ({ value: owner.name, label: owner.name })),
  ];
}

export function stageOptions(t: Messages) {
  return [
    { value: ANY_STAGE, label: t.companies.toolbar.anyStage },
    ...[...SEGMENTS, ...STAGES].map((tag) => ({
      value: tag,
      label: t.tags[tag],
    })),
  ];
}

export function activityOptions(t: Messages) {
  return ACTIVITY_WINDOWS.map((days) => ({
    value: String(days),
    label: t.companies.toolbar.days(days),
  }));
}

export function sortMenuOptions(t: Messages) {
  return SORT_OPTIONS.map((option) => ({
    value: option.value,
    label: t.companies.toolbar.sort[option.value],
  }));
}
