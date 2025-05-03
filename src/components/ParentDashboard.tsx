
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  GraduationCap, 
  Users, 
  BookOpen,
  Heart
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ParentDashboard = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold">Parent Guide</h1>
        <p className="text-gray-600">
          Resources and tools to help you support your child's career journey
        </p>
      </div>

      <Card className="bg-gradient-to-r from-future-mint to-future-softBlue">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-3/5">
              <h2 className="text-2xl font-bold mb-2">Welcome to the Parent Dashboard</h2>
              <p className="text-gray-700 mb-4">
                As a parent, you play a crucial role in your child's career development. 
                This guide provides resources to help you better understand and support
                your child's career exploration journey.
              </p>
              <Button>View Child's Progress</Button>
            </div>
            <div className="md:w-2/5 flex justify-center items-center">
              <div className="bg-white/30 backdrop-blur-sm p-6 rounded-xl">
                <Users className="h-20 w-20 text-future-purple mx-auto" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="guidance" className="w-full">
        <TabsList>
          <TabsTrigger value="guidance">Guidance Tips</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="discussions">Conversation Starters</TabsTrigger>
          <TabsTrigger value="support">Support Strategies</TabsTrigger>
        </TabsList>

        <TabsContent value="guidance" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>How to Guide Without Overwhelming</CardTitle>
              <CardDescription>
                Supportive techniques to help your child make career decisions without adding pressure
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Listen More Than You Speak</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">
                      Give your child the space to express their thoughts and feelings about their future.
                      Ask open-ended questions and listen attentively without interrupting.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-future-purple mb-2">Try This Approach:</h4>
                      <p className="italic text-gray-700">
                        "I'm interested in hearing what you're thinking about your future. Would you like to share some of your ideas with me?"
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>Support Exploration</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">
                      Encourage your child to explore different career options, even if they seem uncertain or unconventional.
                      Support informational interviews, job shadowing, and research into various fields.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium text-future-blue mb-2">Do:</h4>
                        <ul className="list-disc list-inside text-gray-700">
                          <li>Help connect them with professionals in fields of interest</li>
                          <li>Support participation in relevant extracurricular activities</li>
                          <li>Encourage volunteer opportunities to gain experience</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium text-red-500 mb-2">Avoid:</h4>
                        <ul className="list-disc list-inside text-gray-700">
                          <li>Dismissing interests as "just phases"</li>
                          <li>Pushing only towards high-paying careers</li>
                          <li>Comparing them to siblings or other students</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger>Manage Your Own Expectations</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">
                      Recognize when your own hopes and expectations are influencing your guidance.
                      Your child's career path may be different from what you imagined, and that's okay.
                    </p>
                    <div className="bg-future-softPeach p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Reflection Questions:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>Are you disappointed because their interest doesn't align with your hopes for them?</li>
                        <li>Are you concerned about status or are you truly concerned about their wellbeing?</li>
                        <li>Have you researched the career path they're interested in?</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Understanding Today's Career Landscape</CardTitle>
              <CardDescription>
                The job market has changed significantly since your own career beginnings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>
                  Today's students face a rapidly evolving job market with new career paths 
                  and changing requirements. Understanding this landscape will help you provide
                  more relevant guidance.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-future-purple mb-2 flex items-center">
                      <BookOpen className="h-4 w-4 mr-2" />
                      New Career Paths
                    </h4>
                    <p className="text-sm text-gray-700">
                      Many of today's careers didn't exist 10 years ago. Remote work, 
                      gig economy, and digital nomad lifestyles are increasingly common.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-future-blue mb-2 flex items-center">
                      <GraduationCap className="h-4 w-4 mr-2" />
                      Alternative Education
                    </h4>
                    <p className="text-sm text-gray-700">
                      Traditional college isn't the only path. Bootcamps, certifications, 
                      and self-directed learning can lead to successful careers.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-emerald-600 mb-2 flex items-center">
                      <Heart className="h-4 w-4 mr-2" />
                      Work-Life Balance
                    </h4>
                    <p className="text-sm text-gray-700">
                      Today's students often prioritize purpose and balance over 
                      maximizing income or traditional career advancement.
                    </p>
                  </div>
                </div>
                
                <Button variant="outline" className="mt-4">Download Full Guide</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Parent Resources</CardTitle>
              <CardDescription>
                Tools and articles to help you guide your child through career exploration
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center p-4 border rounded-lg">
                  <div className="bg-future-mint p-3 rounded-lg mr-4">
                    <BookOpen className="h-5 w-5 text-future-purple" />
                  </div>
                  <div>
                    <h3 className="font-medium">Understanding Learning Styles</h3>
                    <p className="text-sm text-gray-600">Learn how different learning styles can influence career paths</p>
                  </div>
                  <Button variant="outline" className="ml-auto">Read</Button>
                </div>
                
                <div className="flex items-center p-4 border rounded-lg">
                  <div className="bg-future-softBlue p-3 rounded-lg mr-4">
                    <Users className="h-5 w-5 text-future-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium">Supporting Career Exploration</h3>
                    <p className="text-sm text-gray-600">Practical ways to help your child explore different paths</p>
                  </div>
                  <Button variant="outline" className="ml-auto">Read</Button>
                </div>
                
                <div className="flex items-center p-4 border rounded-lg">
                  <div className="bg-future-softPeach p-3 rounded-lg mr-4">
                    <Heart className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Managing Academic Pressure</h3>
                    <p className="text-sm text-gray-600">How to help your child navigate academic challenges</p>
                  </div>
                  <Button variant="outline" className="ml-auto">Read</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="discussions" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Career Conversation Starters</CardTitle>
              <CardDescription>
                Meaningful questions to open up discussions about future goals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>
                  Starting conversations about careers can be challenging. Here are some questions
                  that can open up meaningful discussions without creating pressure.
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-medium text-future-purple mb-3">General Exploration</h3>
                  <ul className="space-y-3">
                    <li className="pb-3 border-b">
                      <p className="font-medium">"What do you enjoy doing that makes time seem to fly by?"</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Focuses on intrinsic motivation rather than external outcomes.
                      </p>
                    </li>
                    <li className="pb-3 border-b">
                      <p className="font-medium">"If you could shadow someone at their job for a day, what job would you choose?"</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Explores curiosity without requiring commitment.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">"What problems in the world would you most like to help solve?"</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Connects career thinking to purpose and impact.
                      </p>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-medium text-future-blue mb-3">When Facing Challenges</h3>
                  <ul className="space-y-3">
                    <li className="pb-3 border-b">
                      <p className="font-medium">"What part of this challenge is most frustrating for you?"</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Helps identify the specific source of difficulty.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">"What would success look like to you right now?"</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Reframes the discussion toward solutions and goals.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="support" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Support Strategies</CardTitle>
              <CardDescription>
                How to support your child through academic and career challenges
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-future-softGreen p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-green-700 mb-3">Supporting Through Failure</h3>
                  <p className="text-gray-700 mb-4">
                    Academic setbacks and failures can be devastating, but they can also be
                    opportunities for growth with the right support.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Immediate Response</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <div className="bg-white p-1 rounded-full mr-2 mt-0.5">
                            <Heart className="h-3 w-3 text-red-500" />
                          </div>
                          <span>Provide emotional support first, problem-solving second</span>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-white p-1 rounded-full mr-2 mt-0.5">
                            <Heart className="h-3 w-3 text-red-500" />
                          </div>
                          <span>Validate their feelings without minimizing the situation</span>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-white p-1 rounded-full mr-2 mt-0.5">
                            <Heart className="h-3 w-3 text-red-500" />
                          </div>
                          <span>Share your own experiences with setbacks when appropriate</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Moving Forward</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <div className="bg-white p-1 rounded-full mr-2 mt-0.5">
                            <BookOpen className="h-3 w-3 text-blue-500" />
                          </div>
                          <span>Help reframe the failure as information, not a definition</span>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-white p-1 rounded-full mr-2 mt-0.5">
                            <BookOpen className="h-3 w-3 text-blue-500" />
                          </div>
                          <span>Discuss what they learned and how it can inform future attempts</span>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-white p-1 rounded-full mr-2 mt-0.5">
                            <BookOpen className="h-3 w-3 text-blue-500" />
                          </div>
                          <span>Collaborate on an action plan with small, achievable steps</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-future-softPeach p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-orange-700 mb-3">Recognizing Warning Signs</h3>
                  <p className="text-gray-700 mb-4">
                    It's important to recognize when your child may need additional support
                    for their mental health and wellbeing.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Warning Signs</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="bg-white/70 p-3 rounded">
                          <p className="text-sm">Significant changes in sleep or eating habits</p>
                        </div>
                        <div className="bg-white/70 p-3 rounded">
                          <p className="text-sm">Withdrawal from activities they previously enjoyed</p>
                        </div>
                        <div className="bg-white/70 p-3 rounded">
                          <p className="text-sm">Expressions of hopelessness or worthlessness</p>
                        </div>
                        <div className="bg-white/70 p-3 rounded">
                          <p className="text-sm">Declining academic performance</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Taking Action</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <div className="bg-white p-1 rounded-full mr-2 mt-0.5">
                            <Heart className="h-3 w-3 text-red-500" />
                          </div>
                          <span>Approach conversations with openness and without judgment</span>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-white p-1 rounded-full mr-2 mt-0.5">
                            <Heart className="h-3 w-3 text-red-500" />
                          </div>
                          <span>Consult with school counselors or mental health professionals</span>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-white p-1 rounded-full mr-2 mt-0.5">
                            <Heart className="h-3 w-3 text-red-500" />
                          </div>
                          <span>Consider professional support if concerns persist</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ParentDashboard;
