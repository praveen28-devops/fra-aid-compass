import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Shield, 
  Lock, 
  User, 
  Eye, 
  EyeOff, 
  AlertCircle,
  Settings,
  Leaf,
  Trees,
  Sparkles
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false
  });
  
  const navigate = useNavigate();

  useEffect(() => {
    // Animation on mount
    setIsVisible(true);
    
    // Generate floating particles
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate authentication delay
    setTimeout(() => {
      // Demo credentials - In production, this should be handled by your backend
      if (formData.username === "admin" && formData.password === "admin123") {
        // Store admin auth token/session
        localStorage.setItem("adminAuth", "true");
        localStorage.setItem("adminUser", formData.username);
        
        // Redirect to admin panel
        navigate("/admin");
      } else {
        setError("Invalid admin credentials. Please check your username and password.");
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-forest-primary via-primary to-forest-secondary flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-forest-primary/90 via-primary/95 to-forest-secondary/90" />
        
        {/* Floating Particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
        
        {/* Animated Forest Pattern */}
        <div className="absolute inset-0 opacity-10">
          <Trees className="absolute top-10 left-10 w-8 h-8 text-white animate-bounce" style={{ animationDelay: '0s' }} />
          <Leaf className="absolute top-20 right-20 w-6 h-6 text-white animate-bounce" style={{ animationDelay: '1s' }} />
          <Trees className="absolute bottom-20 left-20 w-10 h-10 text-white animate-bounce" style={{ animationDelay: '2s' }} />
          <Leaf className="absolute bottom-10 right-10 w-4 h-4 text-white animate-bounce" style={{ animationDelay: '0.5s' }} />
          <Sparkles className="absolute top-1/3 left-1/4 w-5 h-5 text-white animate-pulse" style={{ animationDelay: '1.5s' }} />
          <Sparkles className="absolute bottom-1/3 right-1/4 w-6 h-6 text-white animate-pulse" style={{ animationDelay: '2.5s' }} />
        </div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMyIgY3k9IjMiIHI9IjEiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
      </div>
      
      <div className={`relative z-10 w-full max-w-md transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/15 backdrop-blur-md border border-white/30 mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/20">
            <Leaf className="w-5 h-5 text-white animate-pulse" />
            <span className="text-sm font-medium text-white">Aranya Setu Forest Bridge</span>
          </div>
          
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/10 rounded-3xl blur-xl animate-pulse"></div>
            <div className="relative inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-white/20 to-white/10 rounded-3xl mb-2 shadow-2xl border border-white/20 backdrop-blur-md hover:scale-105 transition-transform duration-300">
              <Shield className="w-12 h-12 text-white animate-pulse" />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 animate-fade-in">
            Admin Access
          </h1>
          <p className="text-white/80 text-lg font-medium animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Secure Administrative Portal
          </p>
          <p className="text-white/60 text-sm mt-1 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Forest Rights Management System
          </p>
        </div>

        {/* Login Card */}
        <Card className="bg-white/15 backdrop-blur-xl border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:bg-white/20 animate-scale-in">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-white flex items-center justify-center gap-3 text-2xl font-bold">
              <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm border border-white/30">
                <Lock className="w-6 h-6 animate-pulse" />
              </div>
              Administrator Portal
            </CardTitle>
            <CardDescription className="text-white/80 text-base mt-3 leading-relaxed">
              Enter your administrative credentials to access the Aranya Setu control panel
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {error && (
                <Alert className="bg-red-500/20 border-red-400/30 text-red-100 backdrop-blur-sm animate-shake">
                  <AlertCircle className="h-5 w-5 text-red-300" />
                  <AlertDescription className="text-red-100 font-medium">{error}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-3 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <Label htmlFor="username" className="text-white text-base font-semibold flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Administrator Username
                </Label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60 group-hover:text-white/80 transition-colors duration-200" />
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Enter your admin username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className="pl-12 py-4 bg-white/15 border-white/30 text-white placeholder:text-white/50 focus:border-white/60 focus:bg-white/20 transition-all duration-300 backdrop-blur-sm hover:bg-white/20 text-lg rounded-xl"
                    required
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-3 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                <Label htmlFor="password" className="text-white text-base font-semibold flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  Secure Password
                </Label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60 group-hover:text-white/80 transition-colors duration-200" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your secure password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="pl-12 pr-12 py-4 bg-white/15 border-white/30 text-white placeholder:text-white/50 focus:border-white/60 focus:bg-white/20 transition-all duration-300 backdrop-blur-sm hover:bg-white/20 text-lg rounded-xl"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-all duration-200 hover:scale-110"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>

              <div className="flex items-center space-x-3 animate-fade-in-up" style={{ animationDelay: '1s' }}>
                <Checkbox
                  id="rememberMe"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onCheckedChange={(checked) => 
                    setFormData(prev => ({ ...prev, rememberMe: checked as boolean }))
                  }
                  className="border-white/30 data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500 w-5 h-5"
                />
                <Label htmlFor="rememberMe" className="text-white/80 font-medium cursor-pointer hover:text-white transition-colors">
                  Keep me signed in for secure sessions
                </Label>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-green-500 via-green-600 to-forest-secondary hover:from-green-600 hover:via-green-700 hover:to-green-800 text-white font-bold py-4 text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 disabled:opacity-50 hover:scale-[1.02] active:scale-[0.98] rounded-xl animate-fade-in-up"
                style={{ animationDelay: '1.2s' }}
              >
                {isLoading ? (
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span className="animate-pulse">Verifying Credentials...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 animate-pulse" />
                    <span>Access Administrative Panel</span>
                    <Sparkles className="w-4 h-4 animate-bounce" />
                  </div>
                )}
              </Button>
            </form>

            {/* Demo Credentials Info */}
            <div className="mt-8 p-5 bg-gradient-to-r from-green-500/15 via-green-400/10 to-green-600/15 border border-green-400/30 rounded-2xl backdrop-blur-sm animate-fade-in-up hover:bg-green-500/20 transition-all duration-300" style={{ animationDelay: '1.4s' }}>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-500/20 rounded-lg border border-green-400/30">
                  <Settings className="w-5 h-5 text-green-300 animate-spin" style={{ animationDuration: '3s' }} />
                </div>
                <div className="text-green-100">
                  <p className="font-bold mb-2 text-base flex items-center gap-2">
                    <Sparkles className="w-4 h-4 animate-pulse" />
                    Demo Access Credentials
                  </p>
                  <div className="space-y-2">
                    <p className="flex items-center gap-2">Username: <code className="bg-green-500/30 px-3 py-1 rounded-lg font-mono text-white border border-green-400/30">admin</code></p>
                    <p className="flex items-center gap-2">Password: <code className="bg-green-500/30 px-3 py-1 rounded-lg font-mono text-white border border-green-400/30">admin123</code></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Back to Main Site */}
            <div className="mt-8 text-center animate-fade-in-up" style={{ animationDelay: '1.6s' }}>
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-all duration-300 font-medium hover:scale-105 hover:gap-3 px-4 py-2 rounded-lg hover:bg-white/10"
              >
                <Leaf className="w-4 h-4 animate-pulse" />
                Return to Aranya Setu Platform
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Security Notice */}
        <div className="mt-8 text-center animate-fade-in-up" style={{ animationDelay: '1.8s' }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <Shield className="w-4 h-4 text-white/80 animate-pulse" />
            <p className="text-sm text-white/80 font-medium">
              Secure Administrative Zone • All Access Monitored
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;