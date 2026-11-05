"use client";

import Button from "@/components/_ui/button";
import { useI18n } from "@/components/_common/preferences-provider";
import FilterMenu from "@/components/_common/filter-menu";
import MobileFilters from "./mobile-filters";
import {
  activityOptions,
  ownerOptions,
  sortMenuOptions,
  stageOptions,
} from "./filter-options";
import type { SortKey } from "@/data/companies";
import { TODAY, companiesCsvRows, filterCompanies } from "@/lib/companies";
import { downloadCsv } from "@/lib/csv";
import { useCompaniesStore } from "@/stores/companies-store";
import ShareIcon from "@/public/assets/images/companies/toolbar/share.svg";
import PlusIcon from "@/public/assets/images/_common/plus.svg";

export default function CompaniesToolbar() {
  const { t } = useI18n();
  const sortBy = useCompaniesStore((state) => state.sortBy);
  const owner = useCompaniesStore((state) => state.owner);
  const stage = useCompaniesStore((state) => state.stage);
  const activityWindow = useCompaniesStore((state) => state.activityWindow);
  const setSortBy = useCompaniesStore((state) => state.setSortBy);
  const setOwner = useCompaniesStore((state) => state.setOwner);
  const setStage = useCompaniesStore((state) => state.setStage);
  const setActivityWindow = useCompaniesStore(
    (state) => state.setActivityWindow,
  );
  const setNewCompanyOpen = useCompaniesStore(
    (state) => state.setNewCompanyOpen,
  );

  function exportCsv() {
    const { companies } = useCompaniesStore.getState();
    const visible = filterCompanies(companies, {
      sortBy,
      owner,
      stage,
      activityWindow,
    });
    downloadCsv(
      `${t.companies.csv.filenamePrefix}-${TODAY}.csv`,
      companiesCsvRows(
        visible,
        t.companies.csv.headers,
        t.tags,
        t.detail.data.interactions,
      ),
    );
  }

  return (
    <div className="flex shrink-0 flex-wrap items-center justify-between gap-2 px-4 py-4">
      <MobileFilters className="sm:hidden" />

      <div className="hidden min-w-0 flex-wrap gap-2 sm:flex">
        <FilterMenu
          label={t.companies.toolbar.sortBy}
          value={sortBy}
          options={sortMenuOptions(t)}
          onChange={(value) => setSortBy(value as SortKey)}
        />
        <FilterMenu
          label={t.companies.toolbar.filter}
          value={owner}
          options={ownerOptions(t)}
          onChange={setOwner}
        />
        <FilterMenu
          label={t.companies.toolbar.stage}
          value={stage}
          options={stageOptions(t)}
          onChange={setStage}
        />
        <FilterMenu
          label={t.companies.toolbar.lastActivity}
          value={String(activityWindow)}
          options={activityOptions(t)}
          onChange={(value) => setActivityWindow(Number(value))}
        />
      </div>

      <div className="flex shrink-0 items-center gap-1">
        <Button variant="secondary" size="sm" onClick={exportCsv}>
          <ShareIcon aria-hidden className="size-3" />
          {t.companies.toolbar.export}
        </Button>
        <Button
          variant="primary"
          size="sm"
          onClick={() => setNewCompanyOpen(true)}
        >
          <PlusIcon aria-hidden className="size-3" />
          {t.companies.toolbar.newCompany}
        </Button>
      </div>
    </div>
  );
}
