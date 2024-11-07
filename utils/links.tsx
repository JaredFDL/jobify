import { AreaChart, Layers, AppWindow } from "lucide-react";

interface NavLink {
  href: string;
  label: string;
  icon: React.ReactNode;
}

export const links: NavLink[] = [
  { href: "/add-jobs", label: "add job", icon: <Layers /> },
  { href: "/jobs", label: "all jobs", icon: <AppWindow /> },
  { href: "/stats", label: "stats", icon: <AreaChart /> },
];
