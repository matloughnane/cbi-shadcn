import {
  Home,
  DatabaseIcon,
  ArrowRightFromLine,
  ArrowRightToLine,
  Key,
  Settings,
  Dot,
  DatabaseZap,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { useRouter } from "next/router";

const navigationItems = [
  {
    label: "Overview",
    link: "/",
    icon: <Home className="h-4 w-4" />,
    mobileIcon: <Home className="h-6 w-6" />,
  },
  {
    label: "Sources",
    link: "/integrations",
    icon: <ArrowRightFromLine className="h-4 w-4" />,
    mobileIcon: <ArrowRightFromLine className="h-6 w-6" />,
  },
  {
    label: "Targets",
    link: "/integrations",
    icon: <ArrowRightToLine className="h-4 w-4" />,
    mobileIcon: <ArrowRightToLine className="h-6 w-6" />,
  },
  {
    label: "API Management",
    link: "/api-management",
    icon: <Key className="h-4 w-4" />,
    mobileIcon: <Key className="h-6 w-6" />,
  },
  {
    label: "Settings",
    link: "/settings",
    icon: <Settings className="h-4 w-4" />,
    mobileIcon: <Settings className="h-6 w-6" />,
  },
];

export function DesktopNavigation() {
  const router = useRouter();
  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      {navigationItems.map((ni, index) => (
        <Link
          key={index}
          href={`${ni.link}`}
          className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary`}
        >
          {ni.icon}
          {`${ni.label}`}
          {router.pathname == ni.link ? (
            <Dot className="text-primary" />
          ) : (
            <></>
          )}
        </Link>
      ))}
    </nav>
  );
}

export function MobileNavigation() {
  const router = useRouter();

  return (
    <nav className="grid gap-2 text-lg font-medium">
      <Link href="#" className="flex items-center gap-2 text-lg font-semibold">
        <DatabaseZap className="h-6 w-6" />
        <span className="sr-only">CharityBI</span>
      </Link>
      {navigationItems.map((ni, index) => (
        <Link
          key={index}
          href={`${ni.link}`}
          className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
        >
          {ni.mobileIcon}
          {`${ni.label}`}
          {router.pathname == ni.link ? (
            <Dot className="text-primary" />
          ) : (
            <></>
          )}
        </Link>
      ))}
    </nav>
  );
}
