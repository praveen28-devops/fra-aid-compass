import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Users, 
  FileText, 
  BarChart3, 
  Leaf, 
  Shield,
  ArrowRight,
  Globe,
  TrendingUp,
  CheckCircle2
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-forest-dashboard.jpg";

const Index = () => {
  const features = [
    {
      icon: MapPin,
      title: "Interactive WebGIS",
      description: "Multi-layer forest mapping with real-time data visualization",
      badge: "Live Maps"
    },
    {
      icon: FileText,
      title: "AI Document Processing",
      description: "Automated OCR and NER for legacy FRA documents",
      badge: "AI Powered"
    },
    {
      icon: Users,
      title: "Multi-State Coverage",
      description: "Supporting MP, Tripura, Odisha, and Telangana operations",
      badge: "4 States"
    },
    {
      icon: BarChart3,
      title: "Decision Support",
      description: "Smart analytics for scheme eligibility and progress tracking",
      badge: "Analytics"
    }
  ];

  const stats = [
    { number: "2.1M+", label: "Forest Dwellers", icon: Users },
    { number: "850K+", label: "IFR/CFR Pattas", icon: FileText },
    { number: "4", label: "States Covered", icon: Globe },
    { number: "95%", label: "Processing Accuracy", icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              <Leaf className="w-4 h-4 mr-2" />
              Government of India Initiative
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              FRA Atlas &
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                WebGIS DSS
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              AI-Powered Forest Rights Act Management System enabling transparent, 
              efficient processing of forest rights claims across multiple states
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="lg">
                <Link to="/map">
                  Explore Interactive Map
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Link to="/dashboard">
                  Access Dashboard
                  <BarChart3 className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive FRA Management
            </h2>
            <p className="text-xl text-muted-foreground">
              Streamlining forest rights administration with cutting-edge technology 
              and AI-powered decision support
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-forest transition-all duration-300 border-0 shadow-card-custom">
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-forest rounded-xl mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <Badge variant="secondary" className="w-fit mx-auto mb-2">
                    {feature.badge}
                  </Badge>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Empowering Forest Communities
              </h2>
              
              <div className="space-y-6">
                {[
                  "Transparent claim processing with real-time tracking",
                  "AI-powered document verification reducing manual effort",
                  "Multi-language support for tribal communities",
                  "Mobile-responsive design for field operations",
                  "Integrated analytics for policy decision making"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <p className="text-lg text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
              
              <Button asChild variant="government" size="lg" className="mt-8">
                <Link to="/dss">
                  Access Decision Support System
                  <Shield className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-forest rounded-2xl blur-2xl opacity-20" />
              <Card className="relative bg-card/95 backdrop-blur border-0 shadow-forest">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <Shield className="w-8 h-8 text-primary" />
                    System Highlights
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2 text-primary">Security & Compliance</h4>
                    <p className="text-sm text-muted-foreground">
                      Government-grade security with role-based access control
                    </p>
                  </div>
                  
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2 text-primary">Real-time Integration</h4>
                    <p className="text-sm text-muted-foreground">
                      Seamless integration with existing state government systems
                    </p>
                  </div>
                  
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2 text-primary">Offline Capability</h4>
                    <p className="text-sm text-muted-foreground">
                      Field data collection works even in remote forest areas
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-forest text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform FRA Management?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join the digital transformation of forest rights administration. 
            Access powerful tools for transparent, efficient claim processing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/login">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Link to="/reports">
                View System Reports
                <FileText className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;