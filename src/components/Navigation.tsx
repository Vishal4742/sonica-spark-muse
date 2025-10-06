import { Link, useLocation } from "react-router-dom";
import { Music2, Mic2, Search, User } from "lucide-react";
import { cn } from "@/lib/utils";

export const Navigation = () => {
  const location = useLocation();

  const links = [
    { to: "/", label: "Home", icon: Music2 },
    { to: "/recognize", label: "Recognize", icon: Mic2 },
    { to: "/search", label: "Search", icon: Search },
    { to: "/profile", label: "Profile", icon: User },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Music2 className="h-8 w-8 text-primary animate-glow-pulse" />
            <span className="text-2xl font-black bg-gradient-to-r from-anime-purple via-anime-pink to-anime-blue bg-clip-text text-transparent">
              Sonica
            </span>
          </Link>

          <div className="flex items-center gap-1">
            {links.map(({ to, label, icon: Icon }) => {
              const isActive = location.pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300",
                    isActive
                      ? "bg-primary/20 text-primary font-semibold glow-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};
