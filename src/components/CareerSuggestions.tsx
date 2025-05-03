
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Users, Star, Info } from "lucide-react";

const CareerSuggestions = () => {
  // Mock data for career suggestions
  const careerSuggestions = [
    {
      title: "Data Scientist",
      matchScore: 92,
      description: "Analyze complex data to help organizations make better decisions.",
      skills: ["Mathematics", "Statistics", "Programming", "Problem-solving"],
      outlook: "Growing 36% faster than average jobs",
      education: "Bachelor's or Master's in Data Science, Statistics, or related field",
      salary: "$100,000 - $150,000",
      category: "tech"
    },
    {
      title: "UX Designer",
      matchScore: 88,
      description: "Design engaging and intuitive digital experiences focused on user needs.",
      skills: ["Creativity", "User Empathy", "Visual Design", "Prototyping"],
      outlook: "Growing 15% over the next decade",
      education: "Bachelor's in Design, HCI, or related field + portfolio",
      salary: "$75,000 - $110,000",
      category: "creative"
    },
    {
      title: "Environmental Scientist",
      matchScore: 85,
      description: "Study environmental problems and develop solutions to protect the environment.",
      skills: ["Research", "Analysis", "Problem-solving", "Communication"],
      outlook: "Growing 8% over the next decade",
      education: "Bachelor's or Master's in Environmental Science",
      salary: "$70,000 - $90,000",
      category: "science"
    },
    {
      title: "Mental Health Counselor",
      matchScore: 82,
      description: "Help people manage and overcome mental and emotional disorders.",
      skills: ["Empathy", "Communication", "Patience", "Analytical thinking"],
      outlook: "Growing 25% over the next decade",
      education: "Master's in Counseling or Psychology + License",
      salary: "$45,000 - $70,000",
      category: "health"
    },
    {
      title: "Financial Analyst",
      matchScore: 78,
      description: "Evaluate investment opportunities and provide financial guidance.",
      skills: ["Analytical thinking", "Mathematics", "Research", "Communication"],
      outlook: "Growing 6% over the next decade",
      education: "Bachelor's in Finance, Economics, or related field",
      salary: "$65,000 - $100,000",
      category: "business"
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Career Recommendations</h1>
          <p className="text-gray-600">
            Based on your assessment, here are personalized career suggestions
          </p>
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Info className="h-4 w-4" />
          <span>How are these calculated?</span>
        </Button>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Careers</TabsTrigger>
          <TabsTrigger value="tech">Technology</TabsTrigger>
          <TabsTrigger value="creative">Creative</TabsTrigger>
          <TabsTrigger value="science">Science</TabsTrigger>
          <TabsTrigger value="health">Healthcare</TabsTrigger>
          <TabsTrigger value="business">Business</TabsTrigger>
        </TabsList>

        {/* All careers tab content */}
        <TabsContent value="all" className="space-y-6">
          {careerSuggestions.map((career, index) => (
            <CareerCard key={index} career={career} />
          ))}
        </TabsContent>

        {/* Category-specific tab contents */}
        {["tech", "creative", "science", "health", "business"].map((category) => (
          <TabsContent key={category} value={category} className="space-y-6">
            {careerSuggestions
              .filter((career) => career.category === category)
              .map((career, index) => (
                <CareerCard key={index} career={career} />
              ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

const CareerCard = ({ career }: { career: any }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-3/4 p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold">{career.title}</h3>
              <p className="text-gray-600 mt-1">{career.description}</p>
            </div>
            <div className="flex items-center gap-1 bg-future-softBlue text-future-blue py-1 px-3 rounded-full">
              <Star className="h-4 w-4 fill-future-blue" />
              <span className="font-semibold">{career.matchScore}% Match</span>
            </div>
          </div>
          
          <div className="mt-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Key Skills</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              {career.skills.map((skill: string, i: number) => (
                <Badge key={i} variant="secondary">{skill}</Badge>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-future-purple" />
                <div>
                  <div className="text-xs text-gray-500">Education</div>
                  <div className="text-sm">{career.education}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-future-blue" />
                <div>
                  <div className="text-xs text-gray-500">Job Outlook</div>
                  <div className="text-sm">{career.outlook}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-amber-500" />
                <div>
                  <div className="text-xs text-gray-500">Average Salary</div>
                  <div className="text-sm">{career.salary}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full lg:w-1/4 bg-gray-50 p-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Match Strength</p>
              <div className="flex items-center gap-2">
                <Progress value={career.matchScore} className="h-2" />
                <span className="text-sm font-medium">{career.matchScore}%</span>
              </div>
            </div>
            
            {/* Visualization of why this matches */}
            <div>
              <p className="text-sm text-gray-500 mb-1">Why This Matches</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span>Skills Alignment</span>
                  <span className="font-medium">High</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span>Interest Alignment</span>
                  <span className="font-medium">Very High</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span>Personality Fit</span>
                  <span className="font-medium">Medium</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4">
            <Button className="w-full">Learn More</Button>
            <Button variant="outline" className="w-full mt-2">Save Career</Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CareerSuggestions;
