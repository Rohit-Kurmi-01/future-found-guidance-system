
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Share, Printer } from "lucide-react";
import { toast } from "sonner";

// Sample data for charts
const skillsData = [
  { name: 'Communication', value: 85 },
  { name: 'Problem Solving', value: 75 },
  { name: 'Creativity', value: 90 },
  { name: 'Technical', value: 65 },
  { name: 'Leadership', value: 60 },
  { name: 'Analytical', value: 70 },
];

const careerMatchData = [
  { name: 'UX Designer', match: 92 },
  { name: 'Marketing Manager', match: 85 },
  { name: 'Product Manager', match: 78 },
  { name: 'Data Analyst', match: 70 },
  { name: 'Content Strategist', match: 65 },
];

const interestDistribution = [
  { name: 'Technology', value: 30 },
  { name: 'Arts & Design', value: 25 },
  { name: 'Business', value: 20 },
  { name: 'Sciences', value: 15 },
  { name: 'Social Sciences', value: 10 },
];

// Colors for pie chart
const COLORS = ['#9b87f5', '#0EA5E9', '#4fd1c5', '#FDE1D3', '#F2FCE2'];

const ReportVisuals = () => {
  const [activeTab, setActiveTab] = useState("summary");

  const handleDownload = () => {
    toast.success("Report downloaded successfully!");
  };

  const handleShare = () => {
    toast.success("Share link copied to clipboard!");
  };

  const handlePrint = () => {
    window.print();
    toast.success("Preparing document for printing...");
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Career Assessment Report</h1>
          <p className="text-gray-600">
            Visual overview of your skills, interests, and career matches
          </p>
        </div>
        <div className="flex gap-2">
          <Button onClick={handleDownload} variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Download</span>
          </Button>
          <Button onClick={handleShare} variant="outline" className="flex items-center gap-2">
            <Share className="h-4 w-4" />
            <span className="hidden sm:inline">Share</span>
          </Button>
          <Button onClick={handlePrint} variant="outline" className="flex items-center gap-2">
            <Printer className="h-4 w-4" />
            <span className="hidden sm:inline">Print</span>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="summary" className="w-full" onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="summary">Summary</TabsTrigger>
          <TabsTrigger value="skills">Skills Analysis</TabsTrigger>
          <TabsTrigger value="careers">Career Matches</TabsTrigger>
          <TabsTrigger value="roadmap">Career Roadmap</TabsTrigger>
        </TabsList>

        <TabsContent value="summary" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Assessment Overview</CardTitle>
              <CardDescription>
                Summary of your skills, interests, and recommended career paths
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Interest Distribution Chart */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Interest Distribution</h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={interestDistribution}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {interestDistribution.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Top Career Matches */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Top Career Matches</h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={careerMatchData}
                        layout="vertical"
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" domain={[0, 100]} />
                        <YAxis dataKey="name" type="category" width={100} />
                        <Tooltip />
                        <Bar dataKey="match" fill="#9b87f5" radius={[0, 4, 4, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">Key Insights</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="bg-future-purple/10 p-1 rounded-full mr-2 mt-1">
                        <div className="w-2 h-2 bg-future-purple rounded-full"></div>
                      </div>
                      <span>Your creativity and communication skills are significant strengths that align well with careers in design and marketing.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-future-blue/10 p-1 rounded-full mr-2 mt-1">
                        <div className="w-2 h-2 bg-future-blue rounded-full"></div>
                      </div>
                      <span>Your interest in technology combined with creative skills suggests UX/UI design could be an excellent career path.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-future-teal/10 p-1 rounded-full mr-2 mt-1">
                        <div className="w-2 h-2 bg-future-teal rounded-full"></div>
                      </div>
                      <span>Consider developing more technical skills to broaden your opportunities in tech-adjacent creative fields.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skills" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Skills Analysis</CardTitle>
              <CardDescription>
                Detailed breakdown of your skills and areas for growth
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 mb-8">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={skillsData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Bar dataKey="value" fill="#0EA5E9" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-future-mint p-4 rounded-lg">
                  <h3 className="font-medium text-future-purple mb-2">Key Strengths</h3>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-future-purple rounded-full"></div>
                      <span>Creativity (90%)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-future-purple rounded-full"></div>
                      <span>Communication (85%)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-future-purple rounded-full"></div>
                      <span>Problem Solving (75%)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-future-softBlue p-4 rounded-lg">
                  <h3 className="font-medium text-future-blue mb-2">Growth Areas</h3>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-future-blue rounded-full"></div>
                      <span>Leadership (60%)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-future-blue rounded-full"></div>
                      <span>Technical Skills (65%)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-future-softPeach p-4 rounded-lg">
                  <h3 className="font-medium text-orange-500 mb-2">Recommended Development</h3>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span>Leadership workshops</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span>Technical courses in UX tools</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span>Industry certifications</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="careers" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Career Match Analysis</CardTitle>
              <CardDescription>
                Detailed breakdown of your career matches based on your skills and interests
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 mb-8">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={careerMatchData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Bar dataKey="match" fill="#9b87f5" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="space-y-6">
                <div className="border p-6 rounded-lg">
                  <h3 className="text-xl font-medium text-future-purple mb-4">UX Designer (92% Match)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Why This Matches</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <div className="bg-future-purple/10 p-1 rounded-full mr-2 mt-1">
                            <div className="w-2 h-2 bg-future-purple rounded-full"></div>
                          </div>
                          <span>Aligns with your creative strengths (90%)</span>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-future-purple/10 p-1 rounded-full mr-2 mt-1">
                            <div className="w-2 h-2 bg-future-purple rounded-full"></div>
                          </div>
                          <span>Utilizes communication skills (85%)</span>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-future-purple/10 p-1 rounded-full mr-2 mt-1">
                            <div className="w-2 h-2 bg-future-purple rounded-full"></div>
                          </div>
                          <span>Matches your interest in technology and design</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Next Steps</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <div className="bg-future-blue/10 p-1 rounded-full mr-2 mt-1">
                            <div className="w-2 h-2 bg-future-blue rounded-full"></div>
                          </div>
                          <span>Build a design portfolio</span>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-future-blue/10 p-1 rounded-full mr-2 mt-1">
                            <div className="w-2 h-2 bg-future-blue rounded-full"></div>
                          </div>
                          <span>Take UX/UI design courses</span>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-future-blue/10 p-1 rounded-full mr-2 mt-1">
                            <div className="w-2 h-2 bg-future-blue rounded-full"></div>
                          </div>
                          <span>Connect with UX professionals for mentorship</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-future-blue mb-2">Marketing Manager (85% Match)</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Strong alignment with your communication skills and creative thinking. 
                      Consider courses in digital marketing and brand strategy.
                    </p>
                    <Button variant="outline" size="sm">Learn More</Button>
                  </div>
                  
                  <div className="border p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-future-teal mb-2">Product Manager (78% Match)</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Combines your problem-solving abilities with communication skills. 
                      Build technical knowledge to strengthen this path.
                    </p>
                    <Button variant="outline" size="sm">Learn More</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="roadmap" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Career Roadmap</CardTitle>
              <CardDescription>
                Suggested path to reach your career goals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative mb-12">
                <div className="absolute left-8 top-0 h-full w-1 bg-gray-200"></div>
                
                <div className="relative z-10">
                  {/* First step */}
                  <div className="mb-8">
                    <div className="flex">
                      <div className="bg-future-purple text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl">
                        1
                      </div>
                      <div className="ml-6 pt-3">
                        <h3 className="text-xl font-medium">Build Foundation</h3>
                        <p className="text-gray-600">6-12 months</p>
                      </div>
                    </div>
                    <div className="ml-24 mt-3 bg-gray-50 p-4 rounded-lg">
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <div className="bg-future-purple/10 p-1 rounded-full mr-2 mt-1">
                            <div className="w-2 h-2 bg-future-purple rounded-full"></div>
                          </div>
                          <span>Complete UX/UI fundamentals course</span>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-future-purple/10 p-1 rounded-full mr-2 mt-1">
                            <div className="w-2 h-2 bg-future-purple rounded-full"></div>
                          </div>
                          <span>Learn design tools (Figma, Adobe XD)</span>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-future-purple/10 p-1 rounded-full mr-2 mt-1">
                            <div className="w-2 h-2 bg-future-purple rounded-full"></div>
                          </div>
                          <span>Build 2-3 practice projects for your portfolio</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Second step */}
                  <div className="mb-8">
                    <div className="flex">
                      <div className="bg-future-blue text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl">
                        2
                      </div>
                      <div className="ml-6 pt-3">
                        <h3 className="text-xl font-medium">Gain Experience</h3>
                        <p className="text-gray-600">1-2 years</p>
                      </div>
                    </div>
                    <div className="ml-24 mt-3 bg-gray-50 p-4 rounded-lg">
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <div className="bg-future-blue/10 p-1 rounded-full mr-2 mt-1">
                            <div className="w-2 h-2 bg-future-blue rounded-full"></div>
                          </div>
                          <span>Find internship or entry-level UX position</span>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-future-blue/10 p-1 rounded-full mr-2 mt-1">
                            <div className="w-2 h-2 bg-future-blue rounded-full"></div>
                          </div>
                          <span>Volunteer for nonprofits to build portfolio</span>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-future-blue/10 p-1 rounded-full mr-2 mt-1">
                            <div className="w-2 h-2 bg-future-blue rounded-full"></div>
                          </div>
                          <span>Network with industry professionals</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Third step */}
                  <div>
                    <div className="flex">
                      <div className="bg-future-teal text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl">
                        3
                      </div>
                      <div className="ml-6 pt-3">
                        <h3 className="text-xl font-medium">Advance Career</h3>
                        <p className="text-gray-600">2-5 years</p>
                      </div>
                    </div>
                    <div className="ml-24 mt-3 bg-gray-50 p-4 rounded-lg">
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <div className="bg-future-teal/10 p-1 rounded-full mr-2 mt-1">
                            <div className="w-2 h-2 bg-future-teal rounded-full"></div>
                          </div>
                          <span>Move to mid-level UX designer role</span>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-future-teal/10 p-1 rounded-full mr-2 mt-1">
                            <div className="w-2 h-2 bg-future-teal rounded-full"></div>
                          </div>
                          <span>Specialize in an area of interest (mobile, web, product)</span>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-future-teal/10 p-1 rounded-full mr-2 mt-1">
                            <div className="w-2 h-2 bg-future-teal rounded-full"></div>
                          </div>
                          <span>Consider UX leadership or management path</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-future-mint p-4 rounded-lg">
                <h3 className="font-medium mb-2">Alternative Paths</h3>
                <p className="text-sm mb-4">
                  If UX design doesn't align with your goals as you progress, consider these related paths:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  <div className="bg-white p-3 rounded shadow-sm">
                    <p className="font-medium">Product Management</p>
                    <p className="text-xs text-gray-600">Focus on your problem-solving skills</p>
                  </div>
                  <div className="bg-white p-3 rounded shadow-sm">
                    <p className="font-medium">Digital Marketing</p>
                    <p className="text-xs text-gray-600">Leverage your communication strengths</p>
                  </div>
                  <div className="bg-white p-3 rounded shadow-sm">
                    <p className="font-medium">Web/App Development</p>
                    <p className="text-xs text-gray-600">Build on technical skills</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t pt-4">
              <Button className="w-full">Schedule Career Counseling Session</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ReportVisuals;
