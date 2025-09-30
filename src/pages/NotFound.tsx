import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Home, MapPin, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="max-w-md text-center shadow-card-custom">
        <CardHeader>
          <div className="mx-auto w-16 h-16 bg-gradient-forest rounded-full flex items-center justify-center mb-4">
            <Leaf className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-4xl font-bold text-primary mb-2">404</CardTitle>
          <p className="text-xl text-muted-foreground">Page Not Found</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            The page you're looking for doesn't exist in the FRA Atlas system.
          </p>
          
          <div className="space-y-2">
            <Button asChild variant="forest" className="w-full">
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Return to Home
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="w-full">
              <Link to="/map">
                <MapPin className="w-4 h-4 mr-2" />
                Go to Map
              </Link>
            </Button>
            
            <Button asChild variant="ghost" className="w-full">
              <button onClick={() => window.history.back()}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </button>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
