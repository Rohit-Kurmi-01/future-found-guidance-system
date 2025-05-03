
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUp, Smile } from "lucide-react";

const MotivationStrategies = () => {
  return (
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
  );
};

export default MotivationStrategies;
