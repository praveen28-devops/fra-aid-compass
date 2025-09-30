import { Link } from "react-router-dom";
import { Leaf, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-forest rounded-lg">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-lg font-bold text-primary">FRA Atlas</div>
                <div className="text-sm text-muted-foreground">WebGIS DSS</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              AI-Powered Forest Rights Act Management System for transparent and efficient 
              forest rights administration across multiple states.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Quick Links</h3>
            <div className="space-y-2">
              {[
                { name: "Interactive Map", href: "/map" },
                { name: "Dashboard", href: "/dashboard" },
                { name: "Decision Support", href: "/dss" },
                { name: "Reports", href: "/reports" },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* States Covered */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">States Covered</h3>
            <div className="space-y-2">
              {[
                "Madhya Pradesh",
                "Tripura", 
                "Odisha",
                "Telangana"
              ].map((state) => (
                <div key={state} className="text-sm text-muted-foreground flex items-center gap-2">
                  <MapPin className="w-3 h-3" />
                  {state}
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Contact</h3>
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground flex items-center gap-2">
                <Mail className="w-4 h-4" />
                support@fra-atlas.gov.in
              </div>
              <div className="text-sm text-muted-foreground flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +91-11-2338-XXXX
              </div>
              <div className="text-sm text-muted-foreground flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                New Delhi, India
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Government of India. Forest Rights Act Atlas & WebGIS Decision Support System. 
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;