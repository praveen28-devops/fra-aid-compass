import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Leaf, 
  Menu, 
  X, 
  MapPin, 
  BarChart3, 
  Brain, 
  FileText, 
  Settings,
  User
} from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/", icon: Leaf },
    { name: "Interactive Map", href: "/map", icon: MapPin },
    { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
    { name: "Decision Support", href: "/dss", icon: Brain },
    { name: "Reports", href: "/reports", icon: FileText },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-forest rounded-lg">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-lg font-bold text-primary">FRA Atlas</div>
              <div className="text-xs text-muted-foreground">WebGIS DSS</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Button
                key={item.name}
                asChild
                variant={isActive(item.href) ? "default" : "ghost"}
                size="sm"
                className={cn(
                  "transition-all duration-200",
                  isActive(item.href) && "bg-primary text-primary-foreground"
                )}
              >
                <Link to={item.href} className="flex items-center gap-2">
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </Link>
              </Button>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-2">
            <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex">
              <Link to="/admin">
                <Settings className="w-4 h-4 mr-2" />
                Admin
              </Link>
            </Button>
            
            <Button asChild variant="forest" size="sm">
              <Link to="/login">
                <User className="w-4 h-4 mr-2" />
                Login
              </Link>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-background/95 backdrop-blur">
            <nav className="py-4 space-y-2">
              {navigation.map((item) => (
                <Button
                  key={item.name}
                  asChild
                  variant={isActive(item.href) ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link to={item.href} className="flex items-center gap-3">
                    <item.icon className="w-5 h-5" />
                    {item.name}
                  </Link>
                </Button>
              ))}
              
              <div className="pt-2 border-t">
                <Button
                  asChild
                  variant="outline"
                  className="w-full justify-start mb-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link to="/admin" className="flex items-center gap-3">
                    <Settings className="w-5 h-5" />
                    Admin Panel
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;