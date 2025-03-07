
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { Plus, Search, Edit, Trash2, Star, Heart } from "lucide-react";
import MenuCard from "@/components/ui/MenuCard";

const Products = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Dummy data for products
  const menuItems = [
    {
      id: 1,
      name: "CK Rice",
      price: "12,000 RWF",
      description: "Signature spiced rice with grilled goat meat and special sauce",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=2072&auto=format&fit=crop",
      category: "Mains",
      trending: true,
    },
    {
      id: 2,
      name: "Tropical Cocktail",
      price: "8,500 RWF",
      description: "Refreshing blend of local fruits with premium spirits",
      image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=1972&auto=format&fit=crop",
      category: "Drinks",
      trending: true,
    },
    {
      id: 3,
      name: "Spicy Brochettes",
      price: "10,000 RWF",
      description: "Grilled beef skewers with Rwandan spices and chili dipping sauce",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop",
      category: "Starters",
      trending: true,
    },
    {
      id: 4,
      name: "Classic Burger",
      price: "14,000 RWF",
      description: "Premium beef patty with cheese, caramelized onions and secret sauce",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1999&auto=format&fit=crop",
      category: "Mains",
      trending: false,
    },
  ];

  // Filter products based on search query and active tab
  const filteredProducts = menuItems.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (activeTab === "all" || 
       (activeTab === "trending" && item.trending) ||
       activeTab === item.category.toLowerCase())
  );

  // Handle adding a new product (in a real app, this would open a modal)
  const handleAddProduct = () => {
    toast({
      title: "Add Product",
      description: "This would open a product form in a real implementation",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Products</h1>
        <Button onClick={handleAddProduct} className="bg-ckyc-gold hover:bg-ckyc-gold/80">
          <Plus className="mr-2 h-4 w-4" /> Add Product
        </Button>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Manage Menu Items</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="starters">Starters</SelectItem>
                <SelectItem value="mains">Mains</SelectItem>
                <SelectItem value="drinks">Drinks</SelectItem>
                <SelectItem value="desserts">Desserts</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="all" onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="trending">Trending</TabsTrigger>
          <TabsTrigger value="mains">Mains</TabsTrigger>
          <TabsTrigger value="starters">Starters</TabsTrigger>
          <TabsTrigger value="drinks">Drinks</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-6">
          {filteredProducts.length === 0 ? (
            <div className="flex h-[400px] items-center justify-center rounded-md border border-dashed">
              <div className="text-center">
                <p className="text-lg font-medium">No products found</p>
                <p className="text-sm text-muted-foreground">
                  Try adjusting your search or filters
                </p>
              </div>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((item) => (
                <div key={item.id} className="group relative">
                  <MenuCard {...item} />
                  <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/70 opacity-0 transition-opacity group-hover:opacity-100">
                    <Button variant="outline" size="icon" className="h-8 w-8 rounded-full bg-white">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="h-8 w-8 rounded-full bg-white">
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-8 w-8 rounded-full bg-white"
                      onClick={() => {
                        toast({
                          title: item.trending ? "Removed from trending" : "Added to trending",
                          description: `${item.name} has been ${item.trending ? "removed from" : "added to"} trending items`,
                        });
                      }}
                    >
                      <Star className={`h-4 w-4 ${item.trending ? "fill-yellow-400 text-yellow-400" : ""}`} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Products;
