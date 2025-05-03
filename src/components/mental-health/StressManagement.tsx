
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const StressManagement = () => {
  return (
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
  );
};

export default StressManagement;
