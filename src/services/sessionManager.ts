
import { adminSession } from "@/config/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Protects admin routes by checking for valid authentication
 * @param Component The component to protect
 * @returns Protected component that redirects to login if not authenticated
 */
export const withAdminAuth = (Component: React.ComponentType) => {
  return (props: any) => {
    const navigate = useNavigate();
    
    useEffect(() => {
      if (!adminSession.isValid()) {
        // Session is invalid or expired, redirect to login
        navigate("/admin/login", { 
          state: { message: "Session expired. Please log in again." }
        });
      }
      
      // Set up a timer to periodically check and extend the session
      const sessionCheckInterval = setInterval(() => {
        if (adminSession.isValid()) {
          // If user is active, extend the session
          adminSession.extend();
        } else {
          // Session expired during user activity
          navigate("/admin/login", { 
            state: { message: "Session expired. Please log in again." }
          });
        }
      }, 5 * 60 * 1000); // Check every 5 minutes
      
      return () => clearInterval(sessionCheckInterval);
    }, [navigate]);
    
    // If session is valid, render the protected component
    return <Component {...props} />;
  };
};

/**
 * Hook to handle admin logout
 * @returns Logout function
 */
export const useAdminLogout = () => {
  const navigate = useNavigate();
  
  const logout = () => {
    adminSession.end();
    navigate("/admin/login");
  };
  
  return logout;
};
