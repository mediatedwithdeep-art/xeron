import type { Metadata } from "next";
import SolutionPage, { type SolutionData } from "@/components/sections/SolutionPage";
import { TbSolarPanel } from "react-icons/tb";
import { FiCpu, FiShield, FiZap, FiClipboard, FiActivity } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Solar EPC",
  description:
    "Turnkey Solar EPC by Xeron Energy — engineering, procurement and construction of utility-grade solar plants with Tier-1 components, certified crews and net-metering handled end-to-end.",
};

const data: SolutionData = {
  crumb: "Solar EPC",
  eyebrow: "Turnkey EPC",
  title: (
    <>
      One accountable partner, <span className="text-aurora">from design to grid.</span>
    </>
  ),
  description:
    "Engineering, Procurement and Construction under one roof. Xeron owns every stage — so quality, timeline and generation are never anyone else's problem.",
  metrics: [
    { value: 1200, suffix: "+", label: "Plants delivered" },
    { value: 45, suffix: " MW", label: "Capacity installed" },
    { value: 25, suffix: " yr", label: "Performance warranty" },
    { value: 99, suffix: "%", label: "Uptime achieved" },
  ],
  overviewTitle: (
    <>
      What EPC <span className="text-aurora">actually means</span> at Xeron
    </>
  ),
  overview: [
    "EPC stands for Engineering, Procurement and Construction — the three disciplines that decide whether a solar plant merely exists or genuinely performs for 25 years.",
    "We engineer the structural and electrical design in-house, procure only bankable Tier-1 modules and inverters, and construct with certified crews we employ directly. No subcontracting, no finger-pointing.",
    "The result is a single point of accountability with a guaranteed generation profile, complete safety compliance and paperwork — net-metering and subsidy — handled entirely for you.",
  ],
  deliverables: [
    "Site feasibility & shadow analysis",
    "Structural & single-line electrical design",
    "Tier-1, DCR-compliant module procurement",
    "In-house certified installation crews",
    "Thermographic testing & commissioning",
    "DISCOM net-metering & subsidy liaisoning",
    "25-year performance warranty",
    "Lifetime remote monitoring & O&M",
  ],
  features: [
    { icon: FiCpu, title: "Precision Engineering", desc: "3D layouts and generation simulations validated by qualified electrical engineers." },
    { icon: TbSolarPanel, title: "Tier-1 Components", desc: "Bankable modules and inverters with proven degradation curves and full warranties." },
    { icon: FiShield, title: "Safety Compliance", desc: "IS/IEC-standard earthing, lightning arrest and thermographic verification on every plant." },
    { icon: FiClipboard, title: "Full Liaisoning", desc: "We file net-metering and PM Surya Ghar subsidy so you never chase an office." },
    { icon: FiZap, title: "Guaranteed Output", desc: "Contractual PLF guarantees backed by real monitoring data, not marketing claims." },
    { icon: FiActivity, title: "Lifetime O&M", desc: "24×7 monitoring, scheduled cleaning and rapid response keep generation at peak." },
  ],
};

export default function SolarEpcPage() {
  return <SolutionPage data={data} />;
}
