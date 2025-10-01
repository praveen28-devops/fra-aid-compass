import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, CheckCircle, AlertCircle, FileSearch, TrendingUp, Users, MapPin, Calendar } from "lucide-react";

const DSS = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [claimType, setClaimType] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-forest opacity-5" />
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Brain className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Intelligence</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-forest-secondary">
              Decision Support System
            </h1>
            <p className="text-lg text-muted-foreground">
              Intelligent recommendations for FRA claim processing, scheme eligibility, and policy compliance
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-16">
        <Tabs defaultValue="eligibility" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 h-auto gap-2 bg-card/50 backdrop-blur p-2">
            <TabsTrigger value="eligibility" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <CheckCircle className="w-4 h-4" />
              Eligibility Check
            </TabsTrigger>
            <TabsTrigger value="recommendations" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <TrendingUp className="w-4 h-4" />
              Scheme Matching
            </TabsTrigger>
            <TabsTrigger value="analysis" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <FileSearch className="w-4 h-4" />
              Claim Analysis
            </TabsTrigger>
            <TabsTrigger value="insights" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Brain className="w-4 h-4" />
              AI Insights
            </TabsTrigger>
          </TabsList>

          {/* Eligibility Check */}
          <TabsContent value="eligibility" className="space-y-6">
            <Card className="border-2 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  FRA Claim Eligibility Checker
                </CardTitle>
                <CardDescription>
                  Verify eligibility criteria for Individual and Community Forest Rights claims
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Select value={selectedState} onValueChange={setSelectedState}>
                      <SelectTrigger id="state">
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mp">Madhya Pradesh</SelectItem>
                        <SelectItem value="tr">Tripura</SelectItem>
                        <SelectItem value="od">Odisha</SelectItem>
                        <SelectItem value="tg">Telangana</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="district">District</Label>
                    <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
                      <SelectTrigger id="district">
                        <SelectValue placeholder="Select district" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dist1">District 1</SelectItem>
                        <SelectItem value="dist2">District 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="claimType">Claim Type</Label>
                    <Select value={claimType} onValueChange={setClaimType}>
                      <SelectTrigger id="claimType">
                        <SelectValue placeholder="Select claim type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ifr">Individual Forest Rights (IFR)</SelectItem>
                        <SelectItem value="cfr">Community Forest Rights (CFR)</SelectItem>
                        <SelectItem value="both">Both IFR & CFR</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="familyId">Family/Community ID</Label>
                    <Input id="familyId" placeholder="Enter ID number" />
                  </div>
                </div>

                <Button className="w-full md:w-auto" size="lg">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Check Eligibility
                </Button>
              </CardContent>
            </Card>

            {/* Results Card */}
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <CardHeader>
                <CardTitle className="text-primary">Eligibility Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-card rounded-lg border">
                    <CheckCircle className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Residence Criteria Met</p>
                      <p className="text-sm text-muted-foreground">75+ years documented residence in forest area</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-card rounded-lg border">
                    <CheckCircle className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Tribal Status Verified</p>
                      <p className="text-sm text-muted-foreground">Recognized under Schedule Tribe list</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-card rounded-lg border">
                    <AlertCircle className="w-5 h-5 text-amber-500 mt-1" />
                    <div>
                      <p className="font-medium">Documentation Pending</p>
                      <p className="text-sm text-muted-foreground">Additional proof of cultivation required</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Scheme Matching */}
          <TabsContent value="recommendations" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 group-hover:text-primary transition-colors">
                    <Users className="w-5 h-5" />
                    PMJDY - Financial Inclusion
                  </CardTitle>
                  <CardDescription>Pradhan Mantri Jan Dhan Yojana</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Match Score</span>
                      <span className="font-semibold text-primary">92%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-forest-secondary w-[92%]" />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Banking services for forest rights holders with zero balance accounts
                  </p>
                  <Button variant="outline" className="w-full">View Details</Button>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 group-hover:text-primary transition-colors">
                    <TrendingUp className="w-5 h-5" />
                    MGNREGA Integration
                  </CardTitle>
                  <CardDescription>Employment Guarantee Scheme</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Match Score</span>
                      <span className="font-semibold text-primary">88%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-forest-secondary w-[88%]" />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    100 days guaranteed employment for forest community members
                  </p>
                  <Button variant="outline" className="w-full">View Details</Button>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 group-hover:text-primary transition-colors">
                    <MapPin className="w-5 h-5" />
                    PM-KISAN Scheme
                  </CardTitle>
                  <CardDescription>Direct Income Support</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Match Score</span>
                      <span className="font-semibold text-primary">85%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-forest-secondary w-[85%]" />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    ₹6,000 annual support for small and marginal farmers
                  </p>
                  <Button variant="outline" className="w-full">View Details</Button>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 group-hover:text-primary transition-colors">
                    <Calendar className="w-5 h-5" />
                    Forest Conservation
                  </CardTitle>
                  <CardDescription>Biodiversity Protection Program</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Match Score</span>
                      <span className="font-semibold text-primary">95%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-forest-secondary w-[95%]" />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Incentives for sustainable forest management practices
                  </p>
                  <Button variant="outline" className="w-full">View Details</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Claim Analysis */}
          <TabsContent value="analysis" className="space-y-6">
            <Card className="border-2 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileSearch className="w-5 h-5 text-primary" />
                  AI-Powered Claim Analysis
                </CardTitle>
                <CardDescription>Upload documents for automated verification and analysis</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-12 text-center hover:border-primary/50 transition-colors cursor-pointer">
                  <FileSearch className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Drag and drop files here, or click to browse
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Supported: PDF, JPG, PNG (Max 10MB)
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="text-2xl font-bold text-primary mb-1">12</div>
                    <div className="text-sm text-muted-foreground">Documents Analyzed</div>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="text-2xl font-bold text-primary mb-1">94%</div>
                    <div className="text-sm text-muted-foreground">Accuracy Score</div>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="text-2xl font-bold text-primary mb-1">8 min</div>
                    <div className="text-sm text-muted-foreground">Avg. Processing</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* AI Insights */}
          <TabsContent value="insights" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-primary" />
                    Predictive Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Claim Approval Likelihood</span>
                      <span className="text-sm font-semibold text-primary">High (87%)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Processing Time Estimate</span>
                      <span className="text-sm font-semibold">45-60 days</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Documentation Completeness</span>
                      <span className="text-sm font-semibold text-amber-500">Moderate (72%)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Recommendations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <p className="text-sm">Submit land survey records for faster approval</p>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <p className="text-sm">Include gram sabha resolution documents</p>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <p className="text-sm">Verify tribal status certificate validity</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DSS;
