
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, BookOpen, Users, Smile } from "lucide-react";

const SupportResources = () => {
  return (
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
  );
};

export default SupportResources;
