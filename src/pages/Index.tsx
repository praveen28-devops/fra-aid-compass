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
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center justify-center py-20 px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-forest-primary/95 via-forest-secondary/90 to-government-blue/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto text-center text-white animate-fade-in">
            <Badge variant="secondary" className="mb-6 px-6 py-2 bg-white/10 backdrop-blur-md text-white border-white/20 text-sm font-medium">
              <Leaf className="w-4 h-4 mr-2" />
              Government of India Initiative
            </Badge>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-4 leading-tight">
              Aranya Setu
            </h1>
            <p className="text-3xl md:text-4xl mb-6 font-light text-white/90">
              Forest Bridge
            </p>
            
            <p className="text-lg md:text-xl mb-10 text-white/80 max-w-3xl mx-auto leading-relaxed">
              AI-Powered Forest Rights Act Management System enabling transparent, 
              efficient processing of forest rights claims across multiple states
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild variant="premium" size="lg" className="text-base px-8 py-6">
                <Link to="/map">
                  Explore Interactive Map
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              
              <Button asChild size="lg" className="bg-white/10 border-2 border-white/30 backdrop-blur-md text-white hover:bg-white hover:text-primary text-base px-8 py-6" variant="outline">
                <Link to="/dashboard">
                  Access Dashboard
                  <BarChart3 className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-6 justify-center text-sm text-white/70">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>Secure & Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                <span>Real-time Analytics</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>Multi-stakeholder Platform</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="text-center group hover:shadow-elevated transition-all duration-300 hover:scale-105 border-2 hover:border-primary/30 bg-card/80 backdrop-blur-sm"
              >
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-forest rounded-2xl mb-4 shadow-md group-hover:shadow-forest transition-all duration-300 group-hover:rotate-6">
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-primary to-forest-secondary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground text-sm md:text-base font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <div className="inline-block mb-4 px-4 py-1 bg-primary/10 rounded-full">
              <span className="text-sm font-medium text-primary">Platform Features</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-forest-primary to-forest-secondary">
              Comprehensive Forest Rights Management
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Streamlining forest rights administration with cutting-edge technology 
              and AI-powered decision support
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-elevated transition-all duration-300 hover:scale-[1.02] border-2 hover:border-primary/20 bg-gradient-card"
              >
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-18 h-18 bg-gradient-forest rounded-2xl mb-4 shadow-md group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                    <feature.icon className="w-9 h-9 text-white" />
                  </div>
                  <Badge variant="secondary" className="w-fit mx-auto mb-3 bg-primary/10 text-primary border-0">
                    {feature.badge}
                  </Badge>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-block mb-4 px-4 py-1 bg-primary/10 rounded-full">
                <span className="text-sm font-medium text-primary">Key Advantages</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-forest-primary to-government-blue">
                Empowering Forest Communities
              </h2>
              
              <div className="space-y-5">
                {[
                  "Transparent claim processing with real-time tracking",
                  "AI-powered document verification reducing manual effort",
                  "Multi-language support for tribal communities",
                  "Mobile-responsive design for field operations",
                  "Integrated analytics for policy decision making"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-lg text-foreground font-medium pt-1">{benefit}</p>
                  </div>
                ))}
              </div>
              
              <Button asChild variant="government" size="lg" className="mt-10 text-base px-8 py-6">
                <Link to="/dss">
                  Access Decision Support System
                  <Shield className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-forest rounded-3xl blur-3xl opacity-20 animate-glow" />
              <Card className="relative bg-card/95 backdrop-blur border-2 border-primary/10 shadow-elevated hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-3xl flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-forest rounded-xl flex items-center justify-center shadow-md">
                      <Shield className="w-7 h-7 text-white" />
                    </div>
                    System Highlights
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-6 bg-gradient-card rounded-xl border border-primary/10 hover:border-primary/20 transition-all hover:shadow-md">
                    <h4 className="font-bold mb-2 text-primary text-lg">Security & Compliance</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Government-grade security with role-based access control
                    </p>
                  </div>
                  
                  <div className="p-6 bg-gradient-card rounded-xl border border-primary/10 hover:border-primary/20 transition-all hover:shadow-md">
                    <h4 className="font-bold mb-2 text-primary text-lg">Real-time Integration</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Seamless integration with existing state government systems
                    </p>
                  </div>
                  
                  <div className="p-6 bg-gradient-card rounded-xl border border-primary/10 hover:border-primary/20 transition-all hover:shadow-md">
                    <h4 className="font-bold mb-2 text-primary text-lg">Offline Capability</h4>
                    <p className="text-muted-foreground leading-relaxed">
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
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-government-blue/5 to-accent/10" />
        <div className="container mx-auto relative z-10">
          <Card className="bg-gradient-forest text-white shadow-glow border-0 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNk0zNiAyYzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
            <div className="text-center relative z-10 py-16 px-4">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Ready to Transform FRA Management?
              </h2>
              <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto leading-relaxed">
                Join the digital transformation of forest rights administration. 
                Access powerful tools for transparent, efficient claim processing.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 hover:scale-105 shadow-lg text-base px-8 py-6">
                  <Link to="/login">
                    Get Started Today
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                
                <Button asChild size="lg" className="bg-white/10 border-2 border-white/30 backdrop-blur-md text-white hover:bg-white hover:text-primary hover:scale-105 text-base px-8 py-6" variant="outline">
                  <Link to="/reports">
                    View System Reports
                    <FileText className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;