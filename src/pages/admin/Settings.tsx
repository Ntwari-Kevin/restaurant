
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/components/ui/use-toast";

const Settings = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSave = (section: string) => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Settings saved",
        description: `${section} settings have been updated successfully.`,
      });
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
      </div>

      <Tabs defaultValue="website">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="website">Website</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>
        
        <TabsContent value="website" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Website Information</CardTitle>
              <CardDescription>
                Update your restaurant's basic information displayed on the website
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="restaurant-name">Restaurant Name</Label>
                <Input id="restaurant-name" defaultValue="CKYC Lounge" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tagline">Tagline</Label>
                <Input id="tagline" defaultValue="Savor the Flavors of Kigali" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  rows={4}
                  defaultValue="CKYC Lounge is Kigali's premier dining destination, offering a fusion of international and Rwandan cuisine in a stylish, upscale setting with stunning city views."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" defaultValue="Kigali City, Rwanda" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" defaultValue="+250 788 123 456" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" defaultValue="info@ckyclounge.rw" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={() => handleSave("Website")}
                disabled={loading}
                className="bg-ckyc-gold hover:bg-ckyc-gold/80"
              >
                {loading ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Social Media</CardTitle>
              <CardDescription>
                Connect your social media accounts
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="instagram">Instagram</Label>
                <Input id="instagram" defaultValue="https://www.instagram.com/ckyclounge/" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="facebook">Facebook</Label>
                <Input id="facebook" defaultValue="https://www.facebook.com/ckyclounge" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="twitter">Twitter</Label>
                <Input id="twitter" defaultValue="https://twitter.com/ckyclounge" />
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={() => handleSave("Social media")}
                disabled={loading}
                className="bg-ckyc-gold hover:bg-ckyc-gold/80"
              >
                {loading ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="account" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>
                Update your admin account information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="admin-name">Admin Name</Label>
                <Input id="admin-name" defaultValue="Restaurant Manager" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="admin-email">Email Address</Label>
                <Input id="admin-email" defaultValue="admin@ckyclounge.rw" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={() => handleSave("Account")}
                disabled={loading}
                className="bg-ckyc-gold hover:bg-ckyc-gold/80"
              >
                {loading ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="integrations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Integrations</CardTitle>
              <CardDescription>
                Manage your API keys and external service integrations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between space-x-2">
                <div className="space-y-0.5">
                  <Label>Cloudinary Integration</Label>
                  <p className="text-sm text-muted-foreground">
                    Manage image uploads with Cloudinary
                  </p>
                </div>
                <Switch checked={true} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cloudinary-key">Cloudinary API Key</Label>
                <Input id="cloudinary-key" defaultValue="*************" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cloudinary-secret">Cloudinary Secret</Label>
                <Input id="cloudinary-secret" defaultValue="*************" type="password" />
              </div>
              
              <div className="flex items-center justify-between pt-4 space-x-2">
                <div className="space-y-0.5">
                  <Label>Analytics Integration</Label>
                  <p className="text-sm text-muted-foreground">
                    Connect with Vercel or Google Analytics
                  </p>
                </div>
                <Switch checked={true} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="analytics-id">Analytics ID</Label>
                <Input id="analytics-id" defaultValue="G-1234567890" />
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={() => handleSave("Integrations")}
                disabled={loading}
                className="bg-ckyc-gold hover:bg-ckyc-gold/80"
              >
                {loading ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
