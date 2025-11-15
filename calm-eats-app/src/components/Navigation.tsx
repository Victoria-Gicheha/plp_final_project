import { NavLink } from "./NavLink";
import { Home, Heart, UtensilsCrossed, Lightbulb, Phone } from "lucide-react";

const Navigation = () => {
  const navItems = [
    { to: "/", icon: Home, label: "Home" },
    { to: "/mood", icon: Heart, label: "Mood" },
    { to: "/meals", icon: UtensilsCrossed, label: "Meals" },
    { to: "/tips", icon: Lightbulb, label: "Tips" },
    { to: "/help", icon: Phone, label: "Help" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border md:top-0 md:bottom-auto md:border-b shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-around md:justify-center md:gap-8 py-3">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              className="flex flex-col md:flex-row items-center gap-1 md:gap-2 px-3 py-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent/50 transition-all"
              activeClassName="text-primary bg-accent font-medium"
            >
              <Icon className="h-5 w-5" />
              <span className="text-xs md:text-sm">{label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
