
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";

const StudentAssessment = () => {
  const [currentSection, setCurrentSection] = useState("interests");
  
  const handleSaveResponse = () => {
    toast.success("Your responses have been saved!");
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Student Assessment</CardTitle>
        <CardDescription>
          Complete this assessment to help us understand your interests, skills, and goals.
          Your responses will help generate personalized career recommendations.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={currentSection} onValueChange={setCurrentSection} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="interests">Interests & Passions</TabsTrigger>
            <TabsTrigger value="skills">Skills & Academics</TabsTrigger>
            <TabsTrigger value="emotional">Emotional State</TabsTrigger>
          </TabsList>
          
          <TabsContent value="interests" className="space-y-6 mt-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="interests">What activities do you enjoy doing in your free time?</Label>
                <Textarea 
                  id="interests" 
                  placeholder="Describe activities that you find engaging and enjoyable..."
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label>Which subjects do you find most interesting?</Label>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  {["Mathematics", "Sciences", "Arts", "Literature", "Social Studies", "Technology", "Physical Education", "Languages"].map((subject) => (
                    <div key={subject} className="flex items-center space-x-2">
                      <input type="checkbox" id={subject} className="rounded border-gray-300" />
                      <label htmlFor={subject}>{subject}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <Label>How do you prefer to work?</Label>
                <RadioGroup defaultValue="team" className="mt-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="independent" id="independent" />
                    <Label htmlFor="independent">Independently</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="team" id="team" />
                    <Label htmlFor="team">In a team</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="both" id="both" />
                    <Label htmlFor="both">Mix of both</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="skills" className="space-y-6 mt-6">
            <div className="space-y-4">
              <div>
                <Label>What are your strongest academic subjects?</Label>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  {["Mathematics", "Sciences", "English/Literature", "History", "Art/Music", "Technology/Computing", "Languages", "Social Sciences"].map((subject) => (
                    <div key={subject} className="flex items-center space-x-2">
                      <input type="checkbox" id={`strong-${subject}`} className="rounded border-gray-300" />
                      <label htmlFor={`strong-${subject}`}>{subject}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <Label htmlFor="skills">What skills do you believe you excel at?</Label>
                <Textarea 
                  id="skills" 
                  placeholder="Examples: problem-solving, creativity, communication, organization..."
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="achievements">List any notable achievements or awards:</Label>
                <Textarea 
                  id="achievements" 
                  placeholder="Academic awards, competitions, projects, etc..."
                  className="mt-1"
                />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="emotional" className="space-y-6 mt-6">
            <div className="space-y-4">
              <div>
                <Label>How would you describe your current stress level with academics?</Label>
                <RadioGroup defaultValue="moderate" className="mt-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="low" id="low" />
                    <Label htmlFor="low">Low - I'm handling things well</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="moderate" id="moderate" />
                    <Label htmlFor="moderate">Moderate - Sometimes stressed</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="high" id="high" />
                    <Label htmlFor="high">High - Often overwhelmed</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div>
                <Label htmlFor="struggles">Are there any specific areas where you're currently struggling?</Label>
                <Textarea 
                  id="struggles" 
                  placeholder="Describe any challenges you're facing academically or personally..."
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label>How do you feel about making career decisions?</Label>
                <RadioGroup defaultValue="uncertain" className="mt-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="confident" id="confident" />
                    <Label htmlFor="confident">Confident - I have a clear direction</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="uncertain" id="uncertain" />
                    <Label htmlFor="uncertain">Uncertain - I have some ideas but need guidance</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="anxious" id="anxious" />
                    <Label htmlFor="anxious">Anxious - I feel pressure and don't know what to do</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button 
          variant="outline"
          onClick={() => {
            if (currentSection === "interests") setCurrentSection("emotional");
            else if (currentSection === "skills") setCurrentSection("interests");
            else setCurrentSection("skills");
          }}
        >
          {currentSection === "interests" ? "Go to Emotional State" : 
           currentSection === "skills" ? "Go to Interests" : "Go to Skills"}
        </Button>
        <Button onClick={handleSaveResponse}>Save Responses</Button>
      </CardFooter>
    </Card>
  );
};

export default StudentAssessment;
