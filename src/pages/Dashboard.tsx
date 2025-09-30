import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  FileText, 
  TrendingUp, 
  MapPin,
  CheckCircle2,
  Clock,
  AlertCircle,
  BarChart3,
  Download,
  Filter
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Claims",
      value: "12,847",
      change: "+125",
      changeType: "increase",
      icon: FileText,
      description: "This month"
    },
    {
      title: "Approved Claims", 
      value: "9,234",
      change: "+89",
      changeType: "increase",
      icon: CheckCircle2,
      description: "This month"
    },
    {
      title: "Pending Review",
      value: "2,108",
      change: "-12",
      changeType: "decrease", 
      icon: Clock,
      description: "This month"
    },
    {
      title: "Forest Area Recognized",
      value: "1.2M ha",
      change: "+15K ha",
      changeType: "increase",
      icon: MapPin,
      description: "This month"
    }
  ];

  const stateData = [
    { state: "Madhya Pradesh", claims: 4235, approved: 3156, pending: 892, completion: 74 },
    { state: "Odisha", claims: 3892, approved: 2847, pending: 756, completion: 73 },
    { state: "Telangana", claims: 2954, approved: 2234, pending: 523, completion: 76 },
    { state: "Tripura", calls: 1766, approved: 997, pending: 437, completion: 56 }
  ];

  const recentActivities = [
    { action: "Bulk Approval", details: "125 IFR claims approved in Bastar district", time: "2 hours ago", icon: CheckCircle2, type: "success" },
    { action: "Document Verification", details: "AI processing completed for 450 documents", time: "4 hours ago", icon: FileText, type: "info" },
    { action: "Field Survey", details: "GPS verification completed in Kandhamal", time: "6 hours ago", icon: MapPin, type: "info" },
    { action: "Alert Generated", details: "Pending deadline approaching for 23 claims", time: "8 hours ago", icon: AlertCircle, type: "warning" }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-primary">FRA Management Dashboard</h1>
          <p className="text-muted-foreground">
            Comprehensive overview of Forest Rights Act claim processing across all states
          </p>
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter Data
          </Button>
          <Button variant="forest" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-card-custom transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Badge 
                  variant={stat.changeType === "increase" ? "default" : "secondary"}
                  className="text-xs"
                >
                  {stat.change}
                </Badge>
                {stat.description}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* State-wise Performance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            State-wise Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">State</th>
                  <th className="text-right py-3 px-4 font-medium text-muted-foreground">Total Claims</th>
                  <th className="text-right py-3 px-4 font-medium text-muted-foreground">Approved</th>
                  <th className="text-right py-3 px-4 font-medium text-muted-foreground">Pending</th>
                  <th className="text-right py-3 px-4 font-medium text-muted-foreground">Completion %</th>
                </tr>
              </thead>
              <tbody>
                {stateData.map((row, index) => (
                  <tr key={index} className="border-b hover:bg-muted/50">
                    <td className="py-3 px-4 font-medium">{row.state}</td>
                    <td className="text-right py-3 px-4">{row.claims?.toLocaleString() || row.calls?.toLocaleString()}</td>
                    <td className="text-right py-3 px-4 text-green-600">{row.approved.toLocaleString()}</td>
                    <td className="text-right py-3 px-4 text-orange-600">{row.pending.toLocaleString()}</td>
                    <td className="text-right py-3 px-4">
                      <Badge variant={row.completion > 70 ? "default" : "secondary"}>
                        {row.completion}%
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent System Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className={`p-2 rounded-full ${
                    activity.type === 'success' ? 'bg-green-100 text-green-600' :
                    activity.type === 'warning' ? 'bg-orange-100 text-orange-600' :
                    'bg-blue-100 text-blue-600'
                  }`}>
                    <activity.icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{activity.action}</h4>
                    <p className="text-sm text-muted-foreground">{activity.details}</p>
                    <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Analytics */}
        <Card>
          <CardHeader>
            <CardTitle>Processing Efficiency</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Average Processing Time</span>
                  <span className="font-medium">12.5 days</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '78%' }}></div>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Target: 10 days</p>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Document Accuracy</span>
                  <span className="font-medium">94.8%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
                <p className="text-xs text-muted-foreground mt-1">AI-powered verification</p>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Field Verification</span>
                  <span className="font-medium">87.2%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '87%' }}></div>
                </div>
                <p className="text-xs text-muted-foreground mt-1">GPS-based validation</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;