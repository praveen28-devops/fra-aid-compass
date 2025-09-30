import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Leaf, Shield, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-forest flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-3">
            <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <div className="text-white">
              <div className="text-2xl font-bold">Aranya Setu</div>
              <div className="text-sm opacity-90">Forest Bridge</div>
            </div>
          </Link>
        </div>

        {/* Login Card */}
        <Card className="shadow-forest border-0">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-primary">Secure Login</CardTitle>
            <CardDescription>
              Access the Aranya Setu Forest Rights Management System
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username / Employee ID</Label>
              <Input 
                id="username" 
                placeholder="Enter your credentials"
                className="transition-all focus:shadow-card-custom"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input 
                  id="password" 
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="pr-10 transition-all focus:shadow-card-custom"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>

            <Button className="w-full" size="lg">
              <Shield className="w-4 h-4 mr-2" />
              Login to Dashboard
            </Button>

            <div className="text-center space-y-2 text-sm">
              <Link 
                to="/forgot-password" 
                className="text-primary hover:underline"
              >
                Forgot Password?
              </Link>
              <div className="text-muted-foreground">
                For technical support, contact IT helpdesk
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Notice */}
        <div className="mt-6 text-center text-white/80 text-sm">
          <p className="mb-2">🔒 This is a secure government system</p>
          <p>Unauthorized access is prohibited and monitored</p>
        </div>
      </div>
    </div>
  );
};

export default Login;