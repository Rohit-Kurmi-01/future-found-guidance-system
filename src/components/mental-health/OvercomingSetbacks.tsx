
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowUp } from "lucide-react";

const OvercomingSetbacks = () => {
  return (
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
  );
};

export default OvercomingSetbacks;
