"use client";

import Button from "@/components/_ui/button";
import { ScrollArea } from "@/components/_ui/scroll-area";
import SidebarNavItem from "./sidebar-nav-item";
import SidebarSection from "./sidebar-section";
import { useI18n } from "@/components/_common/preferences-provider";
import { useCompaniesStore } from "@/stores/companies-store";
import Logo from "@/public/assets/images/_common/logo.svg";
import BuildingIcon from "@/public/assets/images/companies/sidebar/building.svg";
import ClipboardIcon from "@/public/assets/images/companies/sidebar/clipboard.svg";
import BarChartIcon from "@/public/assets/images/companies/sidebar/bar-chart.svg";
import ListIcon from "@/public/assets/images/companies/sidebar/list.svg";
import BookClosedIcon from "@/public/assets/images/companies/sidebar/book-closed.svg";
import MailIcon from "@/public/assets/images/companies/sidebar/mail.svg";
import TargetIcon from "@/public/assets/images/companies/sidebar/target-05.svg";
import TargetAltIcon from "@/public/assets/images/companies/sidebar/target-03.svg";
import UsersIcon from "@/public/assets/images/companies/sidebar/users.svg";
import BarChartAltIcon from "@/public/assets/images/companies/sidebar/bar-chart-10.svg";
import AlertTriangleIcon from "@/public/assets/images/companies/sidebar/alert-triangle.svg";
import DotYellow from "@/public/assets/images/companies/sidebar/dot-yellow.svg";
import DotPink from "@/public/assets/images/companies/sidebar/dot-pink.svg";
import DotPurple from "@/public/assets/images/companies/sidebar/dot-purple.svg";
import UserPlusIcon from "@/public/assets/images/companies/sidebar/user-plus.svg";
import MessageQuestionIcon from "@/public/assets/images/companies/sidebar/message-question.svg";
import WalletIcon from "@/public/assets/images/companies/sidebar/wallet.svg";

const BASE_COMPANY_COUNT = 223;

export default function SidebarContent() {
  const { t } = useI18n();
  const s = t.shell.sidebar;
  const companyCount = useCompaniesStore((state) => state.companies.length);

  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="border-sidebar-border bg-sidebar-accent flex shrink-0 items-center gap-2 border-b p-3">
        <Logo aria-hidden className="size-8 shrink-0 overflow-visible" />
        <div className="flex min-w-0 flex-col gap-1">
          <span className="lead-style block truncate font-medium tracking-[-0.01em]">
            Sales CRM
          </span>
          <span className="caption-style text-subtle block truncate">
            {s.tagline}
          </span>
        </div>
      </div>

      <ScrollArea className="min-h-0 flex-1">
        <nav aria-label={s.primaryNav}>
          <SidebarSection className="border-sidebar-border border-b">
            <SidebarNavItem
              icon={BuildingIcon}
              label={s.companies}
              count={BASE_COMPANY_COUNT + companyCount}
              active
            />
            <SidebarNavItem icon={ClipboardIcon} label={s.dealsBoard} />
            <SidebarNavItem icon={BarChartIcon} label={s.forecast} count={9} />
            <SidebarNavItem icon={ListIcon} label={s.activities} />
            <SidebarNavItem
              icon={BookClosedIcon}
              label={s.contacts}
              count={38}
            />
            <SidebarNavItem icon={MailIcon} label={s.emailSequences} />
          </SidebarSection>

          <SidebarSection
            title={s.team}
            className="border-sidebar-border border-b"
          >
            <SidebarNavItem icon={TargetIcon} label={s.strategicAEs} />
            <SidebarNavItem icon={TargetAltIcon} label={s.midMarket} />
            <SidebarNavItem icon={UsersIcon} label={s.sdrTeam} />
          </SidebarSection>

          <SidebarSection
            title={s.reporting}
            className="border-sidebar-border border-b"
          >
            <SidebarNavItem icon={BarChartAltIcon} label={s.q1Forecast} />
            <SidebarNavItem icon={AlertTriangleIcon} label={s.slippingDeals} />
          </SidebarSection>

          <SidebarSection title={s.pipelines}>
            <SidebarNavItem icon={DotYellow} label={s.northAmerica} />
            <SidebarNavItem icon={DotPink} label={s.emeaEnterprise} />
            <SidebarNavItem icon={DotPurple} label={s.apacExpansion} />
          </SidebarSection>
        </nav>
      </ScrollArea>

      <SidebarSection className="border-sidebar-border shrink-0 border-t border-b">
        <SidebarNavItem
          icon={UserPlusIcon}
          label={s.inviteTeammates}
          tone="quiet"
        />
        <SidebarNavItem
          icon={MessageQuestionIcon}
          label={s.help}
          tone="quiet"
        />
      </SidebarSection>

      <div className="border-sidebar-border bg-sidebar-accent flex shrink-0 items-center justify-between gap-2 border-b p-4">
        <div className="flex flex-col gap-2">
          <span className="lead-style block font-medium tracking-[-0.01em]">
            {s.trialDays}
          </span>
          <span className="caption-style text-subtle block">{s.trialLeft}</span>
        </div>
        <Button variant="muted" size="md">
          <WalletIcon aria-hidden className="size-3.5" />
          {s.addBilling}
        </Button>
      </div>
    </div>
  );
}
