
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Smile } from "lucide-react";

const WellbeingMeter = () => {
  return (
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
  );
};

export default WellbeingMeter;
