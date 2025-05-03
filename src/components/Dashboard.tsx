
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Users, 
  Smile, 
  ChartBar, 
  MessageCircle,
  ArrowUp
} from "lucide-react";

const Dashboard = () => {
  const featureCards = [
    {
      title: "Self Assessment",
      description: "Discover your strengths, interests and emotional state",
      icon: <GraduationCap className="h-6 w-6" />,
      color: "bg-future-mint text-future-purple",
      link: "/assessment"
    },
    {
      title: "Career Suggestions",
      description: "Explore personalized career paths based on your profile",
      icon: <ChartBar className="h-6 w-6" />,
      color: "bg-future-softBlue text-future-blue",
      link: "/careers"
    },
    {
      title: "Parent Dashboard",
      description: "Tools for parents to support their child's career journey",
      icon: <Users className="h-6 w-6" />,
      color: "bg-future-softPeach text-orange-500",
      link: "/parents"
    },
    {
      title: "Mental Health",
      description: "Support resources and tools for emotional wellbeing",
      icon: <Smile className="h-6 w-6" />,
      color: "bg-future-softGreen text-green-600",
      link: "/support"
    },
    {
      title: "AI Assistant",
      description: "Get personalized guidance and answers to your questions",
      icon: <MessageCircle className="h-6 w-6" />,
      color: "bg-purple-100 text-future-purple",
      link: "/chat"
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-future-mint to-future-softBlue rounded-2xl p-8 overflow-hidden">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold text-future-dark mb-4">
            Welcome to Future Found
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Your AI-powered career guidance system that helps students and parents
            navigate educational and career decisions with confidence.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-future-purple hover:bg-future-purple/90">
              <Link to="/assessment">Start Assessment</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/chat">Talk to AI Assistant</Link>
            </Button>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-future-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute top-10 right-10 text-future-purple/20">
          <GraduationCap className="w-24 h-24" />
        </div>
      </section>

      {/* Features Grid */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Explore Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureCards.map((feature, index) => (
            <Card key={index} className="card-hover border border-gray-100">
              <CardHeader className="pb-2">
                <div className={`feature-icon ${feature.color} mb-4`}>
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="ghost" className="mt-2 w-full">
                  <Link to={feature.link}>Explore</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Recent Activity Section - Placeholder */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your recent interactions and progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                <div className="bg-future-purple/10 p-2 rounded-full">
                  <GraduationCap className="h-5 w-5 text-future-purple" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Assessment Started</p>
                  <p className="text-sm text-gray-500">Complete your skills assessment to get personalized guidance</p>
                </div>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/assessment">Continue</Link>
                </Button>
              </div>
              
              <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                <div className="bg-future-blue/10 p-2 rounded-full">
                  <ArrowUp className="h-5 w-5 text-future-blue" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Trending Careers</p>
                  <p className="text-sm text-gray-500">Explore the latest career trends in technology</p>
                </div>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/careers">View</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Dashboard;
