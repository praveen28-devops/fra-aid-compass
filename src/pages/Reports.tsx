import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  FileText, 
  Download, 
  TrendingUp, 
  Users, 
  MapPin, 
  Calendar,
  BarChart3,
  PieChart,
  FileSpreadsheet,
  Filter,
  Share2
} from "lucide-react";

const Reports = () => {
  const [selectedState, setSelectedState] = useState("all");
  const [reportPeriod, setReportPeriod] = useState("monthly");

  const reportCategories = [
    {
      title: "Progress Reports",
      icon: TrendingUp,
      color: "text-blue-500",
      reports: [
        { name: "Monthly Progress Summary", date: "January 2025", format: "PDF" },
        { name: "Quarterly Achievement Report", date: "Q4 2024", format: "XLSX" },
        { name: "Annual Performance Review", date: "FY 2023-24", format: "PDF" }
      ]
    },
    {
      title: "State-wise Analysis",
      icon: MapPin,
      color: "text-green-500",
      reports: [
        { name: "Madhya Pradesh - District Summary", date: "Jan 2025", format: "PDF" },
        { name: "Tripura - Claim Status Report", date: "Jan 2025", format: "XLSX" },
        { name: "Odisha - Beneficiary Database", date: "Jan 2025", format: "CSV" }
      ]
    },
    {
      title: "Beneficiary Statistics",
      icon: Users,
      color: "text-purple-500",
      reports: [
        { name: "IFR Beneficiary List", date: "Updated Today", format: "XLSX" },
        { name: "CFR Community Report", date: "Jan 2025", format: "PDF" },
        { name: "Demographic Analysis", date: "Q4 2024", format: "PDF" }
      ]
    },
    {
      title: "Financial Reports",
      icon: BarChart3,
      color: "text-amber-500",
      reports: [
        { name: "Scheme Disbursement Summary", date: "Jan 2025", format: "XLSX" },
        { name: "Budget Utilization Report", date: "Q4 2024", format: "PDF" },
        { name: "Fund Allocation Analysis", date: "FY 2023-24", format: "PDF" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-forest opacity-5" />
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <FileText className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Analytics & Insights</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-forest-secondary">
              Reports & Analytics
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive reporting system for FRA implementation tracking and analysis
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-16">
        {/* Filters Section */}
        <Card className="mb-8 border-2 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-primary" />
              Report Filters
            </CardTitle>
            <CardDescription>Customize your report view</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">State</label>
                <Select value={selectedState} onValueChange={setSelectedState}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All States</SelectItem>
                    <SelectItem value="mp">Madhya Pradesh</SelectItem>
                    <SelectItem value="tr">Tripura</SelectItem>
                    <SelectItem value="od">Odisha</SelectItem>
                    <SelectItem value="tg">Telangana</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Period</label>
                <Select value={reportPeriod} onValueChange={setReportPeriod}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="quarterly">Quarterly</SelectItem>
                    <SelectItem value="yearly">Yearly</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Claim Type</label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Claims</SelectItem>
                    <SelectItem value="ifr">IFR Only</SelectItem>
                    <SelectItem value="cfr">CFR Only</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end">
                <Button className="w-full">
                  <FileText className="w-4 h-4 mr-2" />
                  Apply Filters
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="all" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto gap-2 bg-card/50 backdrop-blur p-2">
            <TabsTrigger value="all" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              All Reports
            </TabsTrigger>
            <TabsTrigger value="progress" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Progress
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Analytics
            </TabsTrigger>
            <TabsTrigger value="custom" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Custom
            </TabsTrigger>
            <TabsTrigger value="scheduled" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Scheduled
            </TabsTrigger>
          </TabsList>

          {/* All Reports */}
          <TabsContent value="all" className="space-y-6">
            {reportCategories.map((category, idx) => (
              <Card key={idx} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <category.icon className={`w-5 h-5 ${category.color}`} />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.reports.map((report, reportIdx) => (
                      <div 
                        key={reportIdx} 
                        className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-background rounded-md">
                            <FileSpreadsheet className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium group-hover:text-primary transition-colors">
                              {report.name}
                            </p>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground mt-1">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {report.date}
                              </span>
                              <span className="px-2 py-0.5 bg-background rounded text-xs font-medium">
                                {report.format}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            <Share2 className="w-4 h-4" />
                          </Button>
                          <Button size="sm">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Progress Reports */}
          <TabsContent value="progress" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Total Claims</p>
                      <p className="text-3xl font-bold text-primary">45,678</p>
                    </div>
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <FileText className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-sm">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="text-green-500 font-medium">+12.5%</span>
                    <span className="text-muted-foreground">from last month</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Approved</p>
                      <p className="text-3xl font-bold">38,234</p>
                    </div>
                    <div className="p-3 bg-green-500/10 rounded-lg">
                      <Users className="w-8 h-8 text-green-500" />
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-muted-foreground">
                    83.7% approval rate
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Pending</p>
                      <p className="text-3xl font-bold">7,444</p>
                    </div>
                    <div className="p-3 bg-amber-500/10 rounded-lg">
                      <Calendar className="w-8 h-8 text-amber-500" />
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-muted-foreground">
                    Avg. 45 days processing
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-2">
              <CardHeader>
                <CardTitle>Monthly Progress Reports</CardTitle>
                <CardDescription>Download detailed progress reports by month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {["January 2025", "December 2024", "November 2024"].map((month, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <PieChart className="w-5 h-5 text-primary" />
                        <span className="font-medium">Progress Report - {month}</span>
                      </div>
                      <Button size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics */}
          <TabsContent value="analytics" className="space-y-6">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Advanced Analytics Reports
                </CardTitle>
                <CardDescription>Data-driven insights and visualizations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: "Claim Approval Trends Analysis", type: "Time Series" },
                    { name: "Geographic Distribution Map", type: "Spatial" },
                    { name: "Beneficiary Demographics", type: "Statistical" },
                    { name: "Processing Efficiency Metrics", type: "Performance" }
                  ].map((report, idx) => (
                    <div key={idx} className="p-4 border-2 rounded-lg hover:border-primary/50 transition-all group cursor-pointer">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <p className="font-medium mb-1 group-hover:text-primary transition-colors">
                            {report.name}
                          </p>
                          <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                            {report.type}
                          </span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full mt-2">
                        <Download className="w-4 h-4 mr-2" />
                        Generate Report
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Custom Reports */}
          <TabsContent value="custom" className="space-y-6">
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Create Custom Report</CardTitle>
                <CardDescription>Build your own report with specific parameters</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-8 border-2 border-dashed rounded-lg text-center">
                  <FileText className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground mb-4">
                    Custom report builder coming soon
                  </p>
                  <Button>
                    <FileText className="w-4 h-4 mr-2" />
                    Start Building
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Scheduled Reports */}
          <TabsContent value="scheduled" className="space-y-6">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Scheduled Reports
                </CardTitle>
                <CardDescription>Automated report delivery schedule</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: "Weekly Summary Report", frequency: "Every Monday, 9:00 AM", recipients: 5 },
                    { name: "Monthly Dashboard", frequency: "1st of every month", recipients: 12 },
                    { name: "Quarterly Review", frequency: "End of quarter", recipients: 8 }
                  ].map((schedule, idx) => (
                    <div key={idx} className="p-4 border rounded-lg hover:border-primary/50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium mb-1">{schedule.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {schedule.frequency} • {schedule.recipients} recipients
                          </p>
                        </div>
                        <Button variant="outline" size="sm">Edit</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Reports;
