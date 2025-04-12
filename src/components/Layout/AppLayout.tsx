
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  CreditCard,
  Receipt,
  PieChart,
  Target,
  UserCircle,
  LogOut,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface NavItemProps {
  href: string;
  icon: React.ElementType;
  title: string;
  isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon: Icon, title, isActive }) => {
  return (
    <Link to={href}>
      <Button
        variant="ghost"
        className={cn(
          "w-full justify-start gap-2 mb-1",
          isActive ? "bg-primary/10 text-primary" : "hover:bg-primary/5"
        )}
      >
        <Icon className="h-5 w-5" />
        <span>{title}</span>
      </Button>
    </Link>
  );
};

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const path = location.pathname;

  const navItems = [
    { href: "/", icon: LayoutDashboard, title: "Dashboard" },
    { href: "/transactions", icon: Receipt, title: "Transactions" },
    { href: "/subscriptions", icon: CreditCard, title: "Subscriptions" },
    { href: "/insights", icon: PieChart, title: "Insights" },
    { href: "/goals", icon: Target, title: "Goals" },
    { href: "/profile", icon: UserCircle, title: "Profile" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-between p-4 border-b">
        <Link to="/" className="flex items-center gap-2">
          <div className="rounded-full bg-primary/20 p-2">
            <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium">
              FG
            </div>
          </div>
          <span className="font-bold text-lg">FinGlow</span>
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[240px]">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="rounded-full bg-primary/20 p-2">
                <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium">
                  FG
                </div>
              </div>
              <span className="font-bold text-lg">FinGlow</span>
            </Link>
            <div className="flex flex-col">
              {navItems.map((item) => (
                <NavItem
                  key={item.href}
                  href={item.href}
                  icon={item.icon}
                  title={item.title}
                  isActive={item.href === path}
                />
              ))}
              <Link to="/auth">
                <Button variant="ghost" className="w-full justify-start gap-2 mt-6 text-destructive">
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex">
        <aside className="fixed h-screen w-64 border-r p-6 flex flex-col">
          <Link to="/" className="flex items-center gap-2 mb-10">
            <div className="rounded-full bg-primary/20 p-2">
              <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium">
                FG
              </div>
            </div>
            <span className="font-bold text-lg">FinGlow</span>
          </Link>
          <div className="flex flex-col flex-1">
            {navItems.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                icon={item.icon}
                title={item.title}
                isActive={item.href === path}
              />
            ))}
          </div>
          <Link to="/auth">
            <Button variant="ghost" className="w-full justify-start gap-2 text-destructive">
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </Button>
          </Link>
        </aside>
        <main className="ml-64 w-[calc(100%-16rem)] p-8">{children}</main>
      </div>

      {/* Mobile Content */}
      <div className="md:hidden p-4">{children}</div>
    </div>
  );
};

export default AppLayout;
