"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookText,
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  Settings,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

export function Sidebar({ collapsed, setCollapsed }: SidebarProps) {
  const pathname = usePathname();

  const routes = [
    // {
    //   title: "Dashboard",
    //   icon: <LayoutDashboard className="h-5 w-5" />,
    //   href: "/dashboard",
    //   active: pathname === "/dashboard",
    // },
    // {
    //   title: "Bookings",
    //   icon: <BookText className="h-5 w-5" />,
    //   href: "/bookings",
    //   active: pathname === "/bookings",
    // },
    {
      title: "My bookings",
      icon: <BookText className="h-5 w-5" />,
      href: "/my-bookings",
      active: pathname === "/my-bookings",
    },
    // {
    //   title: "Settings",
    //   icon: <Settings className="h-5 w-5" />,
    //   href: "/settings",
    //   active: pathname === "/settings",
    // },
    {
      title: "Profile",
      icon: <Users className="h-5 w-5" />,
      href: "/profile",
      active: pathname === "/profile",
    },
    {
      title: "Referral",
      icon: <Users className="h-5 w-5" />,
      href: "/referral",
      active: pathname === "/referral",
    },
    {
      title: "Support",
      icon: <Users className="h-5 w-5" />,
      href: "/support",
      active: pathname === "/support",
    },
  ];

  return (
    <div
      className={cn(
        "flex h-screen flex-col justify-between border-r bg-primary transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="px-3 py-4">
        <div className="mb-8 flex items-center justify-between">
          {!collapsed && (
            <Link
              href={"/dashboard"}
              className="text-xl font-bold uppercase tracking-wider text-white"
            >
              Dashboard
            </Link>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="ml-auto h-8 w-8 text-white"
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </Button>
        </div>
        <div className="space-y-4">
          <div className="py-2">
            <h2
              className={cn(
                "mb-2 text-xs font-semibold uppercase tracking-wider text-white/70",
                collapsed && "sr-only"
              )}
            >
              Bookings
            </h2>
            <div className="space-y-1">
              {routes.slice(0, 1).map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "flex items-center rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white/10",
                    route.active && "bg-white/10",
                    collapsed && "justify-center px-2"
                  )}
                >
                  {route.icon}
                  {!collapsed && <span className="ml-3">{route.title}</span>}
                </Link>
              ))}
            </div>
          </div>
          <div className="py-2">
            <h2
              className={cn(
                "mb-2 text-xs font-semibold uppercase tracking-wider text-white/70",
                collapsed && "sr-only"
              )}
            >
              Settings
            </h2>
            <div className="space-y-1">
              {routes.slice(1, 4).map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "flex items-center rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white/10",
                    route.active && "bg-white/10",
                    collapsed && "justify-center px-2"
                  )}
                >
                  {route.icon}
                  {!collapsed && <span className="ml-3">{route.title}</span>}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
