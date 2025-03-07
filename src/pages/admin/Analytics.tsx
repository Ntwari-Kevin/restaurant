
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Analytics = () => {
  // Dummy data for analytics
  const visitData = [
    { name: "Jan", visits: 4000 },
    { name: "Feb", visits: 3000 },
    { name: "Mar", visits: 2000 },
    { name: "Apr", visits: 2780 },
    { name: "May", visits: 1890 },
    { name: "Jun", visits: 2390 },
    { name: "Jul", visits: 3490 },
  ];

  const categoryData = [
    { name: "Mains", value: 40, color: "#DFC382" },
    { name: "Drinks", value: 30, color: "#D19C60" },
    { name: "Starters", value: 20, color: "#BA8355" },
    { name: "Desserts", value: 10, color: "#8A6246" },
  ];

  const likesByProduct = [
    { name: "CK Rice", likes: 142 },
    { name: "Tropical Cocktail", likes: 98 },
    { name: "Spicy Brochettes", likes: 87 },
    { name: "Classic Burger", likes: 65 },
    { name: "Avocado Salad", likes: 45 },
  ];

  const visitorsByTime = [
    { time: "8 AM", visitors: 120 },
    { time: "10 AM", visitors: 240 },
    { time: "12 PM", visitors: 380 },
    { time: "2 PM", visitors: 420 },
    { time: "4 PM", visitors: 520 },
    { time: "6 PM", visitors: 680 },
    { time: "8 PM", visitors: 720 },
    { time: "10 PM", visitors: 540 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Analytics</h1>
        <div className="text-sm text-muted-foreground">Last 30 days</div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Visits</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,853</div>
            <p className="text-xs text-muted-foreground">+28% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Time on Site</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3m 42s</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.2%</div>
            <p className="text-xs text-muted-foreground">+0.5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Engagement</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5,732</div>
            <p className="text-xs text-muted-foreground">+18% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="visitors">
        <TabsList>
          <TabsTrigger value="visitors">Visitors</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
        </TabsList>
        <TabsContent value="visitors" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Visitors</CardTitle>
              <CardDescription>
                Number of unique visitors per month
              </CardDescription>
            </CardHeader>
            <CardContent className="px-2">
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={visitData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="visits" stroke="#DFC382" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Visitors by Time of Day</CardTitle>
              <CardDescription>
                Distribution of visitors throughout the day
              </CardDescription>
            </CardHeader>
            <CardContent className="px-2">
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={visitorsByTime}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="visitors" fill="#8A6246" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="engagement" className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Product Likes</CardTitle>
                <CardDescription>
                  Most liked products
                </CardDescription>
              </CardHeader>
              <CardContent className="px-2">
                <div className="h-96">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={likesByProduct}
                      layout="vertical"
                      margin={{
                        top: 20,
                        right: 30,
                        left: 70,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis type="category" dataKey="name" />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="likes" fill="#DFC382" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Category Distribution</CardTitle>
                <CardDescription>
                  Product distribution across categories
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-96 flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={categoryData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={130}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {categoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Analytics;
