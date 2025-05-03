
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Smile, 
  Heart,
  BookOpen,
  ArrowUp,
  Users
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const MentalHealthSupport = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold">Wellbeing Support</h1>
        <p className="text-gray-600">
          Resources and tools to help maintain your mental health and motivation
        </p>
      </div>

      {/* Wellbeing Meter */}
      <Card className="bg-gradient-to-r from-future-softGreen to-future-mint">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold mb-2">How are you feeling today?</h2>
              <p className="text-gray-700 mb-6">
                Tracking your emotional wellbeing can help you understand patterns and get support when needed.
              </p>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Stress Level</span>
                    <span className="text-sm font-medium">Moderate</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Motivation</span>
                    <span className="text-sm font-medium">Good</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Academic Confidence</span>
                    <span className="text-sm font-medium">Needs Support</span>
                  </div>
                  <Progress value={40} className="h-2" />
                </div>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="bg-white/30 backdrop-blur-sm p-6 rounded-xl">
                <Smile className="h-20 w-20 text-emerald-500 mx-auto" />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="bg-white/50">
          <Button className="w-full sm:w-auto">Update Your Wellbeing Check-in</Button>
        </CardFooter>
      </Card>

      <Tabs defaultValue="resources" className="w-full">
        <TabsList>
          <TabsTrigger value="resources">Support Resources</TabsTrigger>
          <TabsTrigger value="stress">Stress Management</TabsTrigger>
          <TabsTrigger value="motivation">Motivation Tools</TabsTrigger>
          <TabsTrigger value="setbacks">Handling Setbacks</TabsTrigger>
        </TabsList>

        <TabsContent value="resources" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Mental Health Resources</CardTitle>
              <CardDescription>
                Support services and resources for students facing challenges
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-future-softBlue p-6 rounded-lg">
                  <h3 className="text-lg font-medium flex items-center mb-4">
                    <Heart className="h-5 w-5 mr-2 text-red-500" />
                    <span>Crisis Support</span>
                  </h3>
                  <p className="text-gray-700 mb-4">
                    If you're experiencing thoughts of self-harm or feeling overwhelmed, 
                    there are resources available 24/7 to support you.
                  </p>
                  <div className="bg-white/70 p-4 rounded-lg mb-4">
                    <p className="font-medium">National Suicide Prevention Lifeline</p>
                    <p className="text-future-blue font-bold text-xl">988</p>
                    <p className="text-sm text-gray-600">Call or text 24/7</p>
                  </div>
                  <div className="bg-white/70 p-4 rounded-lg">
                    <p className="font-medium">Crisis Text Line</p>
                    <p className="text-future-blue font-bold">Text HOME to 741741</p>
                    <p className="text-sm text-gray-600">Free 24/7 support</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2 flex items-center">
                      <BookOpen className="h-4 w-4 mr-2 text-future-purple" />
                      <span>School Resources</span>
                    </h3>
                    <p className="text-sm text-gray-700 mb-2">
                      Your school's counseling office can provide confidential support and guidance.
                    </p>
                    <Button variant="outline" size="sm">Find School Resources</Button>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2 flex items-center">
                      <Users className="h-4 w-4 mr-2 text-future-blue" />
                      <span>Support Groups</span>
                    </h3>
                    <p className="text-sm text-gray-700 mb-2">
                      Connect with peers facing similar challenges and learn coping strategies.
                    </p>
                    <Button variant="outline" size="sm">Find Support Groups</Button>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2 flex items-center">
                      <Smile className="h-4 w-4 mr-2 text-emerald-500" />
                      <span>Mental Health Apps</span>
                    </h3>
                    <p className="text-sm text-gray-700 mb-2">
                      Apps for meditation, mood tracking, and managing anxiety.
                    </p>
                    <Button variant="outline" size="sm">Explore Apps</Button>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <h3 className="text-amber-800 font-medium mb-2">Important Note</h3>
                <p className="text-sm text-amber-700">
                  This tool provides information and resources but is not a substitute for 
                  professional medical advice, diagnosis, or treatment. If you're experiencing 
                  a mental health emergency, please contact emergency services or a crisis helpline immediately.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="stress" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Stress Management Techniques</CardTitle>
              <CardDescription>
                Practical strategies to help manage academic and career-related stress
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p>
                  Learning to manage stress is a crucial skill that will benefit you throughout
                  your academic journey and beyond. Here are some evidence-based techniques:
                </p>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="breathing">
                    <AccordionTrigger>Breathing Exercises</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <p>
                          Controlled breathing can help reduce stress by activating your parasympathetic 
                          nervous system, which controls relaxation.
                        </p>
                        
                        <div className="bg-future-mint p-4 rounded-lg">
                          <h4 className="font-medium mb-2">4-7-8 Breathing Technique</h4>
                          <ol className="space-y-2 list-decimal list-inside text-gray-700">
                            <li>Exhale completely through your mouth</li>
                            <li>Close your mouth and inhale through your nose for 4 counts</li>
                            <li>Hold your breath for 7 counts</li>
                            <li>Exhale completely through your mouth for 8 counts</li>
                            <li>Repeat this cycle 3-4 times</li>
                          </ol>
                          <p className="text-sm text-gray-600 mt-2">
                            Try this technique before exams or when feeling overwhelmed.
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="mindfulness">
                    <AccordionTrigger>Mindfulness Practices</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <p>
                          Mindfulness involves paying attention to the present moment without judgment.
                          Regular practice can reduce anxiety and improve focus.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-medium mb-2">5-Minute Body Scan</h4>
                            <p className="text-sm text-gray-700">
                              Sit comfortably and focus your attention on each part of your body 
                              sequentially, from your toes to your head, noticing any sensations without judgment.
                            </p>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-medium mb-2">Mindful Studying</h4>
                            <p className="text-sm text-gray-700">
                              Remove distractions, set a timer for 25 minutes, and focus completely on one task. 
                              Notice when your mind wanders and gently bring it back to your work.
                            </p>
                          </div>
                        </div>
                        
                        <Button variant="outline">Try Guided Meditation</Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="timemanagement">
                    <AccordionTrigger>Time Management Strategies</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <p>
                          Effective time management can reduce stress by helping you feel more in control 
                          and preventing last-minute cramming.
                        </p>
                        
                        <div className="bg-future-softBlue p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Pomodoro Technique</h4>
                          <ol className="space-y-2 list-decimal list-inside text-gray-700">
                            <li>Choose one task to focus on</li>
                            <li>Set a timer for 25 minutes</li>
                            <li>Work on the task until the timer rings</li>
                            <li>Take a short 5-minute break</li>
                            <li>After four cycles, take a longer 15-30 minute break</li>
                          </ol>
                        </div>
                        
                        <div className="border p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Priority Matrix</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Categorize tasks based on their urgency and importance:
                          </p>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="bg-red-50 p-2 rounded">
                              <p className="font-medium text-sm">Urgent & Important</p>
                              <p className="text-xs text-gray-600">Do these tasks first</p>
                            </div>
                            <div className="bg-amber-50 p-2 rounded">
                              <p className="font-medium text-sm">Important, Not Urgent</p>
                              <p className="text-xs text-gray-600">Schedule time for these</p>
                            </div>
                            <div className="bg-blue-50 p-2 rounded">
                              <p className="font-medium text-sm">Urgent, Not Important</p>
                              <p className="text-xs text-gray-600">Delegate if possible</p>
                            </div>
                            <div className="bg-green-50 p-2 rounded">
                              <p className="font-medium text-sm">Not Urgent or Important</p>
                              <p className="text-xs text-gray-600">Eliminate these tasks</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="motivation" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Motivation Strategies</CardTitle>
              <CardDescription>
                Tools and techniques to maintain motivation during your educational journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium flex items-center">
                    <ArrowUp className="h-5 w-5 mr-2 text-future-purple" />
                    <span>Goal-Setting Framework</span>
                  </h3>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">SMART Goals</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="font-bold text-future-purple mr-2">S</span>
                        <div>
                          <span className="font-medium">Specific</span>
                          <p className="text-sm text-gray-600">Clear and well-defined</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold text-future-purple mr-2">M</span>
                        <div>
                          <span className="font-medium">Measurable</span>
                          <p className="text-sm text-gray-600">Quantifiable progress and success</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold text-future-purple mr-2">A</span>
                        <div>
                          <span className="font-medium">Achievable</span>
                          <p className="text-sm text-gray-600">Realistic and attainable</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold text-future-purple mr-2">R</span>
                        <div>
                          <span className="font-medium">Relevant</span>
                          <p className="text-sm text-gray-600">Aligned with your broader aims</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold text-future-purple mr-2">T</span>
                        <div>
                          <span className="font-medium">Time-bound</span>
                          <p className="text-sm text-gray-600">Clear deadline or timeframe</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Goal Example</h4>
                    <div className="space-y-2">
                      <div>
                        <p className="text-sm text-red-500">Instead of: "I want to do better in math"</p>
                      </div>
                      <div>
                        <p className="text-sm text-green-600 font-medium">Try: "I will improve my calculus grade from a C to a B by studying 30 minutes daily and attending tutoring once a week for the next 6 weeks"</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button>Create Your SMART Goals</Button>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium flex items-center">
                    <Smile className="h-5 w-5 mr-2 text-emerald-500" />
                    <span>Building Motivation Habits</span>
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="bg-future-softGreen p-4 rounded-lg">
                      <h4 className="font-medium mb-1">Finding Your "Why"</h4>
                      <p className="text-sm text-gray-700">
                        Connect your daily tasks to your bigger purpose and long-term goals.
                      </p>
                      <div className="mt-2 bg-white/50 p-3 rounded">
                        <p className="text-sm italic">
                          "I'm studying biology not just to pass a test, but because it brings me closer to my goal of becoming a veterinarian and helping animals."
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-future-softPeach p-4 rounded-lg">
                      <h4 className="font-medium mb-1">Celebrate Small Wins</h4>
                      <p className="text-sm text-gray-700">
                        Acknowledge and reward your progress, even on small tasks.
                      </p>
                      <div className="mt-2 p-2 border border-dashed border-amber-300 rounded">
                        <p className="text-xs font-medium">Try This:</p>
                        <p className="text-sm">
                          Create a "wins journal" where you record daily accomplishments, 
                          no matter how small, and review it when motivation is low.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-future-softBlue p-4 rounded-lg">
                      <h4 className="font-medium mb-1">Visualization</h4>
                      <p className="text-sm text-gray-700">
                        Regularly visualize yourself achieving your goals and the positive feelings associated with success.
                      </p>
                      <div className="mt-2 p-2 border border-dashed border-blue-300 rounded">
                        <p className="text-xs font-medium">Daily Practice:</p>
                        <p className="text-sm">
                          Spend 5 minutes each morning imagining yourself succeeding at your most important task for the day.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="setbacks" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Overcoming Academic Setbacks</CardTitle>
              <CardDescription>
                Strategies for bouncing back from failures and disappointments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p>
                  Academic setbacks are a normal part of any educational journey. How you 
                  respond to these challenges can make a significant difference in your growth 
                  and future success.
                </p>
                
                <div className="bg-gradient-to-r from-future-mint to-future-softBlue p-6 rounded-lg">
                  <h3 className="text-lg font-medium mb-4">Reframing Academic Failure</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/80 p-4 rounded-lg">
                      <h4 className="font-medium text-red-500 mb-2">Fixed Mindset Thinking</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span>"I failed this test because I'm not smart enough."</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span>"This proves I don't belong in this field."</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span>"Other students are naturally better at this than me."</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span>"There's no point in trying again if I'm just going to fail."</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-white/80 p-4 rounded-lg">
                      <h4 className="font-medium text-green-600 mb-2">Growth Mindset Thinking</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          <span>"I didn't perform well this time, but I can learn from this experience."</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          <span>"This is telling me I need to adjust my approach or study methods."</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          <span>"Everyone struggles at times, even those who appear to be succeeding easily."</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          <span>"Each attempt teaches me something valuable for my next try."</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="recovery">
                    <AccordionTrigger>Recovery Action Plan</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <p>
                          Having a structured approach to recovering from setbacks can help you 
                          move forward constructively rather than getting stuck.
                        </p>
                        
                        <ol className="space-y-4">
                          <li className="p-4 border rounded-lg">
                            <div className="flex items-center gap-3">
                              <div className="bg-future-purple text-white rounded-full w-6 h-6 flex items-center justify-center font-medium">1</div>
                              <h4 className="font-medium">Acknowledge Your Feelings</h4>
                            </div>
                            <p className="text-sm mt-2 pl-9">
                              It's normal to feel disappointed, frustrated, or upset after a setback. 
                              Give yourself permission to experience these emotions without judgment.
                            </p>
                          </li>
                          
                          <li className="p-4 border rounded-lg">
                            <div className="flex items-center gap-3">
                              <div className="bg-future-purple text-white rounded-full w-6 h-6 flex items-center justify-center font-medium">2</div>
                              <h4 className="font-medium">Analyze What Happened</h4>
                            </div>
                            <p className="text-sm mt-2 pl-9">
                              Once emotions have settled, objectively review what went wrong. 
                              Was it preparation, understanding, time management, or something else?
                            </p>
                          </li>
                          
                          <li className="p-4 border rounded-lg">
                            <div className="flex items-center gap-3">
                              <div className="bg-future-purple text-white rounded-full w-6 h-6 flex items-center justify-center font-medium">3</div>
                              <h4 className="font-medium">Identify Alternative Approaches</h4>
                            </div>
                            <p className="text-sm mt-2 pl-9">
                              Based on your analysis, what specific changes can you make? 
                              Consider seeking advice from teachers, tutors, or successful peers.
                            </p>
                          </li>
                          
                          <li className="p-4 border rounded-lg">
                            <div className="flex items-center gap-3">
                              <div className="bg-future-purple text-white rounded-full w-6 h-6 flex items-center justify-center font-medium">4</div>
                              <h4 className="font-medium">Create a Specific Action Plan</h4>
                            </div>
                            <p className="text-sm mt-2 pl-9">
                              Develop concrete steps for improvement with clear timelines and measurable outcomes.
                            </p>
                          </li>
                          
                          <li className="p-4 border rounded-lg">
                            <div className="flex items-center gap-3">
                              <div className="bg-future-purple text-white rounded-full w-6 h-6 flex items-center justify-center font-medium">5</div>
                              <h4 className="font-medium">Implement and Monitor Progress</h4>
                            </div>
                            <p className="text-sm mt-2 pl-9">
                              Put your plan into action and regularly assess what's working and what needs adjustment.
                            </p>
                          </li>
                        </ol>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="alternatives">
                    <AccordionTrigger>Exploring Alternative Paths</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <p>
                          Sometimes a setback indicates that you might benefit from exploring 
                          alternative routes to your goals or even adjusting the goals themselves.
                        </p>
                        
                        <div className="bg-future-softPeach p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Remember:</h4>
                          <p className="text-sm italic">
                            "There are many paths to success, and the most direct route isn't always the best one. 
                            Some of the most fulfilling careers come from unexpected detours."
                          </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="border p-4 rounded-lg">
                            <h4 className="font-medium mb-2">Transferable Skills</h4>
                            <p className="text-sm text-gray-700">
                              If one subject or career path isn't working out, identify which skills you've 
                              developed that could transfer to related fields.
                            </p>
                          </div>
                          
                          <div className="border p-4 rounded-lg">
                            <h4 className="font-medium mb-2">Parallel Paths</h4>
                            <p className="text-sm text-gray-700">
                              Consider alternatives that align with your core interests and values 
                              but approach them from a different angle.
                            </p>
                          </div>
                        </div>
                        
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium mb-2">Example: Pre-Med Student</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            A student struggling with organic chemistry might explore:
                          </p>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start">
                              <ArrowUp className="h-4 w-4 mr-2 text-future-purple" />
                              <span>Allied health fields like physician assistant or nursing</span>
                            </li>
                            <li className="flex items-start">
                              <ArrowUp className="h-4 w-4 mr-2 text-future-purple" />
                              <span>Health policy or public health positions</span>
                            </li>
                            <li className="flex items-start">
                              <ArrowUp className="h-4 w-4 mr-2 text-future-purple" />
                              <span>Healthcare technology or administration roles</span>
                            </li>
                            <li className="flex items-start">
                              <ArrowUp className="h-4 w-4 mr-2 text-future-purple" />
                              <span>Finding a different pre-med program with additional support</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
                <div className="flex justify-center">
                  <Button>Create Your Recovery Plan</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MentalHealthSupport;
