
import { useEffect } from "react";
import { withAdminAuth, useAdminLogout } from "@/services/sessionManager";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LogOut, Package, Users, DollarSign, Image } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const logout = useAdminLogout();
  const navigate = useNavigate();
  
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Button variant="outline" onClick={logout} className="flex items-center">
          <LogOut size={18} className="mr-2" /> Logout
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => navigate("/admin/products")}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xl">Products</CardTitle>
            <Package size={20} className="text-ckyc-gold" />
          </CardHeader>
          <CardContent>
            <CardDescription>Manage menu items, update prices and descriptions</CardDescription>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => navigate("/admin/analytics")}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xl">Analytics</CardTitle>
            <Users size={20} className="text-ckyc-gold" />
          </CardHeader>
          <CardContent>
            <CardDescription>View customer insights, trending items and visits</CardDescription>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => navigate("/admin/settings")}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xl">Settings</CardTitle>
            <DollarSign size={20} className="text-ckyc-gold" />
          </CardHeader>
          <CardContent>
            <CardDescription>Configure application settings and preferences</CardDescription>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          <Button 
            className="bg-ckyc-gold hover:bg-ckyc-gold/80 text-white"
            onClick={() => navigate("/admin/products/add")}
          >
            <Package size={18} className="mr-2" /> Add New Product
          </Button>
          <Button 
            variant="outline" 
            className="border-ckyc-gold text-ckyc-gold hover:bg-ckyc-gold hover:text-white"
            onClick={() => navigate("/admin/products/upload")}
          >
            <Image size={18} className="mr-2" /> Upload Images
          </Button>
        </div>
      </div>
    </div>
  );
};

// Wrap the component with authentication protection
export default withAdminAuth(Dashboard);
