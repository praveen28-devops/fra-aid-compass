import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface ProtectedAdminRouteProps {
  children: React.ReactNode;
}

const ProtectedAdminRoute: React.FC<ProtectedAdminRouteProps> = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if admin is authenticated
    const adminAuth = localStorage.getItem("adminAuth");
    
    if (!adminAuth || adminAuth !== "true") {
      // Redirect to admin login if not authenticated
      navigate("/admin/login");
    }
  }, [navigate]);

  // Check authentication status
  const isAuthenticated = localStorage.getItem("adminAuth") === "true";

  // If not authenticated, don't render children (will redirect)
  if (!isAuthenticated) {
    return null;
  }

  // If authenticated, render the protected component
  return <>{children}</>;
};

export default ProtectedAdminRoute;