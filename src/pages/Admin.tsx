import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useNavigate } from "react-router-dom";
import { 
  Settings, 
  Users, 
  Shield, 
  Database, 
  Activity,
  Bell,
  Key,
  Globe,
  Server,
  AlertTriangle,
  CheckCircle2,
  UserPlus,
  UserMinus,
  Edit,
  Trash2,
  Download,
  Upload,
  RefreshCw,
  Monitor,
  HardDrive,
  Cpu,
  BarChart3,
  FileText,
  Lock,
  Unlock,
  Eye,
  EyeOff,
  LogOut,
  User
} from "lucide-react";

const Admin = () => {
  const [selectedUser, setSelectedUser] = useState("");
  const [systemStatus, setSystemStatus] = useState("operational");
  const navigate = useNavigate();

  const adminUser = localStorage.getItem("adminUser") || "admin";

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    localStorage.removeItem("adminUser");
    navigate("/admin/login");
  };

  const systemStats = [
    {
      title: "Active Users",
      value: "2,847",
      change: "+142",
      changeType: "increase",
      icon: Users,
      status: "good"
    },
    {
      title: "System Uptime",
      value: "99.8%",
      change: "24 days",
      changeType: "stable",
      icon: Monitor,
      status: "excellent"
    },
    {
      title: "Database Size",
      value: "1.2 TB",
      change: "+45 GB",
      changeType: "increase",
      icon: Database,
      status: "good"
    },
    {
      title: "API Calls/Day",
      value: "2.4M",
      change: "+12%",
      changeType: "increase",
      icon: Activity,
      status: "good"
    }
  ];

  const users = [
    { id: 1, name: "Rajesh Kumar", role: "State Administrator", state: "Madhya Pradesh", status: "active", lastLogin: "2 hours ago" },
    { id: 2, name: "Priya Sharma", role: "District Officer", state: "Tripura", status: "active", lastLogin: "5 minutes ago" },
    { id: 3, name: "Amit Singh", role: "Field Officer", state: "Odisha", status: "inactive", lastLogin: "2 days ago" },
    { id: 4, name: "Sunita Devi", role: "Data Analyst", state: "Telangana", status: "active", lastLogin: "1 hour ago" },
    { id: 5, name: "Ravi Patel", role: "System Admin", state: "All States", status: "active", lastLogin: "Just now" }
  ];

  const systemLogs = [
    { type: "security", message: "Failed login attempt from IP 192.168.1.100", time: "2 minutes ago", severity: "warning" },
    { type: "system", message: "Database backup completed successfully", time: "1 hour ago", severity: "info" },
    { type: "user", message: "New user registration: Mohan Das (Bihar)", time: "3 hours ago", severity: "info" },
    { type: "security", message: "Admin password changed by Ravi Patel", time: "5 hours ago", severity: "info" },
    { type: "system", message: "System maintenance completed", time: "1 day ago", severity: "success" }
  ];

  const statePermissions = [
    { state: "Madhya Pradesh", users: 45, claims: 12847, status: "active" },
    { state: "Tripura", users: 23, claims: 5632, status: "active" },
    { state: "Odisha", users: 38, claims: 9234, status: "active" },
    { state: "Telangana", users: 31, claims: 7891, status: "maintenance" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-forest opacity-5" />
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Settings className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">System Administration</span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-3 py-2 bg-card/50 rounded-lg border">
                  <User className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Welcome, {adminUser}</span>
                </div>
                <Button variant="outline" size="sm" onClick={handleLogout}>
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-forest-secondary">
              Admin Control Panel
            </h1>
            <p className="text-lg text-muted-foreground">
              Manage users, monitor system health, and configure Aranya Setu platform settings
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-16">
        {/* System Status Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {systemStats.map((stat, index) => (
            <Card key={index} className="hover:shadow-card-custom transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className="relative">
                  <stat.icon className="h-4 w-4 text-primary" />
                  <div className={`absolute -top-1 -right-1 w-2 h-2 rounded-full ${
                    stat.status === 'excellent' ? 'bg-green-500' :
                    stat.status === 'good' ? 'bg-blue-500' :
                    'bg-yellow-500'
                  }`} />
                </div>
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
                  {stat.changeType === "increase" ? "from last month" : "uptime"}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="users" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 h-auto gap-2 bg-card/50 backdrop-blur p-2">
            <TabsTrigger value="users" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Users className="w-4 h-4" />
              Users
            </TabsTrigger>
            <TabsTrigger value="permissions" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Shield className="w-4 h-4" />
              Permissions
            </TabsTrigger>
            <TabsTrigger value="system" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Server className="w-4 h-4" />
              System
            </TabsTrigger>
            <TabsTrigger value="logs" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Activity className="w-4 h-4" />
              Logs
            </TabsTrigger>
            <TabsTrigger value="backup" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Database className="w-4 h-4" />
              Backup
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Settings className="w-4 h-4" />
              Settings
            </TabsTrigger>
          </TabsList>

          {/* User Management */}
          <TabsContent value="users" className="space-y-6">
            <Card className="border-2 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      User Management
                    </CardTitle>
                    <CardDescription>Manage system users and their access levels</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                    <Button size="sm">
                      <UserPlus className="w-4 h-4 mr-2" />
                      Add User
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <Input placeholder="Search users..." />
                    </div>
                    <Select>
                      <SelectTrigger className="w-full sm:w-48">
                        <SelectValue placeholder="Filter by role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Roles</SelectItem>
                        <SelectItem value="admin">Administrator</SelectItem>
                        <SelectItem value="officer">District Officer</SelectItem>
                        <SelectItem value="field">Field Officer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4 font-medium text-muted-foreground">User</th>
                          <th className="text-left py-3 px-4 font-medium text-muted-foreground">Role</th>
                          <th className="text-left py-3 px-4 font-medium text-muted-foreground">State</th>
                          <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                          <th className="text-left py-3 px-4 font-medium text-muted-foreground">Last Login</th>
                          <th className="text-left py-3 px-4 font-medium text-muted-foreground">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((user) => (
                          <tr key={user.id} className="border-b hover:bg-muted/50">
                            <td className="py-3 px-4">
                              <div className="font-medium">{user.name}</div>
                            </td>
                            <td className="py-3 px-4">
                              <Badge variant="outline">{user.role}</Badge>
                            </td>
                            <td className="py-3 px-4 text-sm">{user.state}</td>
                            <td className="py-3 px-4">
                              <Badge variant={user.status === "active" ? "default" : "secondary"}>
                                {user.status}
                              </Badge>
                            </td>
                            <td className="py-3 px-4 text-sm text-muted-foreground">{user.lastLogin}</td>
                            <td className="py-3 px-4">
                              <div className="flex gap-1">
                                <Button variant="ghost" size="sm">
                                  <Edit className="w-4 h-4" />
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <Eye className="w-4 h-4" />
                                </Button>
                                <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700">
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Permissions */}
          <TabsContent value="permissions" className="space-y-6">
            <Card className="border-2 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  State Access Permissions
                </CardTitle>
                <CardDescription>Manage state-wise access and permissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {statePermissions.map((state, index) => (
                    <div key={index} className="p-4 border rounded-lg hover:border-primary/50 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 rounded-full bg-primary"></div>
                          <h4 className="font-semibold">{state.state}</h4>
                          <Badge variant={state.status === "active" ? "default" : "secondary"}>
                            {state.status}
                          </Badge>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Settings className="w-4 h-4" />
                          </Button>
                          <Switch checked={state.status === "active"} />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                        <div>Active Users: <span className="font-medium text-foreground">{state.users}</span></div>
                        <div>Total Claims: <span className="font-medium text-foreground">{state.claims.toLocaleString()}</span></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* System Monitor */}
          <TabsContent value="system" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Server className="w-5 h-5 text-primary" />
                    System Health
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Cpu className="w-4 h-4" />
                        <span className="text-sm">CPU Usage</span>
                      </div>
                      <span className="text-sm font-semibold text-primary">23%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '23%' }}></div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <HardDrive className="w-4 h-4" />
                        <span className="text-sm">Memory Usage</span>
                      </div>
                      <span className="text-sm font-semibold text-primary">67%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '67%' }}></div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Database className="w-4 h-4" />
                        <span className="text-sm">Disk Usage</span>
                      </div>
                      <span className="text-sm font-semibold text-amber-500">84%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-amber-500 h-2 rounded-full" style={{ width: '84%' }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-primary" />
                    Service Status
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { service: "Web Server", status: "running", uptime: "24d 5h" },
                    { service: "Database", status: "running", uptime: "24d 5h" },
                    { service: "API Gateway", status: "running", uptime: "24d 5h" },
                    { service: "File Storage", status: "running", uptime: "24d 5h" },
                    { service: "Background Jobs", status: "warning", uptime: "2h 15m" }
                  ].map((service, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${
                          service.status === 'running' ? 'bg-green-500' :
                          service.status === 'warning' ? 'bg-yellow-500' :
                          'bg-red-500'
                        }`} />
                        <span className="font-medium">{service.service}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {service.uptime}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* System Logs */}
          <TabsContent value="logs" className="space-y-6">
            <Card className="border-2 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Activity className="w-5 h-5 text-primary" />
                      System Activity Logs
                    </CardTitle>
                    <CardDescription>Monitor system events and security activities</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Refresh
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Export Logs
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {systemLogs.map((log, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className={`p-2 rounded-full ${
                        log.severity === 'success' ? 'bg-green-100 text-green-600' :
                        log.severity === 'warning' ? 'bg-orange-100 text-orange-600' :
                        log.severity === 'error' ? 'bg-red-100 text-red-600' :
                        'bg-blue-100 text-blue-600'
                      }`}>
                        {log.type === 'security' ? <Shield className="w-4 h-4" /> :
                         log.type === 'system' ? <Server className="w-4 h-4" /> :
                         <Users className="w-4 h-4" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{log.message}</p>
                        <p className="text-xs text-muted-foreground mt-1">{log.time}</p>
                      </div>
                      <Badge variant={
                        log.severity === 'success' ? 'default' :
                        log.severity === 'warning' ? 'secondary' :
                        log.severity === 'error' ? 'destructive' :
                        'outline'
                      }>
                        {log.severity}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Backup & Maintenance */}
          <TabsContent value="backup" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="w-5 h-5 text-primary" />
                    Database Backup
                  </CardTitle>
                  <CardDescription>Manage system backups and recovery</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Last Backup</span>
                      <Badge variant="default">Success</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      October 1, 2025 at 2:00 AM<br />
                      Size: 1.2 GB
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Button className="w-full">
                      <Database className="w-4 h-4 mr-2" />
                      Create Backup Now
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Download Latest Backup
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Upload className="w-5 h-5 text-primary" />
                    System Maintenance
                  </CardTitle>
                  <CardDescription>Schedule and manage system maintenance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Next Maintenance</span>
                      <Badge variant="outline">Scheduled</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      October 8, 2025 at 12:00 AM<br />
                      Duration: 2 hours
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full">
                      <Settings className="w-4 h-4 mr-2" />
                      Schedule Maintenance
                    </Button>
                    <Button variant="outline" className="w-full">
                      <RefreshCw className="w-4 h-4 mr-2" />
                      System Cleanup
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* System Settings */}
          <TabsContent value="settings" className="space-y-6">
            <Card className="border-2 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-primary" />
                  System Configuration
                </CardTitle>
                <CardDescription>Configure system-wide settings and preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="systemName">System Name</Label>
                      <Input id="systemName" defaultValue="Aranya Setu" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="adminEmail">Admin Email</Label>
                      <Input id="adminEmail" type="email" defaultValue="admin@aranyasetu.gov.in" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Maintenance Mode</Label>
                        <p className="text-sm text-muted-foreground">
                          Enable to restrict system access
                        </p>
                      </div>
                      <Switch />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
                      <Input id="sessionTimeout" type="number" defaultValue="30" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="maxFileSize">Max File Upload Size (MB)</Label>
                      <Input id="maxFileSize" type="number" defaultValue="10" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Email Notifications</Label>
                        <p className="text-sm text-muted-foreground">
                          Send system alerts via email
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <Button className="w-full md:w-auto">
                    <Settings className="w-4 h-4 mr-2" />
                    Save Configuration
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;